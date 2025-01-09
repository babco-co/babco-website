import React, { ButtonHTMLAttributes, ReactNode } from "react";

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
  const baseClasses =
    "flex flex-row items-center justify-center px-4 py-3 rounded transition-all duration-300";

  const variantClasses = {
    primary:
      "bg-primary-pink hover:bg-[#FF9DE3] text-xs font-medium leading-[120%] text-black",
    secondary:
      "bg-black hover:bg-[#2A2A2A] text-base font-medium leading-[120%] text-primary-pink",
    changing:
      "text-xs font-medium leading-[120%] text-black bg-gradient-to-r from-white via-primary-pink to-white bg-[length:400%_400%] animate-gradient hover:opacity-90",
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
