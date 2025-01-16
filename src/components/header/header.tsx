"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button";
import { LINKEDIN } from "@/lib/utils/constants";
import { useTransition } from "@/components/page-transition";
import NavigationLink from "@/components/header/navigation-link";
import MobileMenu from "@/components/header/mobile-menu";
import arrowBlackIcon from "../../../public/icons/arrow-black-icon.svg";
import menuIcon from "../../../public/icons/hamburger-icon.svg";
import closeIcon from "../../../public/icons/close-icon.svg";
import muteIcon from "../../../public/icons/mute-icon.svg";
import unmuteIcon from "../../../public/icons/unmute-icon.svg";
import { useThemeVariant } from "@/lib/hooks/use-theme-variant";

const Header = () => {
  const { getFullGradientClass } = useThemeVariant();
  const { startTransition } = useTransition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeRef = useRef<number | null>(null);

  // Audio initialization and cleanup
  useEffect(() => {
    audioRef.current = new Audio("/music/babco.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0;

    return () => {
      if (fadeRef.current) {
        cancelAnimationFrame(fadeRef.current);
      }
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current = null;
      }
    };
  }, []);

  // Fade audio function
  const fadeAudio = (fadeIn: boolean) => {
    if (!audioRef.current || fadeRef.current) return;

    const startTime = performance.now();
    const duration = 500;
    const startVolume = audioRef.current.volume;
    const targetVolume = fadeIn ? 0.8 : 0;

    const fade = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      if (audioRef.current) {
        audioRef.current.volume =
          startVolume + (targetVolume - startVolume) * progress;

        if (progress < 1) {
          fadeRef.current = requestAnimationFrame(fade);
        } else {
          fadeRef.current = null;
          if (!fadeIn && audioRef.current) {
            audioRef.current.pause();
          }
        }
      }
    };

    fadeRef.current = requestAnimationFrame(fade);
  };

  const handleToggleAudio = () => {
    if (!audioRef.current) return;

    if (fadeRef.current) {
      cancelAnimationFrame(fadeRef.current);
      fadeRef.current = null;
    }

    if (isMuted) {
      audioRef.current
        .play()
        .then(() => {
          fadeAudio(true);
          setIsMuted(false);
        })
        .catch((error) => {
          console.error("Audio playback failed:", error);
        });
    } else {
      fadeAudio(false);
      setIsMuted(true);
    }
  };

  // Menu handling
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
        {/* Left logo section */}
        <Link className="flex flex-1 items-center justify-start z-50" href="./">
          <div
            className={`w-[38px] h-[38px] flex items-center justify-center rounded-full z-50 ${
              isMenuOpen ? "bg-white dark:bg-black" : getFullGradientClass()
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
            >
              <circle cx="19" cy="19" r="19" />
              <path
                d="M20.6453 28.885C24.9846 28.885 27.1543 26.2033 27.1543 23.5216C27.1543 21.0939 25.3691 18.6663 21.8262 18.2428C24.0783 17.396 25.4515 15.4482 25.4515 13.5569C25.4515 11.2986 23.4466 9.125 18.6129 9.125H12.4884V28.4333H12.4609V28.885H20.6453ZM20.3432 18.6098C22.9523 18.6098 24.2431 21.0657 24.2431 23.5216C24.2431 25.9775 22.9523 28.4333 20.3432 28.4333H14.9876V9.57666H18.4481C21.4143 9.57666 22.8973 11.6656 22.8973 13.8109C22.8973 16.041 21.3044 18.2993 18.1186 18.2993C17.3496 18.2993 16.4982 18.1864 15.5369 17.8759C16.8827 18.4404 18.1186 18.6945 19.2446 18.6945C19.6291 18.6945 19.9861 18.6663 20.3432 18.6098Z"
                className={
                  isMenuOpen
                    ? "fill-brand-light dark:fill-brand-dark"
                    : "fill-white dark:fill-black"
                }
              />
            </svg>
          </div>
        </Link>

        {/* Center navigation */}
        <div className="flex flex-1 items-center justify-center gap-5">
          <NavigationLink
            href="/works"
            className="hidden sm:block text-xs font-normal text-text-primary-light dark:text-text-primary-dark uppercase hover:text-primary-pink hover:text-brand-light dark:hover:text-brand-dark"
          >
            Works
          </NavigationLink>

          <div className="hidden sm:flex items-start justify-center text-center">
            <p className="text-light-gray mb-2">.</p>
          </div>

          <NavigationLink
            href="/merch"
            className="hidden sm:block text-xs font-normal text-text-primary-light dark:text-text-primary-dark uppercase hover:text-brand-light dark:hover:text-brand-dark"
            external
          >
            Merch
          </NavigationLink>

          <div className="hidden sm:flex items-start justify-center text-center">
            <p className="text-light-gray mb-2">.</p>
          </div>

          <NavigationLink
            href={LINKEDIN}
            className="hidden sm:block text-xs font-normal text-text-primary-light dark:text-text-primary-dark uppercase hover:text-brand-light dark:hover:text-brand-dark"
            external
          >
            Follow
          </NavigationLink>
        </div>

        {/* Right section */}
        <div className="flex flex-1 items-center justify-end gap-5">
          <button
            className="flex-shrink-0 group relative touch-manipulation"
            onClick={handleToggleAudio}
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            <Image
              src={isMuted ? muteIcon : unmuteIcon}
              alt={isMuted ? "mute" : "unmute"}
              className="transition-transform duration-200 group-hover:scale-110 invert dark:invert-0"
            />
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-text-primary-light dark:text-text-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {isMuted ? "Unmute" : "Mute"}
            </span>
          </button>

          <Button
            className="h-[38px] hidden sm:flex gap-2 text-center"
            variant="changing"
            onClick={() => startTransition("/contact-us")}
          >
            <p className="pt-1">Contact Us</p>
            <Image
              className="invert dark:invert-0"
              src={arrowBlackIcon}
              alt="arrow"
            />
          </Button>

          <button
            className={`w-[38px] h-[38px] flex sm:hidden flex-shrink-0 items-center justify-center rounded-full z-50 ${
              isMenuOpen
                ? "bg-brand-light dark:bg-brand-dark"
                : getFullGradientClass()
            }`}
            onClick={handleToggleMenu}
          >
            <Image
              className="invert dark:invert-0"
              src={isMenuOpen ? closeIcon : menuIcon}
              alt="menu"
            />
          </button>
        </div>
      </nav>

      <MobileMenu isOpen={isMenuOpen} onClose={handleToggleMenu} />
    </header>
  );
};

export default Header;
