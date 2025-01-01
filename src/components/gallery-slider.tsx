"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import arrowBtn from "../../public/icons/arrow-btn.svg";
import { fadeInVariants } from "@/lib/utils/animations";

export type SliderItem = {
  src: string | StaticImageData;
  width: number;
  height: number;
};

const GallerySlider = ({
  items,
  containerHeight,
}: {
  items: SliderItem[][];
  containerHeight: number;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: false,
    dragFree: true,
    skipSnaps: true,
  });

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <div className="w-full relative">
      <motion.div
        className="w-full overflow-hidden"
        style={{ height: `${containerHeight}px` }}
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}
        viewport={{ once: true }}
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {items.map((slide, slideIndex) => (
              <div key={slideIndex} className="flex-[0_0_auto]">
                <div className="flex flex-col space-y-4 pr-4">
                  {slide.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.2 }}
                    >
                      <Image
                        src={item.src}
                        alt="Carousel image"
                        width={item.width}
                        height={item.height}
                        className="w-full h-auto object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-[80px] flex items-center justify-between mt-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="flex space-x-2">
          <button
            onClick={scrollPrev}
            className={`rotate-180 transition-opacity duration-200 hover:opacity-80`}
            aria-label="Previous slide"
          >
            <Image src={arrowBtn} alt="prev" width={44} height={44} />
          </button>
          <button
            onClick={scrollNext}
            className={`transition-opacity duration-200 hover:opacity-80`}
            aria-label="Next slide"
          >
            <Image src={arrowBtn} alt="next" width={44} height={44} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default GallerySlider;
