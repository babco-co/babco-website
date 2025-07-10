"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button";
import { LINKEDIN } from "@/lib/utils/constants";
import { useTransitionClick } from "@/lib/hooks/use-transition-click";
import NavigationLink from "@/components/header/navigation-link";
import MobileMenu from "@/components/header/mobile-menu";
import arrowBlackIcon from "../../../public/icons/arrow-black-icon.svg";
import menuIcon from "../../../public/icons/hamburger-icon.svg";
import closeIcon from "../../../public/icons/close-icon.svg";
import muteIcon from "../../../public/icons/mute-icon.svg";
import unmuteIcon from "../../../public/icons/unmute-icon.svg";
import { useThemeVariant } from "@/lib/hooks/use-theme-variant";
import { BIcon } from "@/components/svg/b-icon";
import BabcoTMLogo from "@/components/svg/babcoTM-logo";

const Header = () => {
  const { getFullGradientClass } = useThemeVariant();
  const handleContactClick = useTransitionClick("/contact-us");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeRef = useRef<number | null>(null);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={`w-full py-6 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-sm bg-background-light/60 dark:bg-background-dark/60 mt-0"
          : "mt-5"
      }`}
    >
      <div className="mx-7 sm:mx-10">
        <nav className="w-full flex items-center justify-between">
          {/* Left logo section */}
          {isMenuOpen ? (
            <div className="flex flex-1 items-center justify-start z-50">
              {isScrolled ? (
                <BabcoTMLogo
                  className="w-[106px] h-[21px]"
                  isMenuOpen={isMenuOpen}
                />
              ) : (
                <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full z-50 bg-white dark:bg-black">
                  <BIcon className="fill-brand-light dark:fill-brand-dark" />
                </div>
              )}
            </div>
          ) : (
            <Link
              className="flex flex-1 items-center justify-start z-50"
              href="./"
            >
              {isScrolled ? (
                <BabcoTMLogo
                  className="w-[106px] h-[21px]"
                  isMenuOpen={isMenuOpen}
                />
              ) : (
                <div
                  className={`w-[38px] h-[38px] flex items-center justify-center rounded-full z-50 ${getFullGradientClass()}`}
                >
                  <BIcon className="fill-white dark:fill-black" />
                </div>
              )}
            </Link>
          )}

          {/* Center navigation */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-5">
            {/* <NavigationLink
              href="/works"
              className="text-xs font-normal text-text-primary-light dark:text-text-primary-dark uppercase hover:text-primary-pink hover:text-brand-light dark:hover:text-brand-dark"
            >
              Works
            </NavigationLink>

            <div className="hidden sm:flex items-start justify-center text-center">
              <p className="text-light-gray mb-2">.</p>
            </div> */}

            <NavigationLink
              href="/ai"
              className="text-xs font-normal text-text-primary-light dark:text-text-primary-dark uppercase hover:text-primary-pink hover:text-brand-light dark:hover:text-brand-dark"
            >
              AI Services
            </NavigationLink>

            <div className="hidden sm:flex items-start justify-center text-center">
              <p className="text-light-gray mb-2">.</p>
            </div>

            <NavigationLink
              href="/merch"
              className="text-xs font-normal text-text-primary-light dark:text-text-primary-dark uppercase hover:text-brand-light dark:hover:text-brand-dark"
              external
            >
              Merch
            </NavigationLink>

            <div className="hidden sm:flex items-start justify-center text-center">
              <p className="text-light-gray mb-2">.</p>
            </div>

            <NavigationLink
              href="/blog"
              className="text-xs font-normal text-text-primary-light dark:text-text-primary-dark uppercase hover:text-primary-pink hover:text-brand-light dark:hover:text-brand-dark"
            >
              Blog
            </NavigationLink>

            <div className="hidden sm:flex items-start justify-center text-center">
              <p className="text-light-gray mb-2">.</p>
            </div>

            <NavigationLink
              href={LINKEDIN}
              className="text-xs font-normal text-text-primary-light dark:text-text-primary-dark uppercase hover:text-brand-light dark:hover:text-brand-dark"
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
              className="h-[38px] hidden lg:flex gap-2 text-center"
              variant="changing"
              onClick={handleContactClick}
            >
              <p className="pt-1">Contact Us</p>
              <Image
                className="invert dark:invert-0"
                src={arrowBlackIcon}
                alt="arrow"
              />
            </Button>

            <button
              className={`w-[38px] h-[38px] flex lg:hidden flex-shrink-0 items-center justify-center rounded-full z-50 ${
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
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={handleToggleMenu} />
    </header>
  );
};

export default Header;
