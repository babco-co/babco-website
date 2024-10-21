"use client";
import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import arrowBtn from "../../../public/arrow-btn.svg";

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
    <div className="relative" style={{ height: `${containerHeight}px` }}>
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
                <Image
                  key={index}
                  src={item.src}
                  alt="Carousel image"
                  width={item.width}
                  height={item.height}
                  className="w-full h-auto object-cover"
                />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-[80px] flex items-center justify-between mt-2 z-50">
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
      </div>

      <style jsx global>{`
        .${sliderId}-next::after, .${sliderId}-prev::after {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default GallerySlider;
