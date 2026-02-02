"use client";

import { motion, AnimatePresence, Variants } from "motion/react";
import Image from "next/image";
import type { MenuItem } from "@/components/header/types";
import MobileNavigationLink from "@/components/header/mobile-navigation-link";
import Button from "@/components/button";
import { useTransitionClick } from "@/lib/hooks/use-transition-click";
import arrowBlackIcon from "@/../public/icons/arrow-black-icon.svg";

const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
};

const MobileMenu = ({ isOpen, onClose, menuItems }: MobileMenuProps) => {
  const handleContactClick = useTransitionClick("/contact-us");

  const handleNavigation = () => {
    onClose();
  };

  const handleContactButtonClick = () => {
    onClose();
    handleContactClick();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="2xl:hidden fixed inset-0 pt-[107px] z-40 bg-background min-h-screen w-full overflow-y-auto flex flex-col"
          variants={mobileMenuVariants}
          initial="closed"
          animate="open"
          exit="closed"
        >
          <div className="px-6 py-8 flex-1">
            <motion.nav
              className="flex flex-col"
              initial="closed"
              animate="open"
            >
              {menuItems.map((item, index) => (
                <div key={index}>
                  <MobileNavigationLink
                    item={item}
                    onNavigate={handleNavigation}
                    index={index}
                  />
                </div>
              ))}
            </motion.nav>
          </div>

          <motion.div
            className="px-6 pb-8 pt-4 border-t border-border-primary-light dark:border-border-primary-dark"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <Button
              className="w-full h-12 flex items-center justify-center gap-2"
              variant="changing"
              onClick={handleContactButtonClick}
            >
              <p className="pt-1">Contact Us</p>
              <Image
                className="invert dark:invert-0"
                src={arrowBlackIcon}
                alt="arrow"
              />
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
