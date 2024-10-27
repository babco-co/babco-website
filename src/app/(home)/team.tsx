"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Button from "@/components/ui/button";
import { Spacer } from "@/components/layout/spacer";
import BabcoLogo from "./hero/babco-logo";
import member1 from "../../../public/member-1.webp";
import member2 from "../../../public/member-2.webp";
import member3 from "../../../public/member-3.webp";
import member4 from "../../../public/member-4.webp";
import member5 from "../../../public/member-5.webp";
import member6 from "../../../public/member-6.webp";
import member7 from "../../../public/member-7.webp";
import member8 from "../../../public/member-8.webp";
import member9 from "../../../public/member-9.webp";
import member10 from "../../../public/member-10.webp";
import member11 from "../../../public/member-11.webp";
import member12 from "../../../public/member-12.webp";
import member13 from "../../../public/member-13.webp";
import { YScrollVariants } from "@/lib/utils/animations";
import { useTransition } from "@/components/ui/page-transition";

const members = [
  { src: member1, className: "w-[435px] h-[401px]" },
  { src: member2, className: "w-[304px] h-[256px]" },
  { src: member7, className: "w-[205px] h-[223px]" },
  { src: member5, className: "w-[222px] h-[255px]" },
  { src: member13, className: "w-[269px] h-[196px]" },
  { src: member10, className: "w-[119px] h-[124px]" },
  { src: member11, className: "w-[232px] h-[232px]" },

  { src: member3, className: "w-[227px] h-[227px]" },
  { src: member6, className: "w-[246px] h-[271px]" },
  { src: member4, className: "w-[154px] h-[196px]" },
  { src: member9, className: "w-[325px] h-[325px]" },
  { src: member8, className: "w-[179px] h-[179px]" },
  { src: member12, className: "w-[370px] h-[362px]" },
];

const Team = () => {
  const { startTransition } = useTransition();

  const [emblaRef1] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: false,
    },
    [
      AutoScroll({
        playOnInit: true,
        speed: 0.5,
        stopOnInteraction: false,
        stopOnFocusIn: false,
      }),
    ]
  );

  const [emblaRef2] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: false,
    },
    [
      AutoScroll({
        playOnInit: true,
        speed: 0.5,
        stopOnInteraction: false,
        stopOnFocusIn: false,
      }),
    ]
  );

  return (
    <section className="w-full flex flex-col items-center justify-center overflow-x-hidden pt-[100px] border-t border-white/10">
      <Spacer horizontal className="w-full">
        <motion.div
          className="w-full flex flex-col items-start gap-5"
          initial="hidden"
          whileInView="visible"
          variants={YScrollVariants}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="max-w-[329px] lg:max-w-full text-[32px] lg:text-[100px] font-extralight text-primary-white leading-[100%]">
            Create something intentionally great with us
          </p>

          <Button
            className="w-[176px] h-[68px] gap-2 text-lg"
            variant="primary"
            onClick={() => startTransition("/contact-us")}
          >
            Talk to us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="24"
              viewBox="0 0 23 24"
              fill="none"
            >
              <path
                d="M1.5 10.5L-1.31134e-07 10.5L1.31134e-07 13.5L1.5 13.5L1.5 10.5ZM22.5607 13.0607C23.1464 12.4749 23.1464 11.5251 22.5607 10.9393L13.0147 1.3934C12.4289 0.807611 11.4792 0.807611 10.8934 1.3934C10.3076 1.97918 10.3076 2.92893 10.8934 3.51472L19.3787 12L10.8934 20.4853C10.3076 21.0711 10.3076 22.0208 10.8934 22.6066C11.4792 23.1924 12.4289 23.1924 13.0147 22.6066L22.5607 13.0607ZM1.5 13.5L21.5 13.5L21.5 10.5L1.5 10.5L1.5 13.5Z"
                fill="#000"
              />
            </svg>
          </Button>
        </motion.div>
      </Spacer>

      <div className="w-full flex flex-col items-center justify-center relative mt-[126px] mb-[-100px]">
        <div className="w-full overflow-hidden" ref={emblaRef1}>
          <div className="flex">
            {members.slice(0, 7).map((item, index) => (
              <div
                key={index}
                className="flex-[0_0_auto] pr-[68px] first:pt-[100px] even:mt-10"
              >
                <Image className={item.className} src={item.src} alt="member" />
              </div>
            ))}
          </div>
        </div>

        <div
          className="w-full overflow-hidden mt-[-150px] pl-[500px]"
          ref={emblaRef2}
        >
          <div className="flex">
            {members.slice(7, members.length).map((item, index) => (
              <div key={index} className="flex-[0_0_auto] pr-[68px] odd:mt-10">
                <Image className={item.className} src={item.src} alt="member" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-fit flex items-end justify-center z-10">
        <BabcoLogo fill={"#fff"} />
      </div>
    </section>
  );
};

export default Team;
