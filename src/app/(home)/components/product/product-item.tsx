"use client";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import GallerySlider, { SliderItem } from "@/components/gallery-slider";
import { YScrollVariants } from "@/lib/utils/animations";
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
        variants={YScrollVariants}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-start justify-center gap-2.5">
          <Image src={arrowWhiteIcon} alt="arrow" />

          <p className="text-[32px] lg:text-[42px] font-extralight leading-[120%] text-primary-white">
            {title}
          </p>

          <p className="text-base font-extralight leading-[120%] text-dark-gray">
            {subtitle}
          </p>
        </div>

        <motion.div
          className="w-[80px] flex items-center justify-between mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex space-x-2">
            <button
              onClick={() => scrollPrev?.()}
              className="rotate-180 transition-opacity duration-200 hover:opacity-80"
              aria-label="Previous slide"
            >
              <Image src={arrowCircleBtn} alt="prev" width={44} height={44} />
            </button>
            <button
              onClick={() => scrollNext?.()}
              className="transition-opacity duration-200 hover:opacity-80"
              aria-label="Next slide"
            >
              <Image src={arrowCircleBtn} alt="next" width={44} height={44} />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProductItem;
