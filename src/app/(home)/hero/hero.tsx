"use client";
import Image from "next/image";
import { useColorCycle } from "@/lib/hooks/use-color-cycle";
import BabcoLogo from "./babco-logo";
import babcoShadowLogo from "../../../../public/babco-shadow-logo.svg";

const Hero = () => {
  const color = useColorCycle();

  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div>
        <BabcoLogo fill={color} />

        <Image src={babcoShadowLogo} alt="babco" />
      </div>
    </section>
  );
};

export default Hero;
