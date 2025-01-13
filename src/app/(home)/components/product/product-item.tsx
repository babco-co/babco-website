"use client";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import GallerySlider, { SliderItem } from "@/components/gallery-slider";
import { containerVariants, YScrollVariants } from "@/lib/utils/animations";
import arrowWhiteIcon from "../../../../../public/icons/arrow-white-icon.svg";
import arrowCircleBtn from "../../../../../public/icons/arrow-circle-btn.svg";

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
              className="invert dark:invert-0"
              src={arrowWhiteIcon}
              alt="arrow"
            />
          </motion.div>

          <motion.p
            className="text-[32px] lg:text-[42px] font-extralight leading-[120%] text-text-primary-light dark:text-text-primary-dark"
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
              className="rotate-180 transition-opacity duration-200 hover:opacity-80"
              aria-label="Previous slide"
            >
              <Image
                className="invert dark:invert-0"
                src={arrowCircleBtn}
                alt="prev"
                width={44}
                height={44}
              />
            </button>
            <button
              onClick={() => scrollNext?.()}
              className="transition-opacity duration-200 hover:opacity-80"
              aria-label="Next slide"
            >
              <Image
                className="invert dark:invert-0"
                src={arrowCircleBtn}
                alt="next"
                width={44}
                height={44}
              />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProductItem;
