"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Carousel from "@/components/carousel/carousel";
import { containerVariants, YScrollVariants } from "@/lib/utils/animations";

const images = [
  {
    src: "/images/team-behind/airbnb-logo.svg",
    mobileWidth: 31,
    mobileHeight: 33,
    desktopWidth: 51,
    desktopHeight: 54,
  },
  {
    src: "/images/team-behind/google-logo.svg",
    mobileWidth: 33,
    mobileHeight: 33,
    desktopWidth: 54,
    desktopHeight: 54,
  },
  {
    src: "/images/team-behind/apple-logo.svg",
    mobileWidth: 33,
    mobileHeight: 33,
    desktopWidth: 54,
    desktopHeight: 54,
  },
  {
    src: "/images/team-behind/meta-logo.svg",
    mobileWidth: 54,
    mobileHeight: 36,
    desktopWidth: 81,
    desktopHeight: 54,
  },
  {
    src: "/images/team-behind/amazon-logo.svg",
    mobileWidth: 39,
    mobileHeight: 36,
    desktopWidth: 59,
    desktopHeight: 54,
  },
  {
    src: "/images/team-behind/instagram-logo.svg",
    mobileWidth: 36,
    mobileHeight: 36,
    desktopWidth: 54,
    desktopHeight: 54,
  },
  {
    src: "/images/team-behind/Braun-logo.svg",
    mobileWidth: 85,
    mobileHeight: 36,
    desktopWidth: 128,
    desktopHeight: 54,
  },
  {
    src: "/images/team-behind/king-logo.svg",
    mobileWidth: 53,
    mobileHeight: 36,
    desktopWidth: 80,
    desktopHeight: 54,
  },
  {
    src: "/images/team-behind/samsung-logo.svg",
    mobileWidth: 135,
    mobileHeight: 36,
    desktopWidth: 203,
    desktopHeight: 54,
  },
];

const TeamBehind = () => {
  return (
    <section className="cursor-scale w-full flex flex-col overflow-x-hidden">
      <motion.div
        className="w-full flex flex-row items-center justify-start"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <motion.p
          className="min-w-[127px] sm:min-w-[158px] text-lg sm:text-2xl font-extralight leading-tight sm:leading-tight"
          variants={YScrollVariants}
        >
          From the
          <br /> team behind
        </motion.p>

        <div
          className="w-[50px] h-[0.5px] shrink-0 bg-black/70 dark:bg-white/70"
          style={{ transform: "rotate(-65.363deg)" }}
        ></div>

        <motion.div variants={YScrollVariants} className="flex-1">
          <div className="w-full opacity-30">
            <Carousel
              showArrows={false}
              autoScroll={true}
              autoScrollSpeed={1}
              gap="gap-6 lg:gap-[60px]"
              align="start"
              itemsAlign="items-center"
            >
              {[...images, ...images, ...images].map((item, index) => (
                <div key={index} className="relative">
                  <Image
                    className="block lg:hidden invert dark:invert-0"
                    src={item.src}
                    alt="brand logo"
                    width={item.mobileWidth}
                    height={item.mobileHeight}
                    sizes="(min-width: 1024px) 100vw, 66vw"
                  />
                  <Image
                    className="hidden lg:block invert dark:invert-0"
                    src={item.src}
                    alt="brand logo"
                    width={item.desktopWidth}
                    height={item.desktopHeight}
                    sizes="100vw"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TeamBehind;
