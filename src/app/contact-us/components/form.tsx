"use client";
import { useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInputs, schema, serviceOptions } from "../schema";
import InputField from "./input";
import { CONTACT_EMAIL } from "@/lib/utils/constants";
import SelectField from "./select-field";
import Button from "@/components/button";
import arrowBlackIcon from "../../../../public/icons/arrow-black-icon.svg";
import { useColorCycle } from "@/lib/hooks/use-color-cycle";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<FormInputs>({ resolver: yupResolver(schema) });
  const color = useColorCycle();

  const [isLoading, setIsLoading] = useState(false);
  const [apiRes, setApiRes] = useState<{
    status: "success" | "fail";
    message: string;
  }>({
    status: "success",
    message: "",
  });

  const sendEmail = async (data: FormInputs) => {
    setIsLoading(true);
    // setApiRes({ status: "success", message: "" });

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
        setApiRes({
          status: "success",
          message:
            "Your request was successfully submited, Thanks for reaching out!",
        });
        reset();
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Your request was Not submitted, Please try agian.";
      setApiRes({
        status: "fail",
        message: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    sendEmail(data);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {apiRes.message && (
        <div
          className={`w-full flex flex-row gap-2 items-center justify-start p-2 mb-10 rounded bg-white/10 ${
            apiRes.status === "fail" ? "text-error" : ""
          }`}
        >
          {apiRes.status === "success" ? (
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
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M4.10697 4.10697C0.860175 7.35377 0.860175 12.6453 4.10697 15.8921C7.35377 19.1389 12.6453 19.1389 15.8921 15.8921C19.1389 12.6453 19.1389 7.35377 15.8921 4.10697C12.6453 0.860175 7.35377 0.860175 4.10697 4.10697ZM12.7985 8.08445L10.8834 9.99953L12.7985 11.9146C13.0401 12.1562 13.0401 12.5569 12.7985 12.7985C12.5569 13.0401 12.1562 13.0401 11.9146 12.7985L9.99953 10.8834L8.08445 12.7985C7.84285 13.0401 7.44216 13.0401 7.20057 12.7985C6.95897 12.5569 6.95897 12.1562 7.20057 11.9146L9.11565 9.99953L7.20057 8.08445C6.95897 7.84286 6.95897 7.44216 7.20057 7.20057C7.44216 6.95897 7.84285 6.95897 8.08445 7.20057L9.99953 9.11565L11.9146 7.20057C12.1562 6.95897 12.5569 6.95897 12.7985 7.20057C13.0401 7.44216 13.0401 7.84286 12.7985 8.08445Z"
                fill="#DD2E44"
              />
            </svg>
          )}

          <p className="text-sm font-medium leading-[24px]">{apiRes.message}</p>
        </div>
      )}

      <form
        className="w-full flex flex-col items-start justify-center gap-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full flex flex-col items-start justify-center gap-[70px] mb-4">
          <div
            className="w-full flex flex-col lg:flex-row 
              items-start lg:items-end justify-start gap-[100px]"
          >
            <div className="w-full sm:max-w-[412px]">
              <InputField
                name="name"
                register={register}
                errors={errors}
                placeholder="Your Name"
                label="01 /"
              />
            </div>

            <div className="w-full sm:max-w-[412px]">
              <InputField
                name="email"
                register={register}
                errors={errors}
                placeholder="Company Email"
                label="02 /"
              />
            </div>
          </div>

          <div
            className="w-full flex flex-col lg:flex-row 
              items-start lg:items-end justify-start gap-[100px]"
          >
            <div className="w-full sm:max-w-[412px]">
              <InputField
                name="company"
                register={register}
                errors={errors}
                placeholder="Company Name"
                label="03 /"
              />
            </div>

            <div className="w-full sm:max-w-[412px]">
              <SelectField
                name="service"
                control={control}
                errors={errors}
                label="04 /"
                options={serviceOptions}
              />
            </div>

            <Button
              className="gap-2"
              variant="primary"
              disabled={isLoading}
              style={{ backgroundColor: color }}
            >
              <p className="text-base">{isLoading ? "Sending..." : "Submit"}</p>
              <Image className="mb-1 -rotate-45" src={arrowBlackIcon} alt="arrow" />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
