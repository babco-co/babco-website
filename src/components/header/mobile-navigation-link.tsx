"use client";

import { motion, Variants, AnimatePresence } from "motion/react";
import clsx from "clsx";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { MenuItem } from "@/components/header/types";

const MobileNavigationLinkVariants: Variants = {
  closed: {
    opacity: 0,
    x: -20,
  },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 + i * 0.1,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

interface MobileNavigationLinkProps {
  item: MenuItem;
  onNavigate: () => void;
  index: number;
}

const MobileNavigationLink = ({
  item,
  onNavigate,
  index,
}: MobileNavigationLinkProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = (isExternal: boolean = false) => {
    // Only close mobile menu for internal links
    if (!isExternal) {
      onNavigate();
    }
  };

  const baseStyles = clsx(
    "flex items-center justify-between py-4 w-full",
    "text-foreground text-xl font-medium",
    "leading-[30.6px] tracking-[-0.3px]",
    "transition-colors duration-200 hover:opacity-80"
  );

  return (
    <motion.div
      variants={MobileNavigationLinkVariants}
      initial="closed"
      animate="open"
      custom={index}
      className="border-b border-dashed border-black dark:border-white"
    >
      {item.dropdown ? (
        // Dropdown button
        <button
          onClick={toggleDropdown}
          className={clsx(baseStyles, "cursor-pointer text-left")}
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
        >
          <span>{item.text}</span>
          <Image
            src="/icons/arrow.svg"
            alt="Dropdown arrow"
            width={24}
            height={24}
            className={clsx(
              "transition-transform duration-200",
              isDropdownOpen && "rotate-180"
            )}
          />
        </button>
      ) : (
        // Navigation link
        <Link
          href={item.href}
          onClick={() => handleLinkClick(item.external)}
          className={clsx(baseStyles, "cursor-pointer")}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
        >
          <span>{item.text}</span>
        </Link>
      )}

      <AnimatePresence>
        {item.dropdown && isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-4 pl-4 space-y-2">
              {item.dropdown.items.map((dropdownItem, dropdownIndex) => (
                <Link
                  key={dropdownIndex}
                  href={dropdownItem.href}
                  onClick={() => handleLinkClick(dropdownItem.external)}
                  target={dropdownItem.external ? "_blank" : undefined}
                  rel={dropdownItem.external ? "noopener noreferrer" : undefined}
                  className={clsx(
                    "block w-full text-left py-2",
                    "text-foreground font-helvetica text-lg font-normal",
                    "leading-[27px] tracking-[-0.2px]",
                    "transition-colors duration-200 hover:opacity-80"
                  )}
                >
                  {dropdownItem.text}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default MobileNavigationLink;
