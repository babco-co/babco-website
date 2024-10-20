import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormInputs } from "./schema";

const InputField = ({
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
        className="text-sm font-medium leading-[24px] text-[#F2F2F2]"
        htmlFor={name}
      >
        {label}
      </label>

      <input
        className={`w-full h-[48px] py-3 border-b ${
          hasError ? "border-error" : "border-[#EBEAE7]/10"
        } focus-within:border-primary-pink outline-none bg-transparent 
        text-sm font-normal laeading-[24px] text-primary-white placeholder-[#6E6E6E]`}
        {...register(name)}
        id={name}
        placeholder={placeholder}
        type={"text"}
      />

      {hasError && errorMessage && (
        <div className="flex flex-row gap-1 items-center justify-start">
          <p className="text-error">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default InputField;
