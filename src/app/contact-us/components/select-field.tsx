"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Control, FieldErrors, Controller } from "react-hook-form";
import Select, {
  DropdownIndicatorProps,
  components,
  StylesConfig,
  InputProps,
} from "react-select";
import { FormInputs, SelectOption } from "../schema";
import arrowDownIcon from "../../../../public/icons/arrow-down-icon.svg";

const SelectField = ({
  name,
  control,
  errors,
  label,
  options,
}: {
  name: keyof FormInputs;
  control: Control<FormInputs>;
  errors: FieldErrors<FormInputs>;
  label: string;
  options: SelectOption[];
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const hasError = !!errors[name];
  const errorMessage = errors[name]?.message;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const customStyles: StylesConfig<SelectOption, true> = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "transparent",
      border: "none",
      borderBottom: "1px solid transparent",
      borderRadius: 0,
      boxShadow: "none",
      padding: "12px 0",
      cursor: "pointer",
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: "0",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#6E6E6E",
      fontSize: "14px",
      lineHeight: "24px",
    }),
    input: (provided) => ({
      ...provided,
      color: "rgb(46, 46, 46)",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
  };

  const DropdownIndicator = (
    props: DropdownIndicatorProps<SelectOption, true>
  ) => {
    return (
      <components.DropdownIndicator {...props}>
        <Image src={arrowDownIcon} alt="arrow" />
      </components.DropdownIndicator>
    );
  };

  const CustomInput = (props: InputProps<SelectOption, true>) => {
    return <components.Input {...props} aria-activedescendant={undefined} />;
  };

  if (!isMounted) {
    return (
      <div className="w-full flex flex-col gap-2 items-start justify-center">
        <label className="text-sm font-medium leading-[24px] text-text-primary-light dark:text-[#F2F2F2]">
          {label}
        </label>
        <div className="w-full h-12 border-b border-border-sec-light dark:border-border-sec-dark" />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-2 items-start justify-center">
      <label
        className="text-sm font-medium leading-[24px] text-text-primary-light dark:text-[#F2F2F2]"
        htmlFor={name}
      >
        {label}
      </label>

      <div className="w-full">
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Select<SelectOption, true>
              options={options}
              isMulti
              styles={customStyles}
              components={{
                DropdownIndicator,
                IndicatorSeparator: null,
                Input: CustomInput,
              }}
              placeholder="Services"
              classNames={{
                control: () =>
                  `border-b! ${
                    hasError
                      ? "border-error!"
                      : "border-border-sec-light! dark:border-border-sec-dark! focus-within:border-brand-light! dark:focus-within:border-brand-dark!"
                  }`,
                menu: () =>
                  "bg-background-light! dark:bg-black! border! border-border-sec-light! dark:border-border-sec-dark!",
                menuList: () => "p-2!",
                option: (state) =>
                  `text-text-primary-light! dark:text-light-gray! ${
                    state.isFocused
                      ? "bg-border-sec-light/10! dark:bg-[#2D2D2D]!"
                      : "bg-transparent!"
                  } !rounded`,
                placeholder: () => "text-dark-gray!",
                multiValue: () =>
                  "bg-border-sec-light/10! dark:bg-[#292929]! rounded-md! px-1!",
                multiValueLabel: () =>
                  "text-text-primary-light! dark:text-[#F2F2F2]! text-sm!",
                multiValueRemove: () =>
                  "hover:bg-transparent! hover:text-brand-light!",
                input: () => "text-text-primary-light! dark:text-[#F2F2F2]!",
              }}
              className="w-full"
              menuPlacement="top"
              value={options.filter((option) =>
                field.value?.includes(option.value)
              )}
              onChange={(newValue) => {
                const selectedValues = newValue.map((item) => item.value);
                field.onChange(selectedValues);
              }}
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                },
              })}
            />
          )}
        />
      </div>

      {hasError && errorMessage && (
        <div className="flex flex-row gap-1 items-center justify-start">
          <p className="text-error">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default SelectField;
