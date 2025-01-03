"use client";
import { motion, AnimatePresence } from "motion/react";
import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { useColorCycle } from "@/lib/hooks/use-color-cycle";

type TransitionContextType = {
  isTransitioning: boolean;
  startTransition: (route: string) => void;
};

const TransitionContext = createContext<TransitionContextType>({
  isTransitioning: false,
  startTransition: () => {},
});

export const useTransition = () => useContext(TransitionContext);

export const TransitionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const color = useColorCycle();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const text = "BABCO";

  const startTransition = (route: string) => {
    setIsTransitioning(true);
    let currentIndex = 0;

    const typeInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100); // Adjust typing speed here

    setTimeout(() => {
      router.push(route);
      setTimeout(() => {
        setIsTransitioning(false);
        setDisplayText(""); // Reset text for next transition
      }, 800); // Match this with animation duration
    }, 500); // Time before route change
  };

  return (
    <TransitionContext.Provider value={{ isTransitioning, startTransition }}>
      {children}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="flex items-center justify-center fixed inset-0 z-50"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ backgroundColor: color }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-5xl text-primary-black font-bold"
            >
              {displayText}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
};
