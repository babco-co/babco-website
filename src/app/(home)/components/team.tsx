"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Button from "@/components/button";
import { Spacer } from "@/components/spacer";
import BabcoLogo from "./hero/babco-logo";
import member1 from "../../../../public/images/members/member-1.webp";
import member2 from "../../../../public/images/members/member-2.webp";
import member3 from "../../../../public/images/members/member-3.webp";
import member4 from "../../../../public/images/members/member-4.webp";
import member5 from "../../../../public/images/members/member-5.webp";
import member6 from "../../../../public/images/members/member-6.webp";
import member7 from "../../../../public/images/members/member-7.webp";
import member8 from "../../../../public/images/members/member-8.webp";
import member9 from "../../../../public/images/members/member-9.webp";
import member10 from "../../../../public/images/members/member-10.webp";
import member11 from "../../../../public/images/members/member-11.webp";
import member12 from "../../../../public/images/members/member-12.webp";
import member13 from "../../../../public/images/members/member-13.webp";
import { YScrollVariants } from "@/lib/utils/animations";
import { useTransition } from "@/components/page-transition";

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
      watchDrag: false,
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
      watchDrag: false,
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
    <section
      className="w-full flex flex-col items-center justify-center 
      overflow-x-hidden pt-[100px] relative"
    >
      <Spacer horizontal className="w-full">
        <motion.div
          className="w-full flex flex-col items-start gap-5 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          variants={YScrollVariants}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="max-w-[329px] lg:max-w-[470px] text-[32px] lg:text-[80px] font-extralight text-primary-white leading-[100%]">
            Create something intentionally great with us
          </p>

          <Button
            className="w-[156px] h-[56px] gap-2 text-base font-medium"
            variant="primary"
            onClick={() => startTransition("/contact-us")}
          >
            Let&apos;s talk
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <rect width="32" height="32" fill="#FF4365" />
              <path
                d="M8.75098 23.248L21.7773 10.2217"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.7806 22.9499L21.7806 10.222L9.05265 10.222"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
        </motion.div>
      </Spacer>

      <div className="w-full flex flex-col items-center justify-center relative mt-[126px]">
        <div className="w-full overflow-hidden" ref={emblaRef1}>
          <div className="flex">
            {[...members.slice(0, 7), ...members.slice(0, 7)].map(
              (item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_auto] pr-[68px] even:mt-20 [&:nth-child(6)]:pt-32"
                >
                  <Image
                    className={item.className}
                    src={item.src}
                    alt="member"
                  />
                </div>
              )
            )}
          </div>
        </div>

        <div className="w-full overflow-hidden mt-4 2xl:mt-16" ref={emblaRef2}>
          <div className="flex">
            {[
              ...members.slice(7, members.length),
              ...members.slice(7, members.length),
            ].map((item, index) => (
              <div key={index} className="flex-[0_0_auto] pr-[68px] odd:mt-20">
                <Image className={item.className} src={item.src} alt="member" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-fit absolute bottom-0 z-10">
        <BabcoLogo fill={"#fff"} />
      </div>
    </section>
  );
};

export default Team;
