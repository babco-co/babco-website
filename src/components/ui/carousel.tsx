"use client";
import React, { useRef, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

type ImageType = {
  src: string | StaticImageData;
  full?: boolean;
  width: number;
  height: number;
};

const Carousel = ({ images }: { images: ImageType[] }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Create slides based on the full prop
  const slides: ImageType[][] = [];

  for (let i = 0; i < images.length; i++) {
    const firstImage = images[i];
    const secondImage = images[i + 1];

    if (firstImage.full) {
      slides.push([firstImage]);
    } else {
      slides.push([firstImage, secondImage].filter(Boolean));
      i++;
    }
  }

  // Triple the slides array to ensure smooth infinite scrolling
  const tripledSlides = [...slides, ...slides, ...slides];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId: number;

    const animate = () => {
      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition + 1; // Move 1px per frame
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
    <div ref={carouselRef} className="w-full h-[541px] overflow-hidden">
      <div className="flex space-x-4">
        {tripledSlides.map((slide, slideIndex) => (
          <div key={slideIndex} className="flex-shrink-0">
            <div className="w-full h-full flex flex-col space-y-4">
              {slide.map((image, imageIndex) => (
                <Image
                  key={imageIndex}
                  src={image.src}
                  alt={"img"}
                  width={image.width}
                  height={image.height}
                  objectFit="cover"
                //   className="h-full"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
