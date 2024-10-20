import { Control, FieldErrors, Controller } from "react-hook-form";
import Select, { StylesConfig, components } from "react-select";
import { FormInputs, ServiceType, SelectOption } from "./schema";

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
  const hasError = !!errors[name];
  const errorMessage = errors[name]?.message;

  const customStyles: StylesConfig<SelectOption, true> = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "transparent",
      border: "none",
      borderBottom: `1px solid ${
        hasError ? "#DC2626" : "rgba(235, 234, 231, 0.1)"
      }`,
      borderRadius: 0,
      boxShadow: "none",
      padding: "12px 0",
      cursor: "pointer",
      "&:hover": {
        borderBottom: `1px solid ${hasError ? "#DC2626" : "#FFC0F1"}`,
      },
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
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#292929",
      borderRadius: "6px",
      padding: "4px",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "#FFF",
      fontSize: "12px",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "#F2F2F2",
      "&:hover": {
        backgroundColor: "transparent",
        color: "#FF69B4",
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#000",
      border: "1px solid rgba(255, 255, 255, 0.30)",
      borderRadius: "4px",
      padding: "12px 8px",
      marginTop: "4px",
      bottom: "100%",
      top: "auto",
      marginBottom: "30px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#2D2D2D" : "transparent",
      color: "#808080",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#2D2D2D",
      },
      borderRadius: "4px",
    }),
    input: (provided) => ({
      ...provided,
      color: "#F2F2F2",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
  };

  const DropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M7.99708 11.2004C7.53042 11.2004 7.06375 11.0204 6.71042 10.6671L2.36375 6.32042C2.17042 6.12708 2.17042 5.80708 2.36375 5.61375C2.55708 5.42042 2.87708 5.42042 3.07042 5.61375L7.41708 9.96042C7.73708 10.2804 8.25708 10.2804 8.57708 9.96042L12.9237 5.61375C13.1171 5.42042 13.4371 5.42042 13.6304 5.61375C13.8238 5.80708 13.8238 6.12708 13.6304 6.32042L9.28375 10.6671C8.93042 11.0204 8.46375 11.2004 7.99708 11.2004Z"
            fill="#6E6E6E"
          />
        </svg>
      </components.DropdownIndicator>
    );
  };

  return (
    <div className="w-full flex flex-col gap-2 items-start justify-center">
      <label
        className="text-sm font-medium leading-[24px] text-[#F2F2F2]"
        htmlFor={name}
      >
        {label}
      </label>

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
            }}
            placeholder="Select services"
            className="w-full"
            menuPlacement="top"
            value={options.filter((option) =>
              field.value?.includes(option.value)
            )}
            onChange={(newValue) => {
              // Extract just the values from the selected options
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

      {hasError && errorMessage && (
        <div className="flex flex-row gap-1 items-center justify-start">
          <p className="text-error">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default SelectField;
