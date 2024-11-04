"use client";
import { useColorCycle } from "@/lib/hooks/use-color-cycle";
import BabcoLogo from "./babco-logo";
import { motion } from "framer-motion";
import { bounceVariants } from "@/lib/utils/animations";

const Hero = () => {
  const color = useColorCycle();

  return (
    <section className="w-full flex flex-col items-center justify-center">
      <motion.div
        className="w-full h-fit flex justify-center"
        initial="initial"
        animate="animate"
        variants={bounceVariants}
      >
        <BabcoLogo fill={color} className="w-full h-auto" />
      </motion.div>
    </section>
  );
};

export default Hero;
