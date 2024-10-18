"use client";
import { useColorCycle } from "@/lib/hooks/use-color-cycle";
import BabcoLogo from "./babco-logo";
import Image from "next/image";
import babcoShadowLogo from "../../../../public/babco-shadow-logo.svg";
import BabcoLogoMobile from "./babco-logo-mobile";

const Hero = () => {
  const color = useColorCycle();

  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="hidden lg:block">
        <BabcoLogo fill={color} />
      </div>

      <div className="block lg:hidden">
        <BabcoLogoMobile fill={color} />
      </div>
      <Image src={babcoShadowLogo} alt="babco" />
    </section>
  );
};

export default Hero;
