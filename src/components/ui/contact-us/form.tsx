import { useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInputs, schema, serviceOptions } from "./schema";
import InputField from "./input";
import Button from "../button";
import { CONTACT_EMAIL } from "@/lib/utils/constants";
import arrowRightIcon from "../../../../public/arrow-right-icon.svg";
import SelectField from "./select-field";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<FormInputs>({ resolver: yupResolver(schema) });

  const [isLoading, setIsLoading] = useState(false);
  const [apiRes, setApiRes] = useState<string | null>("");

  const sendEmail = async (data: FormInputs) => {
    setIsLoading(true);
    setApiRes(null);

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        {
          from_name: data.name,
          from_email: data.email,
          from_company: data.company,
          service_needed: data.service.join(", "),
          to_name: "Babco.co",
          to_email: CONTACT_EMAIL,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
      );

      if (response.status === 200) {
        setApiRes(
          "Your request was successfully submited, Thanks for reaching out!"
        );
        reset();
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to send email. Please try again.";
      setApiRes(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    sendEmail(data);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {apiRes && (
        <div className="w-full flex flex-row gap-2 items-center justify-start p-2 mb-10 rounded bg-white/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10 0C4.49 0 0 4.49 0 10C0 15.51 4.49 20 10 20C15.51 20 20 15.51 20 10C20 4.49 15.51 0 10 0ZM14.78 7.7L9.11 13.37C8.97 13.51 8.78 13.59 8.58 13.59C8.38 13.59 8.19 13.51 8.05 13.37L5.22 10.54C4.93 10.25 4.93 9.77 5.22 9.48C5.51 9.19 5.99 9.19 6.28 9.48L8.58 11.78L13.72 6.64C14.01 6.35 14.49 6.35 14.78 6.64C15.07 6.93 15.07 7.4 14.78 7.7Z"
              fill="white"
            />
          </svg>
          <p className="text-sm font-medium leading-[24px] text-white">
            {apiRes}
          </p>
        </div>
      )}

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
            control={control}
            errors={errors}
            label="What services do you need from our agency?"
            options={serviceOptions}
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
      </form>
    </div>
  );
};

export default ContactForm;
