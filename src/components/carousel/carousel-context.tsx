"use client";

import { createContext, useContext } from "react";

interface CarouselContextType {
  currentIndex: number;
  totalItems: number;
  scrollToIndex: (index: number) => void;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
}

export const CarouselContext = createContext<CarouselContextType | null>(null);

export const useCarouselContext = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    return {
      currentIndex: 0,
      totalItems: 0,
      scrollToIndex: () => {},
      scrollPrev: () => {},
      scrollNext: () => {},
      canScrollPrev: false,
      canScrollNext: false,
    };
  }
  return context;
};

export const useCarouselControls = () => {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } =
    useCarouselContext();
  return { scrollPrev, scrollNext, canScrollPrev, canScrollNext };
};
