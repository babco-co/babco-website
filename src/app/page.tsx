import Hero from "./(home)/hero/hero";
import Carousel from "@/components/ui/carousel";

import carousel1 from "../../public/brands-carousel/carousel-1.svg";
import carousel2 from "../../public/brands-carousel/carousel-2.webp";
import carousel3 from "../../public/brands-carousel/carousel-3.webp";
import carousel4 from "../../public/brands-carousel/carousel-4.svg";
import carousel5 from "../../public/brands-carousel/carousel-5.webp";
import carousel6 from "../../public/brands-carousel/carousel-6.svg";
import carousel7 from "../../public/brands-carousel/carousel-7.svg";
import carousel8 from "../../public/brands-carousel/carousel-8.svg";
import carousel9 from "../../public//brands-carousel/carousel-9.webp";

const carouselImages = [
  { src: carousel1, width: 349, height: 291 },
  { src: carousel2, width: 349, height: 244 },
  { src: carousel3, width: 425, height: 367 },
  { src: carousel4, width: 425, height: 168 },
  { src: carousel5, width: 456, height: 541, full: true },
  { src: carousel6, width: 256, height: 179 },
  { src: carousel7, width: 256, height: 354 },
  { src: carousel8, width: 523, height: 253 },
  { src: carousel9, width: 523, height: 73 },
];

// const carouselImages = [
//   [
//     { src: carousel1, width: 349, height: 291 },
//     { src: carousel2, width: 349, height: 244 },
//   ],
//   [
//     { src: carousel3, width: 425, height: 367 },
//     { src: carousel4, width: 425, height: 168 },
//   ],
//   [{ src: carousel5, width: 456, height: 541, full: true }],
//   [
//     { src: carousel6, width: 256, height: 179 },
//     { src: carousel7, width: 256, height: 354 },
//   ],
//   [
//     { src: carousel8, width: 253, height: 253 },
//     { src: carousel9, width: 237, height: 73 },
//   ],
// ];

export default function Page() {
  return (
    <div className="w-full min-h-screen font-[family-name:var(--font-inter)]">
      <Spacer horizontal vertical>
        <Hero />
      </Spacer>

      <Spacer vertical>
        <Carousel images={carouselImages} />
      </Spacer>
    </div>
  );
}

const Spacer = ({
  children,
  className,
  horizontal = false,
  vertical = false,
}: {
  children: React.ReactNode;
  className?: string;
  horizontal?: boolean;
  vertical?: boolean;
}) => (
  <div
    className={`${horizontal ? "px-4 sm:px-8 lg:px-12" : ""}
       ${
         vertical ? "mb-[120px] sm:mb-[160px] lg:mb-[226px]" : ""
       } ${className}`}
  >
    {children}
  </div>
);
