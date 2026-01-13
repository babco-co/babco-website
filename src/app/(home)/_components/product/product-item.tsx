"use client";
import Image from "next/image";
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
  return (
    <section className="w-full flex flex-col items-start justify-center gap-2">
      <div className="w-full overflow-hidden">
        <GallerySlider items={images} containerHeight={600} />
      </div>

      <motion.div
        className="w-full flex flex-row sm:flex-col items-start justify-between gap-2.5"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-start justify-center">
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

          <motion.div variants={YScrollVariants} transition={{ duration: 0.4 }}>
            <Image
              className="mt-2 invert-0 dark:invert"
              src={arrowBlackIcon}
              alt="arrow"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProductItem;
