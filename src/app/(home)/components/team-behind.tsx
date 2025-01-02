"use client";
import Image from "next/image";
import { motion } from "framer-motion";
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
    <section className="w-full flex flex-col items-center justify-center gap-2 overflow-x-hidden">
      <div className="w-full h-[74px] flex justify-center items-center">
        <motion.p
          className="text-xl font-bold text-white/30 leading-[100%] uppercase"
          initial="hidden"
          whileInView="visible"
          variants={YScrollVariants}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          From the team behind
        </motion.p>
      </div>

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
