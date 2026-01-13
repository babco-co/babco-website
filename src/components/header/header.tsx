"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Button from "@/components/button";
import { LINKEDIN } from "@/lib/utils/constants";
import { useTransitionClick } from "@/lib/hooks/use-transition-click";
import MobileMenu from "@/components/header/mobile-menu";
import DesktopNavigation from "@/components/header/desktop-navigation";
import HeaderLogo from "@/components/header/header-logo";
import AudioToggleButton from "@/components/header/audio-toggle-button";
import MenuToggleButton from "@/components/header/menu-toggle-button";
import type { MenuItem } from "@/components/header/types";
import arrowBlackIcon from "@/../public/icons/arrow-black-icon.svg";
import { useThemeVariant } from "@/lib/hooks/use-theme-variant";

const Header = () => {
  const { getFullGradientClass } = useThemeVariant();
  const handleContactClick = useTransitionClick("/contact-us");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeRef = useRef<number | null>(null);

  // Menu items configuration
  const menuItems: MenuItem[] = [
    {
      text: "AI Services",
      href: "/ai",
    },
    {
      text: "Merch",
      href: "/merch",
      external: true,
    },
    {
      text: "Blog",
      href: "/blog",
    },
    {
      text: "Follow",
      href: LINKEDIN,
      external: true,
    },
  ];

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
          ? "backdrop-blur-xs bg-background-light/60 dark:bg-background-dark/60 mt-0"
          : "mt-5"
      }`}
    >
      <div className="mx-7 sm:mx-10">
        <nav className="w-full flex items-center justify-between">
          <HeaderLogo
            isScrolled={isScrolled}
            isMenuOpen={isMenuOpen}
            getFullGradientClass={getFullGradientClass}
          />

          <DesktopNavigation menuItems={menuItems} />

          {/* Right section */}
          <div className="flex flex-1 items-center justify-end gap-5">
            <AudioToggleButton
              isMuted={isMuted}
              onClick={handleToggleAudio}
            />

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

            <MenuToggleButton
              isOpen={isMenuOpen}
              onClick={handleToggleMenu}
              getFullGradientClass={getFullGradientClass}
            />
          </div>
        </nav>
      </div>

      <MobileMenu
        menuItems={menuItems}
        isOpen={isMenuOpen}
        onClose={handleToggleMenu}
      />
    </header>
  );
};

export default Header;
