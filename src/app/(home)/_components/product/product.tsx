"use client";
import { motion } from "motion/react";
import ProductItem from "@/app/(home)/_components/product/product-item";
import { StaticImageData } from "next/image";
import { SliderItem } from "@/components/gallery-slider";
import { Alignment, Fit } from "@rive-app/react-canvas";
import { YScrollVariants } from "@/lib/utils/animations";
import oneHealth1 from "@/../public/images/carousel-onehealth/onehealth-1.webp";
import oneHealth2 from "@/../public/images/carousel-onehealth/onehealth-2.svg";
import oneHealth3 from "@/../public/images/carousel-onehealth/onehealth-3.webp";
import oneHealth4 from "@/../public/images/carousel-onehealth/onehealth-4.webp";
import arch1 from "@/../public/images/carousel-arch/arch-1.webp";
import arch2 from "@/../public/images/carousel-arch/arch-2.webp";
import arch3 from "@/../public/images/carousel-arch/arch-3.webp";
import arch4 from "@/../public/images/carousel-arch/arch-4.webp";
import navii1 from "@/../public/images/carousel-navii/navii-1.webp";
import navii2 from "@/../public/images/carousel-navii/navii-2.webp";
import navii3 from "@/../public/images/carousel-navii/navii-3.webp";
import navii4 from "@/../public/images/carousel-navii/navii-4.webp";
import brandmarch1 from "@/../public/images/carousel-brandmarch/brandmarch-1.webp";
import brandmarch2 from "@/../public/images/carousel-brandmarch/brandmarch-2.webp";
import brandmarch3 from "@/../public/images/carousel-brandmarch/brandmarch-3.webp";
import brandmarch4 from "@/../public/images/carousel-brandmarch/brandmarch-4.webp";
import brandmarch5 from "@/../public/images/carousel-brandmarch/brandmarch-5.webp";
import brandmarch6 from "@/../public/images/carousel-brandmarch/brandmarch-6.webp";
import sqlit1 from "@/../public/images/carousel-sqlite/sqlit-1.webp";
import sqlit2 from "@/../public/images/carousel-sqlite/sqlit-2.webp";
import sqlit3 from "@/../public/images/carousel-sqlite/sqlit-3.webp";
import sqlit4 from "@/../public/images/carousel-sqlite/sqlit-4.webp";
import tembo1 from "@/../public/images/carousel-tembo/tembo-1.webp";
import tembo2 from "@/../public/images/carousel-tembo/tembo-2.webp";
import omlet1 from "@/../public/images/carousel-omlet/omlet-1.webp";
import omlet2 from "@/../public/images/carousel-omlet/omlet-2.webp";
import omlet3 from "@/../public/images/carousel-omlet/omlet-3.webp";
// import gitar1 from "@/../public/images/carousel-gitar/gitar-1.svg";
// import gitar2 from "@/../public/images/carousel-gitar/gitar-2.webp";
// import gitar3 from "@/../public/images/carousel-gitar/gitar-3.webp";
// import gitar4 from "@/../public/images/carousel-gitar/gitar-4.webp";
// import apolitical1 from "@/../public/images/carousel-apolitical/apolitical-1.webp";
// import apolitical2 from "@/../public/images/carousel-apolitical/apolitical-2.webp";
// import apolitical3 from "@/../public/images/carousel-apolitical/apolitical-3.webp";
import oumi2 from "@/../public/images/carousel-oumi/oumi-2.webp";
import oumi3 from "@/../public/images/carousel-oumi/oumi-3.webp";

// Helper function to create image slides
const createImageSlide = (
  src: StaticImageData,
  width: number,
  height: number
): SliderItem => ({
  src,
  width,
  height,
  type: "image" as const,
});

// Helper function to create video slides
const createVideoSlide = (
  src: string,
  width: number,
  height: number,
  autoplay = true,
  loop = true,
  muted = true
): SliderItem => ({
  src,
  width,
  height,
  type: "video" as const,
  autoplay,
  loop,
  muted,
});

const createRiveSlide = (
  src: string,
  width: number,
  height: number,
  options: Partial<SliderItem> = {}
): SliderItem => ({
  src,
  width,
  height,
  type: "rive" as const,
  autoplay: true,
  fit: Fit.FitWidth,
  alignment: Alignment.Center,
  stateMachines: "State Machine 1",
  ...options,
});

const onehealthCarousel: SliderItem[][] = [
  [createImageSlide(oneHealth1, 883, 540)],
  [
    createImageSlide(oneHealth2, 377, 268),
    createImageSlide(oneHealth3, 377, 256),
  ],

  [createImageSlide(oneHealth4, 540, 540)],
  [createImageSlide(oneHealth1, 883, 540)],
  [
    createImageSlide(oneHealth2, 377, 268),
    createImageSlide(oneHealth3, 377, 256),
  ],

  [createImageSlide(oneHealth4, 540, 540)],
];

const archCarousel: SliderItem[][] = [
  [
    createRiveSlide("/images/carousel-arch/arch-video.riv", 883, 540, {
      autoplay: true,
      fit: Fit.Cover,
    }),
  ],
  [createImageSlide(arch1, 384, 268), createImageSlide(arch2, 384, 256)],
  [createImageSlide(arch3, 349, 268), createImageSlide(arch4, 349, 256)],
  [
    createRiveSlide("/images/carousel-arch/arch-video.riv", 883, 540, {
      autoplay: true,
      fit: Fit.Cover,
    }),
  ],
  [createImageSlide(arch1, 384, 268), createImageSlide(arch2, 349, 256)],
  [createImageSlide(arch3, 349, 268), createImageSlide(arch4, 349, 256)],
];

const naviiCarousel: SliderItem[][] = [
  [createVideoSlide("/images/carousel-navii/short-marketing.mp4", 981, 540)],
  [createImageSlide(navii1, 883, 540)],
  [createImageSlide(navii2, 344, 193), createImageSlide(navii3, 344, 331)],

  [createImageSlide(navii4, 883, 540)],
];

const brandmarchCarousel: SliderItem[][] = [
  [createImageSlide(brandmarch1, 827, 540)],
  [
    createImageSlide(brandmarch2, 344, 193),
    createImageSlide(brandmarch3, 344, 331),
  ],
  [createImageSlide(brandmarch4, 720, 540)],
  [
    createImageSlide(brandmarch5, 344, 193),
    createImageSlide(brandmarch6, 344, 331),
  ],
  [createImageSlide(brandmarch1, 827, 540)],
  [
    createImageSlide(brandmarch2, 344, 193),
    createImageSlide(brandmarch3, 344, 331),
  ],
  [createImageSlide(brandmarch4, 720, 540)],
  [
    createImageSlide(brandmarch5, 344, 193),
    createImageSlide(brandmarch6, 344, 331),
  ],
];

const oumiCarousel: SliderItem[][] = [
  [createVideoSlide("/images/carousel-oumi/oumi-video.mp4", 981, 540)],
  [createImageSlide(oumi2, 349, 251), createImageSlide(oumi3, 349, 268)],
  [createVideoSlide("/images/carousel-oumi/oumi-video.mp4", 981, 540)],
  [createImageSlide(oumi2, 349, 251), createImageSlide(oumi3, 349, 268)],
];

const sqliteCarousel: SliderItem[][] = [
  [createVideoSlide("/images/carousel-sqlite/sqlit-video.mp4", 834, 540)],
  [createImageSlide(sqlit1, 168, 540)],
  [createImageSlide(sqlit2, 798, 540)],
  [createImageSlide(sqlit3, 258, 258), createImageSlide(sqlit4, 258, 266)],
  [createVideoSlide("/images/carousel-sqlite/sqlit-video.mp4", 834, 540)],
  [createImageSlide(sqlit1, 168, 540)],
  [createImageSlide(sqlit2, 798, 540)],
  [createImageSlide(sqlit3, 258, 258), createImageSlide(sqlit4, 258, 266)],
];

const temboCarousel: SliderItem[][] = [
  [createVideoSlide("/images/carousel-tembo/tembo-video.mp4", 743, 540)],
  [createImageSlide(tembo1, 173, 540)],
  [createImageSlide(tembo2, 743, 540)],
  [createVideoSlide("/images/carousel-tembo/tembo-video.mp4", 743, 540)],
  [createImageSlide(tembo1, 173, 540)],
  [createImageSlide(tembo2, 743, 540)],
];

const omletCarousel: SliderItem[][] = [
  [
    createRiveSlide("/images/carousel-omlet/omlet-video.riv", 540, 540, {
      autoplay: true,
      fit: Fit.Cover,
    }),
  ],
  [createImageSlide(omlet1, 452, 314), createImageSlide(omlet2, 452, 210)],
  [createImageSlide(omlet3, 540, 540)],
  [
    createRiveSlide("/images/carousel-omlet/omlet-video.riv", 540, 540, {
      autoplay: true,
      fit: Fit.Cover,
    }),
  ],
  [createImageSlide(omlet1, 452, 314), createImageSlide(omlet2, 452, 210)],
  [createImageSlide(omlet3, 540, 540)],
];

// const gitarCarousel: SliderItem[][] = [
//   [createImageSlide(gitar1, 259, 234), createImageSlide(gitar2, 259, 290)],
//   [createImageSlide(gitar3, 540, 540)],
//   [createImageSlide(gitar4, 540, 540)],
//   [createImageSlide(gitar1, 259, 234), createImageSlide(gitar2, 259, 290)],
//   [createImageSlide(gitar3, 540, 540)],
//   [createImageSlide(gitar4, 540, 540)],
// ];

// const apoliticalCarousel: SliderItem[][] = [
//   [createImageSlide(apolitical1, 827, 540)],
//   [createImageSlide(apolitical2, 540, 540)],
//   [createImageSlide(apolitical3, 540, 540)],
//   [createImageSlide(apolitical1, 827, 540)],
//   [createImageSlide(apolitical2, 540, 540)],
//   [createImageSlide(apolitical3, 540, 540)],
// ];

const Product = () => {
  return (
    <section className="w-full flex flex-col items-start">
      <motion.p
        className="cursor-scale text-[88px] font-extralight leading-[93%] text-text-primary-light dark:text-text-primary-dark mb-12"
        initial="hidden"
        whileInView="visible"
        variants={YScrollVariants}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Selected
        <br /> Works
      </motion.p>

      <div className="w-full flex flex-col items-start justify-center gap-16 lg:gap-[200px">
        <ProductItem
          title={"Onehealth"}
          subtitle={"Health Coverage"}
          images={onehealthCarousel}
        />
        <ProductItem title={"Navii"} subtitle={"AI"} images={naviiCarousel} />
        <ProductItem title={"Arch"} subtitle={"AI"} images={archCarousel} />
        <ProductItem
          title={"Brandmarch"}
          subtitle={"Marketplaces"}
          images={brandmarchCarousel}
        />
        <ProductItem title={"Oumi"} subtitle={"AI"} images={oumiCarousel} />
        <ProductItem
          title={"SQLite Cloud"}
          subtitle={"Dev Infrastructure"}
          images={sqliteCarousel}
        />
        <ProductItem
          title={"Tembo"}
          subtitle={"Dev Infrastructure"}
          images={temboCarousel}
        />
        <ProductItem
          title={"Omlet"}
          subtitle={"Observability"}
          images={omletCarousel}
        />
        {/* <ProductItem
        title={"Gitar"}
        subtitle={"Dev Tooling + AI"}
        images={gitarCarousel}
      /> */}
        {/* <ProductItem
        title={"Apolitical"}
        subtitle={"Government"}
        images={apoliticalCarousel}
      /> */}
      </div>
    </section>
  );
};

export default Product;
