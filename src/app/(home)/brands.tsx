import React from "react";
import Image from "next/image";
import Carousel from "@/components/ui/carousel";
import line from "../../../public/line.svg";
import tembo from "../../../public/tembo-brand.svg";
import arch from "../../../public/arch-brand.svg";
import gitar from "../../../public/gitar-brand.svg";
import apolitical from "../../../public/apolitical-brand.svg";
import carousel1 from "../../../public/brands-carousel/carousel-1.svg";
import carousel2 from "../../../public/brands-carousel/carousel-2.webp";
import carousel3 from "../../../public/brands-carousel/carousel-3.webp";
import carousel4 from "../../../public/brands-carousel/carousel-4.svg";
import carousel5 from "../../../public/brands-carousel/carousel-5.webp";
import carousel6 from "../../../public/brands-carousel/carousel-6.svg";
import carousel7 from "../../../public/brands-carousel/carousel-7.svg";
import carousel8 from "../../../public/brands-carousel/carousel-8.svg";
import carousel9 from "../../../public//brands-carousel/carousel-9.webp";
import { Spacer } from "../page";

const carouselImages = [
  [
    { src: carousel1, width: 349, height: 291 },
    { src: carousel2, width: 349, height: 244 },
  ],
  [
    { src: carousel3, width: 425, height: 367 },
    { src: carousel4, width: 425, height: 168 },
  ],
  [{ src: carousel5, width: 456, height: 541 }],
  [
    { src: carousel6, width: 256, height: 179 },
    { src: carousel7, width: 256, height: 354 },
  ],
  [
    { src: carousel8, width: 523, height: 253 },
    { src: carousel9, width: 523, height: 73 },
  ],
];

const Brands = () => {
  return (
    <div className="w-full flex flex-col gap-32">
      <Spacer horizontal>
        <div className="w-full flex flex-row items-center justify-start">
          <p className="max-w-[600px] text-xl lg:text-[72px] font-extralight leading-[120%]">
            Bring your iconic brand to life
          </p>

          <Image src={line} alt="line" />

          <ul className="flex flex-row items-center justify-start gap-16">
            <li>
              <Image className="min-w-[73px]" src={tembo} alt="logo" />
            </li>
            <li>
              <Image className="min-w-[73px]" src={arch} alt="logo" />
            </li>
            <li>
              <Image className="min-w-[53px]" src={gitar} alt="logo" />
            </li>
            <li>
              <Image className="min-w-[112px]" src={apolitical} alt="logo" />
            </li>
          </ul>
        </div>
      </Spacer>

      <Carousel images={carouselImages} containerHeight={541} />
    </div>
  );
};

export default Brands;
