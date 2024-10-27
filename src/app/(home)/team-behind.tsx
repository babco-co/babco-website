"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import airbnb from "../../../public/airbnb-logo.svg";
import google from "../../../public/google-logo.svg";
import apple from "../../../public/apple-logo.svg";
import meta from "../../../public/meta-logo.svg";
import amazon from "../../../public/amazon-logo.svg";
import instagram from "../../../public/instagram-logo.svg";
import Braun from "../../../public/Braun-logo.svg";
import king from "../../../public/king-logo.svg";
import samsung from "../../../public/samsung-logo.svg";
import { YScrollVariants } from "@/lib/utils/animations";

const images = [
  { src: airbnb, width: 51, height: 54 },
  { src: google, width: 54, height: 54 },
  { src: apple, width: 54, height: 54 },
  { src: meta, width: 81, height: 54 },
  { src: amazon, width: 59, height: 54 },
  { src: instagram, width: 54, height: 54 },
  { src: Braun, width: 128, height: 54 },
  { src: king, width: 80, height: 54 },
  { src: samsung, width: 203, height: 54 },
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
    <section className="w-full flex flex-col items-start justify-center gap-20 overflow-x-hidden">
      <motion.p
        className="text-[26px] lg:text-[66px] font-bold text-[#333333] leading-[100%] uppercase"
        initial="hidden"
        whileInView="visible"
        variants={YScrollVariants}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        From the team behind
      </motion.p>

      <div className="w-full opacity-30">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {[...images, ...images, ...images].map((item, index) => (
              <div key={index} className="flex-[0_0_auto] pr-[60px]">
                <Image
                  src={item.src}
                  alt="brand logo"
                  width={item.width}
                  height={item.height}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamBehind;
