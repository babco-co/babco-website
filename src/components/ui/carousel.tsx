"use client";
import React, { useRef, useEffect, useState, ReactNode } from "react";

const Carousel = ({
  children,
  speed = 0.5,
  gap = 16,
  className = "",
  itemClassName = "",
}: {
  children: ReactNode;
  speed?: number;
  gap?: number;
  className?: string;
  itemClassName?: string;
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const childrenArray = React.Children.toArray(children);
  const slides = [...childrenArray, ...childrenArray, ...childrenArray];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId: number;

    const animate = () => {
      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition + speed;
        const maxScroll = carousel.scrollWidth / 3;

        if (newPosition >= maxScroll) {
          return maxScroll;
        }

        return newPosition;
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [speed]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.scrollLeft = scrollPosition;

    if (scrollPosition === carousel.scrollWidth / 3) {
      setScrollPosition(0);
      carousel.scrollLeft = 0;
    }
  }, [scrollPosition]);

  return (
    <div
      ref={carouselRef}
      className={`flex flex-row items-center justify-start overflow-hidden ${className}`}
      style={{ gap: `${gap}px` }}
    >
      {slides.map((child, index) => (
        <div key={index} className={`flex-shrink-0 ${itemClassName}`}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
