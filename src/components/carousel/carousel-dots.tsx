"use client";

import { useCarouselContext } from "./carousel-context";

interface CarouselDotsProps {
  className?: string;
}

const CarouselDots = ({ className = "justify-start" }: CarouselDotsProps) => {
  const { currentIndex, totalItems, scrollToIndex } = useCarouselContext();

  return (
    <div className={`flex gap-2 ${className}`}>
      {Array.from({ length: totalItems }).map((_, index) => (
        <button
          key={index}
          onClick={() => scrollToIndex(index)}
          className="w-2 h-2 rounded-full transition-colors duration-200"
          aria-label={`Go to slide ${index + 1}`}
        >
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <circle
              cx="4"
              cy="4"
              r="4"
              className={
                currentIndex === index
                  ? "fill-black-core dark:fill-white"
                  : "fill-gray-light dark:fill-[#363636]"
              }
            />
          </svg>
        </button>
      ))}
    </div>
  );
};

export default CarouselDots;
