"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import airbnb from "../../../public/airbnb-logo.svg";
import google from "../../../public/google-logo.svg";
import apple from "../../../public/apple-logo.svg";
import meta from "../../../public/meta-logo.svg";
import amazon from "../../../public/amazon-logo.svg";
import instagram from "../../../public/instagram-logo.svg";
import Braun from "../../../public/Braun-logo.svg";
import king from "../../../public/king-logo.svg";
import samsung from "../../../public/samsung-logo.svg";
import Carousel from "@/components/ui/carousel";
import { Spacer } from "@/components/layout/spacer";
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
  return (
    <section className="w-full flex flex-col items-start justify-center gap-11 overflow-x-hidden">
      <Spacer horizontal>
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
      </Spacer>

      <div className="w-full opacity-30">
        <Carousel
          speed={0.5}
          gap={60}
          className="w-full"
          itemClassName="min-w-[73px]"
        >
          {images.map((item, index) => (
            <Image
              key={index}
              src={item.src}
              alt="brand logo"
              width={item.width}
              height={item.height}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default TeamBehind;
