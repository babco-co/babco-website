"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const useThemeVariant = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only set mounted after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  const getCurrentTheme = () => {
    if (!mounted) return null;
    return resolvedTheme;
  };

  const getGradientClass = () => {
    const currentTheme = getCurrentTheme();
    
    // During SSR and initial mount, return dark theme gradient to prevent flash
    if (!currentTheme) {
      return "from-white via-brand-dark to-white";
    }

    if (currentTheme === "light") {
      return "from-[#DE468A] via-[#FF4365] to-[#DE468A]";
    }

    return "from-white via-brand-dark to-white";
  };

  const getBaseGradientClass = () => {
    return "bg-gradient-to-r bg-[length:400%_400%] animate-gradient";
  };

  const getFullGradientClass = () => {
    // Don't show any gradient until mounted
    if (!mounted) {
      return "invisible";
    }
    return `${getBaseGradientClass()} ${getGradientClass()}`;
  };

  return {
    currentTheme: getCurrentTheme(),
    mounted,
    getGradientClass,
    getBaseGradientClass,
    getFullGradientClass,
  };
};