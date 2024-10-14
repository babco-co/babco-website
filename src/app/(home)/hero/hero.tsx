"use client";
import Image from "next/image";
import { useColorCycle } from "@/lib/hooks/use-color-cycle";
import BabcoLogo from "./babco-logo";

import babcoShadowLogo from "../../../../public/babco-shadow-logo.svg";
import line from "../../../../public/line.svg";
import tembo from "../../../../public/tembo-brand.svg";
import arch from "../../../../public/arch-brand.svg";
import apolitical from "../../../../public/apolitical-brand.svg";

const Hero = () => {
  const color = useColorCycle();

  return (
    <section className="w-full flex flex-col items-center justify-center gap-20 mt-[240px]">
      <div>
        <BabcoLogo fill={color} />

        <Image src={babcoShadowLogo} alt="babco" />
      </div>

      <div className="w-full flex flex-row items-center justify-start">
        <p className="max-w-[600px] text-xl lg:text-[72px] font-extralight leading-[120%]">
          Bring your iconic brand to life
        </p>

        <Image src={line} alt="line" />

        <ul className="flex flex-row items-center justify-start gap-16">
          <li>
            <Image src={tembo} alt="logo" />
          </li>
          <li>
            <Image src={arch} alt="logo" />
          </li>
          <li>
            <Image src={apolitical} alt="logo" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
