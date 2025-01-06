"use client";
import Image from "next/image";
import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Button from "@/components/button";
import { Spacer } from "@/components/spacer";
import BabcoLogo from "@/components/babco-logo";
import { useTransition } from "@/components/page-transition";
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
import arrowBlackIcon from "../../../../public/icons/arrow-black-icon.svg";
import { YScrollVariants } from "@/lib/utils/animations";

const members = [
  { src: member1, className: "w-[260px] sm:w-[435px] h-[240px] sm:h-[401px]" },
  { src: member2, className: "w-[182px] sm:w-[304px] h-[153px] sm:h-[256px]" },
  { src: member7, className: "w-[123px] sm:w-[205px] h-[134px] sm:h-[223px]" },
  { src: member5, className: "w-[133px] sm:w-[222px] h-[153px] sm:h-[255px]" },
  { src: member13, className: "w-[161px] sm:w-[269px] h-[117px] sm:h-[196px]" },
  { src: member10, className: "w-[71px] sm:w-[119px] h-[74px] sm:h-[124px]" },
  { src: member11, className: "w-[139px] sm:w-[232px] h-[139px] sm:h-[232px]" },
  
  { src: member3, className: "w-[136px] sm:w-[227px] h-[136px] sm:h-[227px]" },
  { src: member6, className: "w-[147px] sm:w-[246px] h-[162px] sm:h-[271px]" },
  { src: member4, className: "w-[92px] sm:w-[154px] h-[117px] sm:h-[196px]" },
  { src: member9, className: "w-[195px] sm:w-[325px] h-[195px] sm:h-[325px]" },
  { src: member8, className: "w-[107px] sm:w-[179px] h-[107px] sm:h-[179px]" },
  { src: member12, className: "w-[222px] sm:w-[370px] h-[217px] sm:h-[362px]" },
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
    <section className="w-full flex flex-col relative">
      <div className="w-full flex-1 flex flex-col items-center justify-center overflow-x-hidden pt-[80px]">
        <Spacer
          horizontal
          className="w-full flex flex-col sm:flex-row gap-10 justify-between items-start"
        >
          <motion.div
            className="w-full flex flex-col items-start gap-5 lg:gap-16"
            initial="hidden"
            whileInView="visible"
            variants={YScrollVariants}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="max-w-[250px] lg:max-w-[470px] text-[32px] lg:text-[80px] font-extralight text-primary-white leading-[100%]">
              Build something iconic with us
            </p>

            <Button
              className="w-[178px] h-[56px] gap-2 text-base leading-[75%]"
              variant="primary"
              onClick={() => startTransition("/contact-us")}
            >
              <p className="text-base leading-[75%]">Contact Us</p>
              <Image
                className="w-6 h-6 -rotate-45"
                src={arrowBlackIcon}
                alt="arrow"
              />
            </Button>
          </motion.div>

          <div className="w-full flex justify-start sm:justify-end">
            <p className="text-sm font-light leading-[100%] text-white/30">
              ©2024 BABCO. All Rights Reserved.
            </p>
          </div>
        </Spacer>

        <div className="w-full flex flex-col items-center justify-center relative mt-[126px]">
          <div className="w-full overflow-hidden" ref={emblaRef1}>
            <div className="flex">
              {[...members.slice(0, 7), ...members.slice(0, 7)].map(
                (item, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_auto] pr-[20px] sm:pr-[68px] even:mt-20 [&:nth-child(6)]:pt-32"
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

          <div
            className="w-full overflow-hidden mt-4 2xl:mt-16"
            ref={emblaRef2}
          >
            <div className="flex">
              {[
                ...members.slice(7, members.length),
                ...members.slice(7, members.length),
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_auto] pr-[20px] sm:pr-[68px] odd:mt-20"
                >
                  <Image
                    className={item.className}
                    src={item.src}
                    alt="member"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full absolute bottom-0 z-10">
        <BabcoLogo fill={"#fff"} />
      </div>
    </section>
  );
};

export default Team;
