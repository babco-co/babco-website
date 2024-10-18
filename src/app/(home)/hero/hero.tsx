"use client";
import { useColorCycle } from "@/lib/hooks/use-color-cycle";
import BabcoLogo from "./babco-logo";
import Image from "next/image";
import babcoShadowLogo from "../../../../public/babco-shadow-logo.svg";

const Hero = () => {
  const color = useColorCycle();

  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="w-full h-fit flex justify-center">
        <BabcoLogo fill={color} />
      </div>

      <Image src={babcoShadowLogo} alt="babco" />
    </section>
  );
};

export default Hero;
