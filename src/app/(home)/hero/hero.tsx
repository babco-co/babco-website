"use client";
import { useColorCycle } from "@/lib/hooks/use-color-cycle";
import BabcoLogo from "./babco-logo";
import Image from "next/image";
import babcoShadowLogo from "../../../../public/babco-shadow-logo.svg";
import { motion } from "framer-motion";
import { bounceVariants, shadowVariants } from "@/lib/utils/animations";

const Hero = () => {
  const color = useColorCycle();

  return (
    <section className="w-full flex flex-col items-center justify-center">
      <motion.div
        className="w-full h-fit flex justify-center"
        variants={bounceVariants}
        initial="initial"
        animate="animate"
      >
        <BabcoLogo fill={color} />
      </motion.div>

      <motion.div variants={shadowVariants} initial="initial" animate="animate">
        <Image src={babcoShadowLogo} alt="babco" />
      </motion.div>
    </section>
  );
};

export default Hero;
