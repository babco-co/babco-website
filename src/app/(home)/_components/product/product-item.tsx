"use client";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import GallerySlider, { SliderItem } from "@/components/gallery-slider";
import { containerVariants, YScrollVariants } from "@/lib/utils/animations";
import arrowBlackIcon from "@/../public/icons/arrow-black-icon.svg";

const ProductItem = ({
  title,
  subtitle,
  images,
}: {
  title: string;
  subtitle: string;
  images: SliderItem[][];
}) => {
  const [scrollPrev, setScrollPrev] = useState<(() => void) | null>(null);
  const [scrollNext, setScrollNext] = useState<(() => void) | null>(null);

  const handleInit = useCallback((prev: () => void, next: () => void) => {
    setScrollPrev(() => prev);
    setScrollNext(() => next);
  }, []);

  return (
    <section className="w-full flex flex-col items-start justify-center gap-8">
      <div className="w-full overflow-hidden">
        <GallerySlider
          items={images}
          containerHeight={541}
          onInit={handleInit}
        />
      </div>

      <motion.div
        className="w-full flex flex-row sm:flex-col items-start justify-between gap-2.5"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-start justify-center gap-2.5">
          <motion.div variants={YScrollVariants} transition={{ duration: 0.4 }}>
            <Image
              className="invert-0 dark:invert"
              src={arrowBlackIcon}
              alt="arrow"
            />
          </motion.div>

          <motion.p
            className="cursor-scale text-[32px] lg:text-[42px] font-extralight leading-[120%] text-text-primary-light dark:text-text-primary-dark"
            variants={YScrollVariants}
            transition={{ duration: 0.4 }}
          >
            {title}
          </motion.p>

          <motion.p
            className="text-base font-extralight leading-[120%] text-dark-gray"
            variants={YScrollVariants}
            transition={{ duration: 0.4 }}
          >
            {subtitle}
          </motion.p>
        </div>

        <motion.div
          className="w-[80px] flex items-center justify-between mt-4"
          variants={YScrollVariants}
          transition={{ duration: 0.4 }}
        >
          <div className="flex space-x-2">
            <button
              onClick={() => scrollPrev?.()}
              className="w-[25px] h-[25px] flex items-center justify-center rounded-full border border-[#7E7878] rotate-180 transition-opacity duration-200 hover:opacity-80"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="8"
                viewBox="0 0 10 8"
                fill="none"
                className="text-[#616161] dark:text-white"
              >
                <path
                  d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM9.35355 4.35355C9.54882 4.15829 9.54882 3.84171 9.35355 3.64645L6.17157 0.464466C5.97631 0.269203 5.65973 0.269203 5.46447 0.464466C5.2692 0.659728 5.2692 0.97631 5.46447 1.17157L8.29289 4L5.46447 6.82843C5.2692 7.02369 5.2692 7.34027 5.46447 7.53553C5.65973 7.7308 5.97631 7.7308 6.17157 7.53553L9.35355 4.35355ZM1 4.5L9 4.5L9 3.5L1 3.5L1 4.5Z"
                  className="fill-current"
                />
              </svg>
            </button>
            <button
              onClick={() => scrollNext?.()}
              className="w-[25px] h-[25px] flex items-center justify-center rounded-full border border-[#7E7878] transition-opacity duration-200 hover:opacity-80"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="8"
                viewBox="0 0 10 8"
                fill="none"
                className="text-[#616161] dark:text-white"
              >
                <path
                  d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM9.35355 4.35355C9.54882 4.15829 9.54882 3.84171 9.35355 3.64645L6.17157 0.464466C5.97631 0.269203 5.65973 0.269203 5.46447 0.464466C5.2692 0.659728 5.2692 0.97631 5.46447 1.17157L8.29289 4L5.46447 6.82843C5.2692 7.02369 5.2692 7.34027 5.46447 7.53553C5.65973 7.7308 5.97631 7.7308 6.17157 7.53553L9.35355 4.35355ZM1 4.5L9 4.5L9 3.5L1 3.5L1 4.5Z"
                  className="fill-current"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProductItem;
