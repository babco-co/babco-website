"use client";

import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "changing";
  className?: string;
  children: ReactNode;
}

const Button = ({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const baseClasses =
    "flex flex-row items-center justify-center px-4 py-3 rounded-sm transition-all duration-300";

  const variantClasses = {
    primary:
      "bg-brand-light dark:bg-brand-dark hover:opacity-90 text-xs font-medium leading-[120%] text-black",
    secondary:
      "bg-white dark:bg-black hover:opacity-90 text-base font-medium leading-[120%] text-brand-light dark:text-brand-dark",
    changing:
      "text-xs font-medium leading-[120%] text-white dark:text-black hover:opacity-90",
  };

  const getGradientClasses = () => {
    if (!mounted) {
      return "bg-linear-to-r bg-size-[400%_400%] animate-gradient from-[#FFF] via-[#FFF] to-[#FFF]";
    }

    const baseGradient =
      "bg-linear-to-r bg-size-[400%_400%] animate-gradient";
    return `${baseGradient} ${
      resolvedTheme === "light"
        ? "from-[#DE468A] via-[#FF4365] to-[#DE468A]"
        : "from-white via-brand-dark to-white"
    }`;
  };

  if (variant === "changing") {
    return (
      <button
        key={resolvedTheme}
        className={`${baseClasses} ${
          variantClasses[variant]
        } ${getGradientClasses()} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }

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
