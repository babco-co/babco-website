"use client";
import Image from "next/image";
import { motion } from "motion/react";
import GallerySlider, { SliderItem } from "@/components/gallery-slider";
import { YScrollVariants } from "@/lib/utils/animations";
import arrowWhiteIcon from "../../../../../public/icons/arrow-white-icon.svg";

const ProductItem = ({
  title,
  subtitle,
  images,
}: {
  title: string;
  subtitle: string;
  images: SliderItem[][];
}) => {
  return (
    <section className="w-full flex flex-col items-start justify-center gap-8">
      <div className="w-full overflow-hidden">
        <GallerySlider items={images} containerHeight={541} />
      </div>

      <motion.div
        className="w-full flex flex-col items-start justify-center gap-2.5"
        initial="hidden"
        whileInView="visible"
        variants={YScrollVariants}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <Image src={arrowWhiteIcon} alt="arrow" />

        <p className="text-[32px] lg:text-[42px] font-extralight leading-[120%] text-primary-white">
          {title}
        </p>
        <p className="text-base font-extralight leading-[120%] text-dark-gray">
          {subtitle}
        </p>
      </motion.div>
    </section>
  );
};

export default ProductItem;
