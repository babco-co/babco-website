"use client";
import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import arrowBtn from "../../../public/arrow-btn.svg";
import { fadeInVariants } from "@/lib/utils/animations";

export type SliderItem = {
  src: string | StaticImageData;
  width: number;
  height: number;
};

const GallerySlider = ({
  items,
  containerHeight,
  identifier,
}: {
  items: SliderItem[][];
  containerHeight: number;
  identifier?: string;
}) => {
  const [sliderId, setSliderId] = useState("");

  useEffect(() => {
    setSliderId(`carousel-${identifier}-${Date.now()}`);
  }, [identifier]);

  if (!sliderId) return null;

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
        <Swiper
          slidesPerView="auto"
          spaceBetween={16}
          loop={true}
          navigation={{
            nextEl: `.${sliderId}-next`,
            prevEl: `.${sliderId}-prev`,
          }}
          modules={[Navigation]}
          className="h-full"
        >
          {items.map((slide, slideIndex) => (
            <SwiperSlide key={slideIndex} style={{ width: "auto" }}>
              <div className="flex flex-col space-y-4">
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
            </SwiperSlide>
          ))}
        </Swiper>
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
            className={`${sliderId}-prev rotate-180 transition-opacity duration-200 hover:opacity-80`}
            aria-label="Previous slide"
          >
            <Image src={arrowBtn} alt="prev" width={44} height={44} />
          </button>
          <button
            className={`${sliderId}-next transition-opacity duration-200 hover:opacity-80`}
            aria-label="Next slide"
          >
            <Image src={arrowBtn} alt="next" width={44} height={44} />
          </button>
        </div>
      </motion.div>

      <style jsx global>{`
        .${sliderId}-next::after, .${sliderId}-prev::after {
          display: none;
        }

        .swiper-wrapper {
          height: 100% !important;
        }

        .swiper-slide {
          height: auto !important;
        }
      `}</style>
    </div>
  );
};

export default GallerySlider;
