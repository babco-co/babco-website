"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Select, { components, DropdownIndicatorProps } from "react-select";
import arrowDownIcon from "../../../public/icons/arrow-down-icon.svg";

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  interface OptionType {
    value: string;
    label: string;
  }

  const options: OptionType[] = [
    { value: "light", label: "Lights on" },
    { value: "dark", label: "Lights off" },
    { value: "system", label: "System Preference" },
  ];

  const DropdownIndicator = (
    props: DropdownIndicatorProps<OptionType, false>
  ) => {
    return (
      <components.DropdownIndicator {...props}>
        <Image src={arrowDownIcon} alt="arrow" />
      </components.DropdownIndicator>
    );
  };

  if (!mounted) {
    return (
      <div className="w-[156px] flex flex-col gap-2 items-start justify-center">
        <p className="text-sm font-medium leading-[24px] text-text-primary-light dark:text-[#F2F2F2]">
          Interface Theme
        </p>
      </div>
    );
  }

  return (
    <div className="w-[156px] flex flex-col gap-2 items-start justify-center">
      <p className="text-sm font-medium leading-[24px] text-text-primary-light dark:text-[#F2F2F2]">
        Interface Theme
      </p>

      <Select<OptionType>
        options={options}
        value={options.find((option) => option.value === theme)}
        onChange={(option) => option && setTheme(option.value)}
        components={{
          DropdownIndicator,
          IndicatorSeparator: null,
        }}
        styles={{
          control: (provided) => ({
            ...provided,
            backgroundColor: "transparent",
            border: "none",
            borderBottom: "1px solid transparent",
            borderRadius: 0,
            boxShadow: "none",
            cursor: "pointer",
            minHeight: "unset",
            width: "156px",
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
            cursor: "pointer",
            // caretColor: "transparent",
          }),
          menu: (provided) => ({
            ...provided,
            zIndex: 50,
            width: "156px",
          }),
        }}
        classNames={{
          control: () =>
            "border-b! border-border-sec-light! dark:border-border-sec-dark! focus-within:border-brand-light! dark:focus-within:border-brand-dark!",
          menu: () =>
            "bg-background-light! dark:bg-black! border! border-border-sec-light! dark:border-border-sec-dark!",
          menuList: () => "p-2!",
          option: (state) =>
            `text-text-primary-light! dark:text-light-gray! ${
              state.isFocused
                ? "bg-border-sec-light/10! dark:bg-[#2D2D2D]!"
                : "bg-transparent!"
            } !rounded`,
          singleValue: () =>
            "text-text-primary-light! dark:text-[#F2F2F2]! text-sm!",
          input: () => "text-text-primary-light! dark:text-[#F2F2F2]!",
        }}
        className="w-[156px]"
        menuPlacement="auto"
        menuPosition="fixed"
      />
    </div>
  );
}
