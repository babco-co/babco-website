import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "changing";
  bgColor?: string;
  children: ReactNode;
}

const Button = ({
  variant = "primary",
  bgColor,
  className = "",
  children,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "flex flex-row items-center justify-center px-4 py-3 rounded";

  const variantClasses = {
    primary:
      "bg-primary-pink hover:bg-[#FF9DE3] transition-colors duration-200 text-xs font-medium leading-[120%] text-black",
    secondary:
      "bg-black hover:bg-[#2A2A2A] transition-colors duration-200 text-base font-medium leading-[120%] text-primary-pink",
    changing: "text-xs font-medium leading-[120%] text-black",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
      style={{ backgroundColor: variant === "changing" ? bgColor : "" }}
    >
      {children}
    </button>
  );
};

export default Button;
