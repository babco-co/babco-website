import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary";
  bgColor?: string;
  children: ReactNode;
}

const Button = ({
  variant = "primary",
  bgColor = "#FFC0F1",
  className = "",
  children,
  ...props
}: ButtonProps) => {
  const baseClasses = "flex flex-row items-center justify-center px-4 py-3 rounded";

  const variantClasses = {
    primary: "bg-primary-pink text-xs font-medium leading-[120%] text-black",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ backgroundColor: bgColor }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
