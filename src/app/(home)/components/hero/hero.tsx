"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import RiveWrapper from "@/components/rive-wrapper";
import { containerVariants, YScrollVariants } from "@/lib/utils/animations";
import { motion } from "motion/react";
import BabcoLogo from "@/components/babco-logo";

const Hero = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getAnimationSrc = () => {
    if (!mounted) return "animations/logo.riv";
    return resolvedTheme === "light"
      ? "animations/logo-light.riv"
      : "animations/logo.riv";
  };

  return (
    <section className="w-full h-full flex flex-col items-center justify-center overflow-x-hidden">
      <RiveWrapper
        src={getAnimationSrc()}
        autoplay={true}
        playOnView={false}
        containerClassName="w-full h-[500px] sm:h-[80vh]"
        key={resolvedTheme} // Force re-render when theme changes
        loadingComponent={<BabcoLogo useGradient className="w-[90%]" />}
      />

      <motion.div
        className="cursor-scale w-full flex flex-row items-center justify-start gap-0 lg:gap-10 px-3 lg:px-[44px] mb-[120px]"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        <motion.p
          className="min-w-0 xs:min-w-[162px] lg:max-w-[670px] text-lg xs:text-[28px] lg:text-[80px] font-extralight leading-[108%] text-text-primary-light dark:text-text-primary-dark"
          variants={YScrollVariants}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          Building tomorrows iconic brands
        </motion.p>

        <motion.div variants={YScrollVariants} transition={{ duration: 0.4 }}>
          <div
            className="hidden sm:block w-[80px] lg:w-[140px] h-[0.5px] flex-shrink-0 bg-black/70 dark:bg-white/70"
            style={{ transform: "rotate(-65.363deg)" }}
          />

          <div
            className="block sm:hidden w-[80px] lg:w-[140px] h-[0.5px] flex-shrink-0 bg-black/70 dark:bg-white/70"
            style={{ transform: "rotate(65.363deg)" }}
          />
        </motion.div>

        <motion.p
          className="max-w-[173px] lg:max-w-[422px] text-xs lg:text-[32px] font-extralight leading-[120%] text-text-primary-light dark:text-text-primary-dark"
          variants={YScrollVariants}
          transition={{ duration: 0.4 }}
        >
          BABCO is a global design powerhouse crafting the future of AI brands
          and products.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
