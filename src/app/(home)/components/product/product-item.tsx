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

        <div className="w-full flex flex-row flex-wrap gap-2 items-start justify-start">
          <Tag titles={["Web design", "Motion", "Eng"]} />
          <Tag titles={["Branding"]} />
          <Tag titles={["UI", "UX Design"]} />
          <Tag titles={["Merch"]} />
          <Tag titles={["Illustration"]} />
          <Tag titles={["Social Media Assets"]} />
        </div>
      </motion.div>
    </section>
  );
};

export default ProductItem;

const Tag = ({ titles }: { titles: string[] }) => {
  return (
    <div
      className="max-w-full inline-flex flex-shrink-0 items-center justify-center px-3 py-2 
        rounded-[32px] border border-[#232323]"
    >
      <div className="flex flex-wrap items-center justify-center gap-1">
        {titles.map((title, index) => (
          <span key={index} className="flex items-center">
            {index > 0 && (
              <span className="text-xs font-bold text-light-gray mx-1">+</span>
            )}
            <p className="text-xs font-bold text-light-gray leading-[120%] uppercase break-words">
              {title}
            </p>
          </span>
        ))}
      </div>
    </div>
  );
};
