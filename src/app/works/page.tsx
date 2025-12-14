"use client";
import { motion } from "motion/react";
import Header from "@/components/header/header";
import { Spacer } from "@/components/spacer";
import { containerVariants, YScrollVariants } from "@/lib/utils/animations";
import BabcoLogo from "@/components/svg/babco-logo";
import Gallery from "@/app/works/components/gallery";

export default function WorksPage() {
  return (
    <div className="w-full min-h-screen font-helvetica">
      <Spacer className="w-full  mt-5 px-5">
        <Header />
      </Spacer>

      <Spacer horizontal vertical className="mt-16 lg:mt-[242px]">
        <motion.div
          className="cursor-scale w-full flex flex-col items-center justify-start gap-4 lg:gap-16 mb-[240px]"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
        >
          <motion.div className="w-full flex flex-row items-center justify-start gap-4">
            <motion.div
              className="w-[668px] h-[140px]"
              variants={YScrollVariants}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <BabcoLogo className="w-full" />
            </motion.div>

            <motion.div
              variants={YScrollVariants}
              transition={{ duration: 0.4 }}
            >
              <div
                className="w-[80px] lg:w-[140px] h-[0.5px] shrink-0 bg-black/70 dark:bg-white/70"
                style={{ transform: "rotate(-65.363deg)" }}
              />
            </motion.div>
          </motion.div>

          <motion.p
            className="w-full text-lg lg:text-[40px] font-extralight leading-[131%] text-text-primary-light dark:text-text-primary-dark"
            variants={YScrollVariants}
            transition={{ duration: 0.4 }}
          >
            We turn bold ideas into stunning realities for tech startups and
            innovators. Our powerhouse design team delivers high-impact results
            that scale with your business, from magnetic brands to{" "}
            <span className="font-normal">seamless product experiences.</span>
          </motion.p>
        </motion.div>

        <Gallery />
      </Spacer>
    </div>
  );
}
