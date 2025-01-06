"use client";
import Image from "next/image";
import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import airbnb from "../../../../public/images/team-behind/airbnb-logo.svg";
import google from "../../../../public/images/team-behind/google-logo.svg";
import apple from "../../../../public/images/team-behind/apple-logo.svg";
import meta from "../../../../public/images/team-behind/meta-logo.svg";
import amazon from "../../../../public/images/team-behind/amazon-logo.svg";
import instagram from "../../../../public/images/team-behind/instagram-logo.svg";
import Braun from "../../../../public/images/team-behind/Braun-logo.svg";
import king from "../../../../public/images/team-behind/king-logo.svg";
import samsung from "../../../../public/images/team-behind/samsung-logo.svg";
import line from "../../../../public/images/line.svg";
import { containerVariants, YScrollVariants } from "@/lib/utils/animations";

const images = [
  {
    src: airbnb,
    mobileWidth: 31,
    mobileHeight: 33,
    desktopWidth: 51,
    desktopHeight: 54,
  },
  {
    src: google,
    mobileWidth: 33,
    mobileHeight: 33,
    desktopWidth: 54,
    desktopHeight: 54,
  },
  {
    src: apple,
    mobileWidth: 33,
    mobileHeight: 33,
    desktopWidth: 54,
    desktopHeight: 54,
  },
  {
    src: meta,
    mobileWidth: 54,
    mobileHeight: 36,
    desktopWidth: 81,
    desktopHeight: 54,
  },
  {
    src: amazon,
    mobileWidth: 39,
    mobileHeight: 36,
    desktopWidth: 59,
    desktopHeight: 54,
  },
  {
    src: instagram,
    mobileWidth: 36,
    mobileHeight: 36,
    desktopWidth: 54,
    desktopHeight: 54,
  },
  {
    src: Braun,
    mobileWidth: 85,
    mobileHeight: 36,
    desktopWidth: 128,
    desktopHeight: 54,
  },
  {
    src: king,
    mobileWidth: 53,
    mobileHeight: 36,
    desktopWidth: 80,
    desktopHeight: 54,
  },
  {
    src: samsung,
    mobileWidth: 135,
    mobileHeight: 36,
    desktopWidth: 203,
    desktopHeight: 54,
  },
];

const TeamBehind = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: false,
      watchDrag: false,
    },
    [
      AutoScroll({
        playOnInit: true,
        speed: 1,
        stopOnInteraction: false,
        stopOnFocusIn: false,
      }),
    ]
  );

  return (
    <section className="w-full flex flex-col overflow-x-hidden">
      <motion.div
        className="w-full flex flex-row items-center justify-start"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <motion.p
          className="min-w-[127px] sm:min-w-[158px] text-lg sm:text-2xl font-extralight leading-tight sm:leading-tight"
          variants={YScrollVariants}
        >
          From the
          <br /> team behind
        </motion.p>

        <Image src={line} alt="line" />

        <motion.div variants={YScrollVariants} className="flex-1">
          <div className="w-full opacity-30">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {[...images, ...images, ...images].map((item, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_auto] pr-6 lg:pr-[60px] flex items-center"
                  >
                    <div className="relative">
                      <Image
                        src={item.src}
                        alt="brand logo"
                        className="block lg:hidden"
                        width={item.mobileWidth}
                        height={item.mobileHeight}
                        sizes="(min-width: 1024px) 100vw, 66vw"
                      />
                      <Image
                        src={item.src}
                        alt="brand logo"
                        className="hidden lg:block"
                        width={item.desktopWidth}
                        height={item.desktopHeight}
                        sizes="100vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TeamBehind;
