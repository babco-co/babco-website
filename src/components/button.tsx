"use client";

import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { useThemeVariant } from "@/lib/hooks/use-theme-variant";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "changing";
  bgColor?: string;
  children: ReactNode;
}

const Button = ({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) => {
  const { getFullGradientClass } = useThemeVariant();

  const baseClasses =
    "flex flex-row items-center justify-center px-4 py-3 rounded transition-all duration-300";

  const variantClasses = {
    primary:
      "bg-brand-light dark:bg-brand-dark hover:opacity-90 text-xs font-medium leading-[120%] text-black",
    secondary:
      "bg-black hover:bg-[#2A2A2A] text-base font-medium leading-[120%] text-brand-light dark:text-brand-dark",
    changing: `text-xs font-medium leading-[120%] text-black ${getFullGradientClass()} hover:opacity-90`,
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
