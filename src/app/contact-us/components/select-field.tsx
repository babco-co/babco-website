"use client";
import { useEffect, useState } from "react";
import { Control, FieldErrors, Controller } from "react-hook-form";
import Select, {
  DropdownIndicatorProps,
  components,
  StylesConfig,
  InputProps,
} from "react-select";
import { FormInputs, SelectOption } from "../schema";

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="text-dark-gray"
        >
          <path
            d="M7.99708 11.2004C7.53042 11.2004 7.06375 11.0204 6.71042 10.6671L2.36375 6.32042C2.17042 6.12708 2.17042 5.80708 2.36375 5.61375C2.55708 5.42042 2.87708 5.42042 3.07042 5.61375L7.41708 9.96042C7.73708 10.2804 8.25708 10.2804 8.57708 9.96042L12.9237 5.61375C13.1171 5.42042 13.4371 5.42042 13.6304 5.61375C13.8238 5.80708 13.8238 6.12708 13.6304 6.32042L9.28375 10.6671C8.93042 11.0204 8.46375 11.2004 7.99708 11.2004Z"
            fill="currentColor"
          />
        </svg>
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
                  `!border-b ${
                    hasError
                      ? "!border-error"
                      : "!border-border-sec-light dark:!border-border-sec-dark hover:!border-primary-pink"
                  }`,
                menu: () =>
                  "!bg-background-light dark:!bg-black !border !border-border-sec-light dark:!border-[rgba(255,255,255,0.30)]",
                menuList: () => "!p-2",
                option: (state) =>
                  `!text-text-primary-light dark:!text-[#808080] ${
                    state.isFocused
                      ? "!bg-border-sec-light/10 dark:!bg-[#2D2D2D]"
                      : "!bg-transparent"
                  } !rounded`,
                placeholder: () => "!text-dark-gray",
                multiValue: () =>
                  "!bg-border-sec-light/10 dark:!bg-[#292929] !rounded-md !px-1",
                multiValueLabel: () =>
                  "!text-text-primary-light dark:!text-[#F2F2F2] !text-sm",
                multiValueRemove: () =>
                  "hover:!bg-transparent hover:!text-primary-pink",
                input: () => "!text-text-primary-light dark:!text-[#F2F2F2]",
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
