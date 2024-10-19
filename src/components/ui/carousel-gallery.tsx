"use client";
import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import arrowBtn from "../../../public/arrow-btn.svg";

export type CarouselItem = {
  src: string | StaticImageData;
  width: number;
  height: number;
};

type CarouselMode = "auto" | "manual";

const CarouselGallery = ({
  items,
  containerHeight,
  mode = "auto",
  speed = 3000,
  identifier,
}: {
  items: CarouselItem[][];
  containerHeight: number;
  mode?: CarouselMode;
  speed?: number;
  identifier?: string;
}) => {
  const [carouselId, setCarouselId] = useState("");

  useEffect(() => {
    setCarouselId(`carousel-${identifier}-${Date.now()}`);
  }, [identifier]);

  if (!carouselId) return null; // Don't render until we have a carouselId

  return (
    <div className="relative" style={{ height: `${containerHeight}px` }}>
      <Swiper
        slidesPerView="auto"
        spaceBetween={16}
        loop={true}
        autoplay={
          mode === "auto"
            ? { delay: speed, disableOnInteraction: false }
            : false
        }
        navigation={{
          nextEl: `.${carouselId}-next`,
          prevEl: `.${carouselId}-prev`,
        }}
        modules={[Navigation, Autoplay]}
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

      {mode === "manual" && (
        <div className="w-[80px] flex items-center justify-between absolute bottom-[-30%] left-0 z-50">
          <div className="flex space-x-2">
            <button
              className={`${carouselId}-prev rotate-180 transition-opacity duration-200 hover:opacity-80`}
              aria-label="Previous slide"
            >
              <Image src={arrowBtn} alt="prev" width={44} height={44} />
            </button>
            <button
              className={`${carouselId}-next transition-opacity duration-200 hover:opacity-80`}
              aria-label="Next slide"
            >
              <Image src={arrowBtn} alt="next" width={44} height={44} />
            </button>
          </div>
        </div>
      )}

      <style jsx global>{`
        .${carouselId}-next::after, .${carouselId}-prev::after {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default CarouselGallery;
