"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { useColorCycle } from "@/lib/hooks/use-color-cycle";
import logo from "../../public/images/babco-logo.svg";

type TransitionContextType = {
  isTransitioning: boolean;
  startTransition: (route: string) => void;
};

const TransitionContext = createContext<TransitionContextType>({
  isTransitioning: false,
  startTransition: () => {},
});

export const useTransition = () => useContext(TransitionContext);

const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const color = useColorCycle();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startTransition = (route: string) => {
    setIsTransitioning(true);

    setTimeout(() => {
      router.push(route);
      setTimeout(() => {
        setIsTransitioning(false);
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-5xl text-primary-black font-bold"
            >
              <Image src={logo} alt="logo" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
};

export default TransitionProvider;
