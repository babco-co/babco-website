"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import CarouselArrows from "@/components/carousel/carousel-arrows";
import { CarouselContext } from "@/components/carousel/carousel-context";

interface CarouselProps {
  children: React.ReactNode[];
  showArrows?: boolean;
  gap?: string;
  align?: "start" | "center" | "end";
  itemsAlign?: "items-start" | "items-center" | "items-end";
  slidesToScroll?: number;
  className?: string;
  autoScroll?: boolean;
  autoScrollSpeed?: number;
}

const Carousel = ({
  children,
  showArrows = true,
  gap = "gap-0",
  align = "start",
  itemsAlign = "items-start",
  slidesToScroll = 1,
  className = "",
  autoScroll = false,
  autoScrollSpeed = 1,
}: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align,
      containScroll: "trimSnaps",
      dragFree: false,
      slidesToScroll,
      skipSnaps: false,
      loop: autoScroll,
    },
    autoScroll
      ? [
          AutoScroll({
            playOnInit: true,
            speed: autoScrollSpeed,
            stopOnInteraction: false,
          }),
        ]
      : []
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollToIndex = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const carouselContextValue = {
    currentIndex: selectedIndex,
    totalItems: children.length,
    scrollToIndex,
    scrollPrev,
    scrollNext,
    canScrollPrev,
    canScrollNext,
  };

  return (
    <CarouselContext.Provider value={carouselContextValue}>
      <div className={className}>
        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className={`flex ${gap} ${itemsAlign}`}>
            {children.map((child, index) => (
              <motion.div
                key={index}
                className="flex-[0_0_auto]"
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                {child}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        {showArrows && (
          <div className="flex justify-start mt-4">
            <CarouselArrows
              onPrev={scrollPrev}
              onNext={scrollNext}
              canScrollPrev={canScrollPrev}
              canScrollNext={canScrollNext}
            />
          </div>
        )}
      </div>
    </CarouselContext.Provider>
  );
};

export default Carousel;
