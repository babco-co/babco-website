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
import member14 from "../../../../public/images/members/member-14.webp";
import arrowBlackIcon from "../../../../public/icons/arrow-black-icon.svg";
import { YScrollVariants } from "@/lib/utils/animations";

const members = [
  { src: member1, className: "w-[200px] sm:w-[335px] h-[180px] sm:h-[301px]" },
  { src: member2, className: "w-[140px] sm:w-[234px] h-[120px] sm:h-[196px]" },
  { src: member7, className: "w-[95px] sm:w-[155px] h-[104px] sm:h-[173px]" },
  { src: member5, className: "w-[103px] sm:w-[155px] h-[120px] sm:h-[173px]" },
  { src: member13, className: "w-[125px] sm:w-[209px] h-[90px] sm:h-[146px]" },
  { src: member10, className: "w-[55px] sm:w-[89px] h-[57px] sm:h-[94px]" },
  { src: member11, className: "w-[107px] sm:w-[182px] h-[107px] sm:h-[182px]" },

  { src: member3, className: "w-[105px] sm:w-[177px] h-[105px] sm:h-[177px]" },
  { src: member6, className: "w-[113px] sm:w-[186px] h-[125px] sm:h-[211px]" },
  { src: member4, className: "w-[71px] sm:w-[124px] h-[90px] sm:h-[146px]" },
  { src: member9, className: "w-[150px] sm:w-[255px] h-[150px] sm:h-[255px]" },
  { src: member8, className: "w-[82px] sm:w-[139px] h-[82px] sm:h-[139px]" },
  { src: member12, className: "w-[170px] sm:w-[290px] h-[167px] sm:h-[282px]" },
  { src: member14, className: "w-[105px] sm:w-[180px] h-[102px] sm:h-[176px]" },
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
        <Spacer horizontal className="w-full flex justify-between items-start">
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
              variant="changing"
              onClick={() => startTransition("/contact-us")}
            >
              <p className="pt-1 text-base leading-[75%]">Contact Us</p>
              <Image
                className="w-6 h-6 -rotate-45"
                src={arrowBlackIcon}
                alt="arrow"
              />
            </Button>
          </motion.div>
        </Spacer>

        <div className="w-full flex flex-col items-center justify-center gap-2 relative mt-[126px]">
          <div className="w-full overflow-hidden" ref={emblaRef1}>
            <div className="flex">
              {[...members.slice(0, 7), ...members.slice(0, 7)].map(
                (item, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_auto] pr-[12px] sm:pr-[40px] even:self-end"
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
            className="w-full overflow-hidden mt-3 2xl:mt-12"
            ref={emblaRef2}
          >
            <div className="flex">
              {[
                ...members.slice(7, members.length),
                ...members.slice(7, members.length),
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_auto] pr-[12px] sm:pr-[40px] odd:mt-12"
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
