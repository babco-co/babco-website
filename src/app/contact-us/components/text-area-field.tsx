import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormInputs } from "../schema";

const TextAreaField = ({
    name,
    register,
    errors,
    placeholder,
    label,
  }: {
    name: keyof FormInputs;
    register: UseFormRegister<FormInputs>;
    errors: FieldErrors<FormInputs>;
    placeholder: string;
    label: string;
  }) => {
    const hasError = !!errors[name];
    const errorMessage = errors[name]?.message;
  
    return (
      <div className="w-full flex flex-col gap-2 items-start justify-center">
        <label
          className="text-sm font-medium leading-[24px] text-text-primary-light dark:text-[#F2F2F2]"
          htmlFor={name}
        >
          {label}
        </label>
  
        <textarea
          className={`w-full min-h-[48px] py-3 border-b resize-none
          ${
            hasError
              ? "border-error"
              : "border-border-sec-light dark:border-border-sec-dark"
          }
          focus-within:border-brand-light focus-within:dark:border-brand-dark outline-none bg-transparent 
          text-sm font-normal leading-[24px] text-text-primary-light dark:text-text-primary-dark placeholder-[#6E6E6E]
          [&:-webkit-autofill]:bg-black
          [&:-webkit-autofill]:shadow-[0_0_0_30px_black_inset]
          [&:-webkit-autofill]:text-text-primary-light dark:[&:-webkit-autofill]:text-text-primary-dark
          [&:-webkit-autofill]:[-webkit-text-fill-color:text-text-primary-light] dark:[&:-webkit-autofill]:[-webkit-text-fill-color:text-text-primary-dark]
          [&:-webkit-autofill]:[transition-delay:9999s]
          [&:-webkit-autofill]:[-webkit-box-shadow:0_0_0_30px_black_inset]
          appearance-none
          hover:bg-transparent focus:bg-transparent`}
          {...register(name)}
          id={name}
          placeholder={placeholder}
          rows={1}
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = 'auto';
            target.style.height = `${target.scrollHeight}px`;
          }}
        />
  
        {hasError && errorMessage && (
          <div className="flex flex-row gap-1 items-center justify-start">
            <p className="text-error">{errorMessage}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default TextAreaField;