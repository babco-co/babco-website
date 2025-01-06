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
          className="w-full min-h-screen fixed inset-0 px-4 sm:px-5 py-5 z-40 overflow-y-hidden bg-primary-pink"
        >
          <nav className="w-full h-full flex flex-col items-center justify-between gap-10 pt-[243px]">
            <div className="flex flex-col items-center justify-center gap-8">
              {/* <NavigationLink
                  href="/works"
                  className="text-4xl font-extralight text-primary-black leading-[120%]"
                >
                  Works
                </NavigationLink>

                <Image src={dotBlack} alt="dot" /> */}

              <NavigationLink
                href="/merch"
                className="text-4xl font-extralight text-primary-black leading-[120%]"
                external
              >
                Merch
              </NavigationLink>

              <Image src={dotBlack} alt="dot" />

              <NavigationLink
                href={LINKEDIN}
                className="text-4xl font-extralight text-primary-black leading-[120%]"
                external
              >
                Follow
              </NavigationLink>
            </div>

            <Button
              className="w-full h-14 self-end gap-2 mt-5"
              variant="secondary"
              onClick={() => {
                onClose();
                startTransition("/contact-us");
              }}
            >
              <p>Contact Us</p>
              <svg
                className="mb-1"
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
              >
                <rect
                  width="32"
                  height="32"
                  transform="translate(0.5)"
                  fill="black"
                />
                <path
                  d="M9.25098 23.2471L22.2773 10.2207"
                  stroke="#FFC0F1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.2806 22.9499L22.2806 10.222L9.55265 10.222"
                  stroke="#FFC0F1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
