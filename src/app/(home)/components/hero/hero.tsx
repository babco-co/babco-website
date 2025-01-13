"use client";
import RiveWrapper from "@/components/rive-wrapper";
import { containerVariants, YScrollVariants } from "@/lib/utils/animations";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center">
      <RiveWrapper
        src="animations/logo.riv"
        autoplay={true}
        playOnView={false}
        containerClassName="w-full h-[500px] sm:h-[80vh]"
      />

      <motion.div
        className="w-full flex flex-col sm:flex-row items-center justify-between gap-10 px-[44px] mb-[120px]"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        <motion.p
          className="max-w-[670px] text-3xl lg:text-[80px] font-extralight leading-[108%] text-text-primary-light dark:text-text-primary-dark"
          variants={YScrollVariants}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          Building tomorrows iconic brands
        </motion.p>

        <motion.div variants={YScrollVariants} transition={{ duration: 0.4 }}>
          <div
            className="w-[140px] h-[0.5px] flex-shrink-0 bg-black/70 dark:bg-white/70"
            style={{ transform: "rotate(-65.363deg)" }}
          />
        </motion.div>

        <motion.p
          className="max-w-[422px] text-lg lg:text-[32px] font-extralight leading-[120%] text-text-primary-light dark:text-text-primary-dark"
          variants={YScrollVariants}
          transition={{ duration: 0.4 }}
        >
          BABCO is a global branding, product design, and engineering firm.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
