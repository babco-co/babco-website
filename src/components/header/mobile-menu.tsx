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

                  <div className="my-8">
                    <Image src={dotBlack} alt="dot" />
                  </div>

                  <NavigationLink
                    href={LINKEDIN}
                    className="text-4xl font-extralight text-primary-black leading-[120%]"
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
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    className="text-brand-light dark:text-brand-dark"
                  >
                    <rect
                      width="32"
                      height="32"
                      transform="translate(0.5)"
                      className="fill-black"
                    />
                    <path
                      d="M9.25098 23.2471L22.2773 10.2207"
                      className="stroke-current"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22.2806 22.9499L22.2806 10.222L9.55265 10.222"
                      className="stroke-current"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
