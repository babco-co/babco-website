"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";

interface DropdownItem {
  href: string;
  text: string;
  external?: boolean;
}

interface NavigationDropdownProps {
  text: string;
  items: DropdownItem[];
  className?: string;
}

const NavigationDropdown = ({ text, items, className }: NavigationDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={cn("relative", className)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={cn(
          "font-poppins text-sm font-normal leading-6",
          "text-foreground hover:text-green-primary",
          "transition-colors duration-200",
          "flex items-center gap-2"
        )}
      >
        {text}
        <Image
          src="/icons/arrow.svg"
          alt="Dropdown arrow"
          width={12}
          height={12}
          className={cn("transition-transform duration-200", isOpen && "rotate-180")}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "absolute top-full left-0 mt-2 py-2 min-w-40",
              "bg-white border border-gray-200 rounded-lg shadow-lg",
              "z-50"
            )}
          >
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={cn(
                  "block px-4 py-2 text-sm font-normal",
                  "text-foreground hover:bg-gray-50 hover:text-muted-foreground",
                  "transition-colors duration-200"
                )}
              >
                {item.text}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavigationDropdown;