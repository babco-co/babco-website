"use client";
import { motion } from "framer-motion";
import GallerySlider, { SliderItem } from "@/components/gallery-slider";
import { YScrollVariants } from "@/lib/utils/animations";

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="13"
          viewBox="0 0 10 13"
          fill="none"
        >
          <path
            d="M0.588614 11.8252L0.304428 12.2366L1.1272 12.8049L1.41139 12.3936L0.588614 11.8252ZM9.16485 0.911999C9.11517 0.640361 8.85469 0.460425 8.58306 0.5101L4.15647 1.3196C3.88483 1.36928 3.70489 1.62975 3.75457 1.90139C3.80424 2.17303 4.06472 2.35296 4.33636 2.30329L8.2711 1.58373L8.99066 5.51848C9.04034 5.79012 9.30081 5.97005 9.57245 5.92038C9.84409 5.8707 10.024 5.61023 9.97435 5.33859L9.16485 0.911999ZM1.41139 12.3936L9.08439 1.28613L8.26162 0.717759L0.588614 11.8252L1.41139 12.3936Z"
            fill="white"
          />
        </svg>

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
