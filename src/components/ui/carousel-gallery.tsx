"use client";
import React, { useRef, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

export type CarouselItem = {
  src: string | StaticImageData;
  width: number;
  height: number;
};

const CarouselGallery = ({
  items,
  containerHeight,
  speed = 1,
}: {
  items: CarouselItem[][];
  containerHeight: number;
  speed?: number;
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const slides = [...items, ...items, ...items];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId: number;

    const animate = () => {
      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition + speed; // Move 1px per frame
        const maxScroll = carousel.scrollWidth / 3; // One-third of the total width

        // If we've scrolled past one-third, reset to the beginning of the middle third
        if (newPosition >= maxScroll) {
          return maxScroll;
        }

        return newPosition;
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.scrollLeft = scrollPosition;

    // If we've reached the end of the middle third, instantly jump back to the start of the middle third
    if (scrollPosition === carousel.scrollWidth / 3) {
      setScrollPosition(0);
      carousel.scrollLeft = 0;
    }
  }, [scrollPosition]);

  return (
    <div
      ref={carouselRef}
      className={`w-full h-[${containerHeight}px] overflow-hidden`}
    >
      <div className="w-full flex space-x-4">
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} className="flex-shrink-0">
            <div className="w-full h-full flex flex-col space-y-4">
              {slide.map((item, index) => (
                <Image
                  className="w-full h-full object-cover"
                  key={index}
                  src={item.src}
                  alt={"img"}
                  width={item.width}
                  height={item.height}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselGallery;
