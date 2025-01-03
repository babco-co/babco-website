"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import Button from "@/components/button";
import { LINKEDIN } from "@/lib/utils/constants";
import { useColorCycle } from "@/lib/hooks/use-color-cycle";
import arrowBlackIcon from "../../public/icons/arrow-black-icon.svg";
import menuIcon from "../../public/icons/hamburger-icon.svg";
import closeIcon from "../../public/icons/close-icon.svg";
import dotBlack from "../../public/images/dot-black.svg";
import { useTransition } from "@/components/page-transition";

const Header = () => {
  const color = useColorCycle();
  const { startTransition } = useTransition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        if (window.innerWidth >= 640 && isMenuOpen) {
          setIsMenuOpen(false);
        }
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [isMenuOpen]);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full px-4 sm:px-5 py-6">
      <nav className="w-full flex items-center justify-between">
        {/* This left logo and text are fixed on desktop and mobile */}
        <Link
          className="flex flex-1 items-center justify-start gap-3 z-50"
          href="./"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
          >
            <circle cx="19" cy="19" r="19" fill={isMenuOpen ? "#000" : color} />
            <path
              d="M20.6453 28.885C24.9846 28.885 27.1543 26.2033 27.1543 23.5216C27.1543 21.0939 25.3691 18.6663 21.8262 18.2428C24.0783 17.396 25.4515 15.4482 25.4515 13.5569C25.4515 11.2986 23.4466 9.125 18.6129 9.125H12.4884V28.4333H12.4609V28.885H20.6453ZM20.3432 18.6098C22.9523 18.6098 24.2431 21.0657 24.2431 23.5216C24.2431 25.9775 22.9523 28.4333 20.3432 28.4333H14.9876V9.57666H18.4481C21.4143 9.57666 22.8973 11.6656 22.8973 13.8109C22.8973 16.041 21.3044 18.2993 18.1186 18.2993C17.3496 18.2993 16.4982 18.1864 15.5369 17.8759C16.8827 18.4404 18.1186 18.6945 19.2446 18.6945C19.6291 18.6945 19.9861 18.6663 20.3432 18.6098Z"
              fill={isMenuOpen ? "#FFC0F1" : "#000"}
            />
          </svg>
        </Link>

        <div className="flex flex-1 items-center justify-center gap-5">
          <NavigationLink
            href="/works"
            className="hidden sm:block text-xs font-normal text-primary-white uppercase"
          >
            Works
          </NavigationLink>

          <div className="hidden sm:flex items-start justify-center text-center">
            <p className="text-light-gray mb-2">.</p>
          </div>

          <NavigationLink
            href="/merch"
            className="hidden sm:block text-xs font-normal text-primary-white uppercase"
            external
          >
            Merch
          </NavigationLink>

          <div className="hidden sm:flex items-start justify-center text-center">
            <p className="text-light-gray mb-2">.</p>
          </div>

          <NavigationLink
            href={LINKEDIN}
            className="hidden sm:block text-xs font-normal text-primary-white uppercase"
            external
          >
            Follow
          </NavigationLink>
        </div>

        {/* CTA Button and Mobile Menu */}
        <div className="flex flex-1 items-center justify-end gap-5">
          <Button
            className="hidden sm:flex ml-4 gap-2"
            variant="primary"
            bgColor={color}
            onClick={() => startTransition("/contact-us")}
          >
            Contact Us
            <Image className="-rotate-45" src={arrowBlackIcon} alt="arrow" />
          </Button>

          <button
            className="w-[38px] h-[38px] flex sm:hidden items-center justify-center rounded-full z-50 bg-primary-pink"
            style={{ backgroundColor: color }}
            onClick={handleToggleMenu}
          >
            <Image src={isMenuOpen ? closeIcon : menuIcon} alt="menu" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            id="mobile-menu"
            className="w-full min-h-screen fixed inset-0 px-4 sm:px-5 py-5
             z-40 overflow-y-hidden bg-primary-pink"
          >
            <nav className="w-full h-full flex flex-col items-center justify-center gap-10">
              <NavigationLink
                href="/works"
                className="text-4xl font-extralight text-primary-black uppercase"
              >
                Works
              </NavigationLink>

              <Image src={dotBlack} alt="dot" />

              <NavigationLink
                href="/merch"
                className="text-4xl font-extralight text-primary-black uppercase"
                external
              >
                Merch
              </NavigationLink>

              <Image src={dotBlack} alt="dot" />

              <NavigationLink
                href={LINKEDIN}
                className="text-4xl font-extralight text-primary-black uppercase"
                external
              >
                Follow
              </NavigationLink>

              <Button
                className="w-full h-[68px] text-lg font-black leading-[120%] text-primary-pink gap-2 mt-5"
                variant="primary"
                bgColor="black"
                onClick={() => {
                  handleToggleMenu();
                  startTransition("/contact-us");
                }}
              >
                Contact us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="24"
                  viewBox="0 0 23 24"
                  fill="none"
                >
                  <path
                    d="M1.5 10.5L-1.31134e-07 10.5L1.31134e-07 13.5L1.5 13.5L1.5 10.5ZM22.5607 13.0607C23.1464 12.4749 23.1464 11.5251 22.5607 10.9393L13.0147 1.3934C12.4289 0.807611 11.4792 0.807611 10.8934 1.3934C10.3076 1.97918 10.3076 2.92893 10.8934 3.51472L19.3787 12L10.8934 20.4853C10.3076 21.0711 10.3076 22.0208 10.8934 22.6066C11.4792 23.1924 12.4289 23.1924 13.0147 22.6066L22.5607 13.0607ZM1.5 13.5L21.5 13.5L21.5 10.5L1.5 10.5L1.5 13.5Z"
                    fill="#FFC0F1"
                  />
                </svg>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

interface NavigationLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
}

const NavigationLink = ({
  href,
  className,
  children,
  external = false,
}: NavigationLinkProps) => {
  const { startTransition } = useTransition();

  if (external) {
    return (
      <Link
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        startTransition(href);
      }}
    >
      {children}
    </Link>
  );
};
