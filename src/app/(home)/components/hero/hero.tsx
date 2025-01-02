"use client";
import Image from "next/image";
import Button from "@/components/button";
import RiveWrapper from "@/components/rive-wrapper";
import { useColorCycle } from "@/lib/hooks/use-color-cycle";
import { useTransition } from "@/components/page-transition";
import arrowRightIcon from "../../../../../public/icons/arrow-right-icon.svg";

const Hero = () => {
  const color = useColorCycle();
  const { startTransition } = useTransition();

  return (
    <section className="w-full h-full flex flex-col items-center justify-center">
      <RiveWrapper
        src="animations/logo.riv"
        autoplay={true}
        playOnView={false}
        containerClassName="w-full h-[400px] sm:h-[500px]"
      />

      <div className="w-full flex flex-col justify-center items-center gap-5 mb-[123px]">
        <p className="text-xl font-bold leading-[175%]">
          create something great
        </p>

        <Button
          className="hidden sm:flex ml-4 gap-2 text-xs font-black"
          variant="primary"
          bgColor={color}
          onClick={() => {
            startTransition("/contact-us");
          }}
        >
          Contact us
          <Image src={arrowRightIcon} alt="arrow" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
