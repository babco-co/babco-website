"use client";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Button from "@/components/button";
import { LINKEDIN } from "@/lib/utils/constants";
import { useTransition } from "@/components/page-transition";
import NavigationLink from "@/components/header/navigation-link";
import dotBlack from "../../../public/images/dot-black.svg";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { startTransition } = useTransition();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          id="mobile-menu"
          className="fixed inset-0 z-40 bg-brand-light dark:bg-brand-dark"
          style={{ height: "100dvh" }}
        >
          <div className="h-full overflow-y-auto p-4">
            <nav className="min-h-full flex flex-col">
              <div className="flex-grow">
                <div className="flex flex-col items-center pt-[243px]">
                  <NavigationLink
                    href="/works"
                    className="text-4xl font-extralight text-white dark:text-black leading-[120%]"
                  >
                    Works
                  </NavigationLink>

                  <div className="my-8">
                    <Image
                      className="invert dark:invert-0"
                      src={dotBlack}
                      alt="dot"
                    />
                  </div>

                  <NavigationLink
                    href="/merch"
                    className="text-4xl font-extralight text-white dark:text-black leading-[120%]"
                    external
                  >
                    Merch
                  </NavigationLink>

                  <div className="my-8">
                    <Image
                      className="invert dark:invert-0"
                      src={dotBlack}
                      alt="dot"
                    />
                  </div>

                  <NavigationLink
                    href={LINKEDIN}
                    className="text-4xl font-extralight text-white dark:text-black  leading-[120%]"
                    external
                  >
                    Follow
                  </NavigationLink>
                </div>
              </div>

              <div className="mt-auto pt-10">
                <Button
                  className="w-full h-14 gap-2"
                  variant="secondary"
                  onClick={() => {
                    onClose();
                    startTransition("/contact-us");
                  }}
                >
                  <p className="pt-1">Contact Us</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="17"
                    viewBox="0 0 19 17"
                    fill="none"
                  >
                    <path
                      d="M18.4676 3.11683C18.5318 2.56829 18.1392 2.07157 17.5906 2.00739L8.65161 0.961401C8.10307 0.897214 7.60636 1.28986 7.54217 1.8384C7.47798 2.38695 7.87063 2.88366 8.41917 2.94785L16.365 3.87761L15.4352 11.8234C15.371 12.3719 15.7637 12.8687 16.3122 12.9328C16.8607 12.997 17.3575 12.6044 17.4216 12.0558L18.4676 3.11683ZM1.62013 16.8079L18.0945 3.78511L16.8543 2.21611L0.379865 15.2389L1.62013 16.8079Z"
                      className="fill-brand-light dark:fill-brand-dark"
                    />
                  </svg>
                </Button>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
