"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { createContext, useContext } from "react";
import { useRouter } from "next/navigation";
import { useThemeVariant } from "@/lib/hooks/use-theme-variant";

type TransitionContextType = {
  isTransitioning: boolean;
  startTransition: (route: string) => void;
};

const TransitionContext = createContext<TransitionContextType>({
  isTransitioning: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  startTransition: (_route: string) => {},
});

export const useTransition = () => useContext(TransitionContext);

export const TransitionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { getFullGradientClass } = useThemeVariant();

  const startTransition = async (route: string) => {
    try {
      setIsTransitioning(true);

      // Wait for the animation to complete
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Navigate to the new route
      await router.push(route);

      // Reset transition state after navigation
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);
    } catch (error) {
      // Reset transition state if navigation fails
      setIsTransitioning(false);
      console.error("Navigation failed:", error);
    }
  };

  return (
    <TransitionContext.Provider value={{ isTransitioning, startTransition }}>
      {children}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className={`flex items-center justify-center fixed inset-0 z-50 ${getFullGradientClass()}`}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <AnimatedSvgLogo />
          </motion.div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
};

export default TransitionProvider;

// SVG paths for each letter
const svgPaths = [
  // B
  "M18.8643 47.6043C28.8662 47.6043 33.8671 41.3984 33.8671 35.1924C33.8671 29.5744 29.7524 23.9564 21.5863 22.9766C26.7772 21.0168 29.9423 16.5093 29.9423 12.1325C29.9423 6.90644 25.3212 1.87637 14.1799 1.87637L0.0633054 1.87637L0.0633054 46.5591H0L0 47.6043H18.8643ZM18.168 23.8258C24.1817 23.8258 27.157 29.5091 27.157 35.1924C27.157 40.8758 24.1817 46.5591 18.168 46.5591H5.82388L5.82388 2.92158L13.8 2.92158C20.6368 2.92158 24.0551 7.75568 24.0551 12.7204C24.0551 17.8812 20.3836 23.1072 13.0404 23.1072C11.2679 23.1072 9.30553 22.8459 7.08992 22.1273C10.1918 23.4338 13.0404 24.0218 15.6358 24.0218C16.5221 24.0218 17.345 23.9564 18.168 23.8258Z",
  // A
  "M61.3431 1.87637L60.2669 1.87637L37.7943 47.6043H43.8081C43.8081 47.6043 43.8081 47.147 43.5549 47.0817C42.9852 46.8857 42.3522 45.7099 42.3522 43.7501C42.3522 41.9863 42.8586 39.5693 44.3146 36.5643L58.1146 8.40893L72.5477 37.7402C68.0532 32.8407 61.3431 29.1172 55.5825 29.1172C51.721 29.1172 48.3026 30.685 46.1503 34.7352C48.6191 31.3382 51.9109 29.9011 55.3926 29.9011C62.8623 29.9011 71.2183 36.107 74.8899 42.5089L77.422 47.6043H83.8156L61.3431 1.87637Z",
  // B
  "M108.752 47.6043C118.754 47.6043 123.755 41.3984 123.755 35.1924C123.755 29.5744 119.64 23.9564 111.474 22.9766C116.665 21.0168 119.83 16.5093 119.83 12.1325C119.83 6.90644 115.209 1.87637 104.068 1.87637L89.951 1.87637V46.5591L89.951 46.6544V47.6043H108.752ZM108.056 23.8258C114.069 23.8258 117.045 29.5091 117.045 35.1924C117.045 40.8758 114.069 46.5591 108.056 46.5591H95.7116V2.92158L103.688 2.92158C110.525 2.92158 113.943 7.75568 113.943 12.7204C113.943 17.8812 110.271 23.1072 102.928 23.1072C101.156 23.1072 99.1933 22.8459 96.9777 22.1273C100.08 23.4338 102.928 24.0218 105.524 24.0218C106.41 24.0218 107.233 23.9564 108.056 23.8258Z",
  // C
  "M157.561 47.0817C142.748 47.0817 134.202 33.0367 134.202 20.6902C134.202 11.022 139.456 2.39898 151.041 2.39898C153.763 2.39898 159.84 3.77081 159.84 8.86621C159.84 9.5848 159.713 10.3687 159.46 11.2833C162.246 12.1325 164.461 10.0421 164.461 7.5597C164.461 4.68537 161.486 1.28844 152.94 1.28844C139.773 1.28844 128.252 9.45414 128.252 24.7403C128.252 36.6296 136.924 48.5842 154.333 48.5842C164.335 48.5842 169.335 44.4687 172.691 37.9361C169.146 43.0969 164.335 47.0817 157.561 47.0817Z",
  // O
  "M200.919 0.896484C183.574 0.896484 174.902 12.7858 174.902 24.7403C174.902 36.6296 183.574 48.5842 200.919 48.5842C218.327 48.5842 227 36.6296 227 24.7403C227 12.7858 218.327 0.896484 200.919 0.896484ZM204.148 47.0817C189.335 47.0817 180.852 33.0367 180.852 20.6902C180.852 11.022 186.106 2.39898 197.691 2.39898C212.504 2.39898 221.05 16.3787 221.05 28.7252C221.05 38.3934 215.795 47.0817 204.148 47.0817Z",
];

// Animated SVG Component for Transition
const AnimatedSvgLogo = ({ fill }: { fill?: string }) => {
  const [visiblePaths, setVisiblePaths] = useState<number>(0);
  const { isTransitioning } = useTransition();
  const { currentTheme } = useThemeVariant();
  const fillColor = fill || (currentTheme === "light" ? "white" : "black");

  useEffect(() => {
    if (isTransitioning) {
      setVisiblePaths(0);
      const interval = setInterval(() => {
        setVisiblePaths((prev) => {
          if (prev < svgPaths.length) {
            return prev + 1;
          }
          clearInterval(interval);
          return prev;
        });
      }, 150);

      return () => clearInterval(interval);
    } else {
      setVisiblePaths(0);
    }
  }, [isTransitioning]);

  return (
    <svg
      width="227"
      height="49"
      viewBox="0 0 227 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-64"
    >
      <g id="BABCO">
        {svgPaths.map((path, index) => (
          <motion.path
            key={index}
            d={path}
            initial={{
              pathLength: 0,
              fill: "none",
              stroke: fillColor,
              strokeWidth: 1,
            }}
            animate={{
              pathLength: index < visiblePaths ? 1 : 0,
              fill: index < visiblePaths ? fillColor : "none",
              strokeWidth: index < visiblePaths ? [1, 0] : 1,
            }}
            transition={{
              pathLength: {
                duration: 0.35,
                ease: "easeInOut",
                delay: index < visiblePaths ? 0 : 0,
              },
              fill: {
                duration: 0.25,
                ease: "easeInOut",
                delay: 0.3,
              },
              strokeWidth: {
                duration: 0.15,
                delay: 0.3,
              },
            }}
          />
        ))}
      </g>
    </svg>
  );
};
