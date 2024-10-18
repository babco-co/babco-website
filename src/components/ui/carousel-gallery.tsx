"use client";
import React, { useRef, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
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
  speed = 1,
}: {
  items: CarouselItem[][];
  containerHeight: number;
  mode?: CarouselMode;
  speed?: number;
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [...items, ...items, ...items];
  const slideWidth = useRef(0);

  useEffect(() => {
    if (carouselRef.current) {
      const firstSlide = carouselRef.current.querySelector(".slide");
      if (firstSlide) {
        slideWidth.current = firstSlide.getBoundingClientRect().width + 16;
      }
    }
  }, []);

  // Auto scroll effect
  useEffect(() => {
    if (mode !== "auto" || isPaused) return;

    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId: number;

    const animate = () => {
      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition + speed;
        const maxScroll = carousel.scrollWidth / 3;

        if (newPosition >= maxScroll) {
          carousel.scrollLeft = 0;
          return 0;
        }

        return newPosition;
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [mode, isPaused, speed]);

  // Scroll position effect
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    if (mode === "auto") {
      // Auto mode: instant scrolling
      carousel.style.scrollBehavior = "auto";
      carousel.scrollLeft = scrollPosition;
    } else {
      // Manual mode: smooth scrolling
      carousel.style.scrollBehavior = isTransitioning ? "auto" : "smooth";
      carousel.scrollLeft = scrollPosition;

      if (scrollPosition === carousel.scrollWidth / 3) {
        setIsTransitioning(true);
        setScrollPosition(0);
        carousel.scrollLeft = 0;
        
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }
    }
  }, [scrollPosition, mode, isTransitioning]);

  const handleNext = () => {
    const carousel = carouselRef.current;
    if (!carousel || isTransitioning) return;

    setScrollPosition((prevPosition) => {
      const newPosition = prevPosition + slideWidth.current;
      const maxScroll = carousel.scrollWidth / 3;

      if (newPosition >= maxScroll) {
        return 0;
      }
      return newPosition;
    });
  };

  const handlePrev = () => {
    const carousel = carouselRef.current;
    if (!carousel || isTransitioning) return;

    setScrollPosition((prevPosition) => {
      const newPosition = prevPosition - slideWidth.current;
      const maxScroll = carousel.scrollWidth / 3;

      if (newPosition < 0) {
        return maxScroll - slideWidth.current;
      }
      return newPosition;
    });
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="relative">
        <div
          ref={carouselRef}
          className={`w-full h-[${containerHeight}px] overflow-hidden`}
          onMouseEnter={() => mode === "auto" && setIsPaused(true)}
          onMouseLeave={() => mode === "auto" && setIsPaused(false)}
        >
          <div className={`w-full flex space-x-4 ${mode === "manual" ? "transition-transform duration-300 ease-in-out" : ""}`}>
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex} className="flex-shrink-0 slide">
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
      </div>

      {/* Navigation buttons - only for manual mode */}
      {mode === "manual" && (
        <div className="w-full flex items-center justify-between">
          <div className="flex space-x-2">
            <button
              onClick={handlePrev}
              className="w-[44px] h-[44px] rotate-180 transition-opacity duration-200 hover:opacity-80"
              aria-label="Previous slide"
              disabled={isTransitioning}
            >
              <Image src={arrowBtn} alt="prev" width={44} height={44} />
            </button>
            <button
              className="w-[44px] h-[44px] transition-opacity duration-200 hover:opacity-80"
              onClick={handleNext}
              aria-label="Next slide"
              disabled={isTransitioning}
            >
              <Image src={arrowBtn} alt="next" width={44} height={44} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarouselGallery;