"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const useThemeVariant = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getGradientClass = () => {
    if (!mounted) {
      return "from-[#DE468A] via-[#FF4365] to-[#DE468A]";
    }
    
    return resolvedTheme === "light" 
      ? "from-[#DE468A] via-[#FF4365] to-[#DE468A]"
      : "from-white via-brand-dark to-white";
  };

  const getBaseGradientClass = () => {
    return "bg-gradient-to-r";
  };

  const getAnimationClass = () => {
    return "bg-[length:400%_400%] animate-gradient";
  };

  const getFullGradientClass = () => {
    // Always return all classes, don't conditionally return based on mounted
    return `${getBaseGradientClass()} ${getAnimationClass()} ${getGradientClass()}`;
  };

  return {
    currentTheme: resolvedTheme,
    mounted,
    getFullGradientClass,
  };
};