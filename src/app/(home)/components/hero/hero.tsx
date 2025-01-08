"use client";
import RiveWrapper from "@/components/rive-wrapper";

const Hero = () => {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center">
      <RiveWrapper
        src="animations/logo.riv"
        autoplay={true}
        playOnView={false}
        containerClassName="w-full h-[500px] sm:h-[80vh]"
      />
    </section>
  );
};

export default Hero;
