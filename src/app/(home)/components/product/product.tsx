import arch1 from "../../../../../public/images/carousel-arch/arch-1.webp";
import arch2 from "../../../../../public/images/carousel-arch/arch-2.webp";
import arch4 from "../../../../../public/images/carousel-arch/arch-4.webp";
import arch5 from "../../../../../public/images/carousel-arch/arch-5.webp";
import arch6 from "../../../../../public/images/carousel-arch/arch-6.webp";
import sqlit1 from "../../../../../public/images/carousel-sqlite/sqlit-1.svg";
import sqlit2 from "../../../../../public/images/carousel-sqlite/sqlit-2.webp";
import sqlit4 from "../../../../../public/images/carousel-sqlite/sqlit-4.svg";
import sqlit5 from "../../../../../public/images/carousel-sqlite/sqlit-5.webp";
import sqlit6 from "../../../../../public/images/carousel-sqlite/sqlit-6.webp";
import tembo2 from "../../../../../public/images/carousel-tembo/tembo-2.webp";
import tembo3 from "../../../../../public/images/carousel-tembo/tembo-3.webp";
import tembo4 from "../../../../../public/images/carousel-tembo/tembo-4.webp";
import omlet1 from "../../../../../public/images/carousel-omlet/omlet-1.svg";
import omlet2 from "../../../../../public/images/carousel-omlet/omlet-2.webp";
import omlet4 from "../../../../../public/images/carousel-omlet/omlet-4.webp";
import omlet5 from "../../../../../public/images/carousel-omlet/omlet-5.svg";
import gitar1 from "../../../../../public/images/carousel-gitar/gitar-1.svg";
import gitar2 from "../../../../../public/images/carousel-gitar/gitar-2.webp";
import gitar3 from "../../../../../public/images/carousel-gitar/gitar-3.webp";
import gitar4 from "../../../../../public/images/carousel-gitar/gitar-4.webp";
import apolitical1 from "../../../../../public/images/carousel-apolitical/apolitical-1.webp";
import apolitical2 from "../../../../../public/images/carousel-apolitical/apolitical-2.webp";
import apolitical3 from "../../../../../public/images/carousel-apolitical/apolitical-3.webp";
// import oumi2 from "../../../../../public/images/carousel-oumi/oumi-2.svg";
// import oumi3 from "../../../../../public/images/carousel-oumi/oumi-3.webp";
import ProductItem from "./product-item";
import { StaticImageData } from "next/image";
import { SliderItem } from "@/components/gallery-slider";
import { Alignment, Fit } from "@rive-app/react-canvas";

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

const archCarousel: SliderItem[][] = [
  [createImageSlide(arch1, 349, 256), createImageSlide(arch2, 349, 268)],
  [
    createRiveSlide("/images/carousel-arch/arch-video.riv", 883, 540, {
      autoplay: true,
      fit: Fit.Cover,
    }),
  ],
  [createImageSlide(arch4, 540, 381), createImageSlide(arch5, 540, 143)],
  [createImageSlide(arch6, 680, 540)],
  [createImageSlide(arch1, 349, 256), createImageSlide(arch2, 349, 268)],
  [
    createRiveSlide("/images/carousel-arch/arch-video.riv", 883, 540, {
      autoplay: true,
      fit: Fit.Cover,
    }),
  ],
  [createImageSlide(arch4, 540, 381), createImageSlide(arch5, 540, 143)],
  [createImageSlide(arch6, 680, 540)],
];

// const oumiCarousel: SliderItem[][] = [
//   [createVideoSlide("/images/carousel-oumi/oumi-video.mp4", 981, 540)],
//   [createImageSlide(oumi2, 349, 251), createImageSlide(oumi3, 349, 268)],
//   [createVideoSlide("/images/carousel-oumi/oumi-video.mp4", 981, 540)],
//   [createImageSlide(oumi2, 349, 251), createImageSlide(oumi3, 349, 268)],
// ];

const sqliteCarousel: SliderItem[][] = [
  [createVideoSlide("/images/carousel-sqlite/sqlit-video.mp4", 834, 540)],
  [createImageSlide(sqlit1, 258, 258), createImageSlide(sqlit2, 258, 266)],
  [createImageSlide(sqlit4, 168, 540)],
  [createImageSlide(sqlit5, 540, 540)],
  [createImageSlide(sqlit6, 540, 540)],
  [createVideoSlide("/images/carousel-sqlite/sqlit-video.mp4", 834, 540)],
  [createImageSlide(sqlit1, 258, 258), createImageSlide(sqlit2, 258, 266)],
  [createImageSlide(sqlit4, 168, 540)],
  [createImageSlide(sqlit5, 540, 540)],
  [createImageSlide(sqlit6, 540, 540)],
];

const temboCarousel: SliderItem[][] = [
  [createVideoSlide("/images/carousel-tembo/tembo-video.mp4", 743, 540)],
  [createImageSlide(tembo2, 483, 149), createImageSlide(tembo3, 483, 375)],
  [createImageSlide(tembo4, 540, 540)],
  [createVideoSlide("/images/carousel-tembo/tembo-video.mp4", 743, 540)],
  [createImageSlide(tembo2, 483, 149), createImageSlide(tembo3, 483, 375)],
  [createImageSlide(tembo4, 540, 540)],
];

const omletCarousel: SliderItem[][] = [
  [createImageSlide(omlet1, 349, 251), createImageSlide(omlet2, 349, 273)],
  [
    createRiveSlide("/images/carousel-omlet/omlet-video.riv", 709, 540, {
      autoplay: true,
      fit: Fit.Cover,
    }),
  ],
  [createImageSlide(omlet4, 440, 540)],
  [createImageSlide(omlet5, 540, 540)],
  [createImageSlide(omlet1, 349, 251), createImageSlide(omlet2, 349, 273)],
  [
    createRiveSlide("/images/carousel-omlet/omlet-video.riv", 709, 540, {
      autoplay: true,
      fit: Fit.Cover,
    }),
  ],
  [createImageSlide(omlet4, 440, 540)],
  [createImageSlide(omlet5, 540, 540)],
];

const gitarCarousel: SliderItem[][] = [
  [createImageSlide(gitar1, 259, 234), createImageSlide(gitar2, 259, 290)],
  [createImageSlide(gitar3, 540, 540)],
  [createImageSlide(gitar4, 540, 540)],
  [createImageSlide(gitar1, 259, 234), createImageSlide(gitar2, 259, 290)],
  [createImageSlide(gitar3, 540, 540)],
  [createImageSlide(gitar4, 540, 540)],
];

const apoliticalCarousel: SliderItem[][] = [
  [createImageSlide(apolitical1, 827, 540)],
  [createImageSlide(apolitical2, 540, 540)],
  [createImageSlide(apolitical3, 540, 540)],
];

const Product = () => {
  return (
    <section className="w-full flex flex-col items-start justify-center gap-16 lg:gap-[200px]">
      <ProductItem title={"Arch"} subtitle={"AI"} images={archCarousel} />
      {/* <ProductItem title={"Oumi"} subtitle={"AI"} images={oumiCarousel} /> */}
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
      <ProductItem
        title={"Gitar"}
        subtitle={"Dev Tooling + AI"}
        images={gitarCarousel}
      />
      <ProductItem
        title={"Apolitical"}
        subtitle={"Government"}
        images={apoliticalCarousel}
      />
    </section>
  );
};

export default Product;
