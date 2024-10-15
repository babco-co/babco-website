import Image from "next/image";
import Carousel from "@/components/ui/carousel";
import line from "../../../public/line.svg";
import tembo from "../../../public/tembo-brand.svg";
import arch from "../../../public/arch-brand.svg";
import gitar from "../../../public/gitar-brand.svg";
import apolitical from "../../../public/apolitical-brand.svg";
import brand1 from "../../../public/carousel-brands/brand-1.svg";
import brand2 from "../../../public/carousel-brands/brand-2.webp";
import brand3 from "../../../public/carousel-brands/brand-3.webp";
import brand4 from "../../../public/carousel-brands/brand-4.svg";
import brand5 from "../../../public/carousel-brands/brand-5.webp";
import brand6 from "../../../public/carousel-brands/brand-6.svg";
import brand7 from "../../../public/carousel-brands/brand-7.svg";
import brand8 from "../../../public/carousel-brands/brand-8.svg";
import brand9 from "../../../public//carousel-brands/brand-9.webp";
import { Spacer } from "../page";

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
    <section className="w-full flex flex-col gap-32">
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
    </section>
  );
};

export default Brands;
