import Image from "next/image";
import CarouselGallery from "@/components/ui/carousel-gallery";
import Carousel from "@/components/ui/carousel";
import line from "../../../public/line.svg";
import lineMobile from "../../../public/line-mobile.svg";
import tembo from "../../../public/carousel-brands/tembo-brand.svg";
import arch from "../../../public/carousel-brands/arch-brand.svg";
import gitar from "../../../public/carousel-brands/gitar-brand.svg";
import apolitical from "../../../public/carousel-brands/apolitical-brand.svg";
import omlet from "../../../public/carousel-brands/omlet-brand.svg";
import sqlite from "../../../public/carousel-brands/sqlite-brand.svg";
import oumi from "../../../public/carousel-brands/oumi-brand.svg";
import brandmarch from "../../../public/carousel-brands/brandmarch-brand.svg";
import brand1 from "../../../public/carousel-brands/brand-1.svg";
import brand2 from "../../../public/carousel-brands/brand-2.webp";
import brand3 from "../../../public/carousel-brands/brand-3.webp";
import brand4 from "../../../public/carousel-brands/brand-4.svg";
import brand5 from "../../../public/carousel-brands/brand-5.webp";
import brand6 from "../../../public/carousel-brands/brand-6.svg";
import brand7 from "../../../public/carousel-brands/brand-7.svg";
import brand8 from "../../../public/carousel-brands/brand-8.svg";
import brand9 from "../../../public//carousel-brands/brand-9.webp";
import { Spacer } from "@/components/layout/spacer";

const carouselBrandImages = [
  { src: tembo },
  { src: arch },
  { src: gitar },
  { src: apolitical },
  { src: omlet },
  { src: sqlite },
  { src: oumi },
  { src: brandmarch },
];

const carouselImages = [
  [
    { src: brand1, width: 349, height: 291 },
    { src: brand2, width: 349, height: 244 },
  ],
  [
    { src: brand3, width: 425, height: 367 },
    { src: brand4, width: 425, height: 168 },
  ],
  [{ src: brand5, width: 456, height: 541 }],
  [
    { src: brand6, width: 256, height: 179 },
    { src: brand7, width: 256, height: 354 },
  ],
  [
    { src: brand8, width: 523, height: 253 },
    { src: brand9, width: 523, height: 73 },
  ],
];

const Brands = () => {
  return (
    <section className="w-full flex flex-col gap-10 lg:gap-32 overflow-x-hidden">
      <Spacer horizontal>
        <div className="w-full flex flex-row items-center justify-start">
          <p className="min-w-[160px] lg:min-w-[600px] text-xl lg:text-[72px] font-extralight leading-[120%]">
            Bring your iconic brand to life
          </p>

          <Image className="hidden lg:block" src={line} alt="line" />

          <Image className="block lg:hidden" src={lineMobile} alt="line" />

          <Carousel speed={0.5} gap={68} className="w-full">
            {carouselBrandImages.map((brand, index) => (
              <Image key={index} src={brand.src} alt="brand logo" />
            ))}
          </Carousel>
        </div>
      </Spacer>

      <CarouselGallery items={carouselImages} containerHeight={541} />
    </section>
  );
};

export default Brands;
