"use client";

import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports hover/mouse
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsVisible(mediaQuery.matches);

    // Update visibility if device capabilities change
    const updateVisibility = (e: MediaQueryListEvent) =>
      setIsVisible(e.matches);
    mediaQuery.addEventListener("change", updateVisibility);

    return () => mediaQuery.removeEventListener("change", updateVisibility);
  }, []);

  useEffect(() => {
    if (!isVisible) return; // Skip event listeners if cursor shouldn't be visible

    const updateCursorPosition = (e: MouseEvent): void => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return; // Skip event listeners if cursor shouldn't be visible

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const hoverElements = document.querySelectorAll(".cursor-scale");

    hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      hoverElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isVisible]);

  // Don't render anything on touch devices
  if (!isVisible) return null;

  return (
    <div
      className={`fixed pointer-events-none z-100 rounded-full bg-brand-light dark:bg-brand-dark mix-blend-difference transition-transform duration-300 ease-out
        ${
          isHovering
            ? "h-12 w-12 -translate-x-6 -translate-y-6"
            : "h-6 w-6 -translate-x-3 -translate-y-3"
        }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;
