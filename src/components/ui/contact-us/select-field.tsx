import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormInputs, ServiceType } from "./schema";

const SelectField = ({
  name,
  register,
  errors,
  label,
  options,
  value,
}: {
  name: keyof FormInputs;
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
  label: string;
  options: { value: ServiceType; label: string }[];
  value: string;
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

      <div className="w-full relative">
        <select
          className={`w-full h-[48px] py-3 border-b ${
            hasError ? "border-red-600" : "border-[#EBEAE7]/10"
          } focus-within:border-primary-pink outline-none bg-transparent 
           appearance-none cursor-pointer ${
             value ? "text-[#F2F2F2]" : "text-[#6E6E6E]"
           } text-sm font-normal leading-[24px]`}
          {...register(name)}
          id={name}
        >
          <option value="">Select a service</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L5 5L9 1"
              stroke="#F2F2F2"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {hasError && errorMessage && (
        <div className="flex flex-row gap-1 items-center justify-start">
          <p className="text-red-600">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default SelectField;
