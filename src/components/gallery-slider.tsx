"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { fadeInVariants } from "@/lib/utils/animations";
import { Alignment, Fit } from "@rive-app/react-canvas";
import RiveWrapper from "@/components/rive-wrapper";
import Carousel from "@/components/carousel/carousel";

export type SliderItem = {
  src: string | StaticImageData;
  width: number;
  height: number;
  type?: "video" | "image" | "rive";
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  stateMachines?: string;
  fit?: Fit;
  alignment?: Alignment;
};

const MediaComponent = ({ item }: { item: SliderItem }) => {
  if (item.type === "rive") {
    return (
      <RiveWrapper
        src={item.src as string}
        stateMachines={item.stateMachines}
        autoplay={item.autoplay}
        fit={item.fit}
        alignment={item.alignment}
        width={item.width}
        height={item.height}
      />
    );
  }

  if (item.type === "video") {
    return (
      <video
        src={item.src as string}
        width={item.width}
        height={item.height}
        autoPlay={item.autoplay}
        loop={item.loop}
        muted={item.muted}
        playsInline
      />
    );
  }

  return (
    <Image
      src={item.src}
      alt="Carousel item"
      width={item.width}
      height={item.height}
      className="w-full h-auto object-cover"
    />
  );
};

const GallerySlider = ({
  items,
  containerHeight,
}: {
  items: SliderItem[][];
  containerHeight: number;
}) => {
  return (
    <div className="w-full relative">
      <motion.div
        className="w-full"
        style={{ height: `${containerHeight}px` }}
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}
        viewport={{ once: true }}
      >
        <Carousel
          showArrows={true}
          gap="gap-0"
          align="start"
          slidesToScroll={1}
          autoScroll={false}
          autoScrollSpeed={1}
        >
          {items.map((slide, slideIndex) => (
            <div key={slideIndex} className="flex flex-col space-y-4 pr-4">
              {slide.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                >
                  <MediaComponent item={item} />
                </motion.div>
              ))}
            </div>
          ))}
        </Carousel>
      </motion.div>
    </div>
  );
};

export default GallerySlider;
