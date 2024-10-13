import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary";
  bgColor?: string;
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  bgColor = "bg-primary-pink",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClasses = "flex items-center justify-center px-4 py-3 rounded-sm";

  const variantClasses = {
    primary:
      "hover:bg-light-gray text-xs font-black leading-[14.4px] text-black",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className} ${bgColor}`}
      {...props}
    >
      {children}
    </button>
  );
}
