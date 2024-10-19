import { useState } from "react";
import Image from "next/image";
import { useCallback } from "react";
import emailjs from "@emailjs/browser";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInputs, schema, ServiceType } from "./schema";
import InputField from "./input";
import Button from "../button";
import { CONTACT_EMAIL } from "@/lib/utils/constants";
import arrowRightIcon from "../../../../public/arrow-right-icon.svg";
import SelectField from "./select-field";

const serviceOptions: { value: ServiceType; label: string }[] = [
  { value: "consulting", label: "Consulting" },
  { value: "development", label: "Development" },
  { value: "design", label: "Design" },
  { value: "other", label: "Other" },
];

const ContactForm = ({ closeModal }: { closeModal: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormInputs>({ resolver: yupResolver(schema) });

  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>("");

  const service = watch("service");

  const sendEmail = async (data: FormInputs) => {
    setIsLoading(true);
    setApiError(null);

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        {
          from_name: data.name,
          from_email: data.email,
          from_company: data.company,
          service_needed: data.service,
          to_name: "Babco.co",
          to_email: CONTACT_EMAIL,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
      );

      if (response.status === 200) {
        reset();
        closeModal();
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to send email. Please try again.";
      setApiError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit: SubmitHandler<FormInputs> = useCallback(
    (data) => {
      sendEmail(data);
    },
    [sendEmail]
  );

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <form
        className="w-full flex flex-col items-start justify-center gap-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full sm:w-2/3 flex flex-col items-start justify-center gap-6 mb-4">
          <InputField
            name="name"
            register={register}
            errors={errors}
            placeholder="Name"
            label="Enter your name"
          />

          <InputField
            name="email"
            register={register}
            errors={errors}
            placeholder="Email"
            label="Enter your email"
          />

          <InputField
            name="company"
            register={register}
            errors={errors}
            placeholder="Company"
            label="Enter company name"
          />

          <SelectField
            name="service"
            register={register}
            errors={errors}
            label="What services do you need from our agency?"
            options={serviceOptions}
            value={service}
          />
        </div>

        <Button
          className="w-[167px] h-[44px] gap-2 text-lg"
          variant="primary"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Talk to us"}
          <Image src={arrowRightIcon} alt="arrow" width={22} height={16} />
        </Button>

        {apiError && (
          <div className="flex flex-row gap-1 items-center justify-start">
            <p className="text-red-600">{apiError}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
