"use client";
import Image from "next/image";
import { motion } from "motion/react";
import Button from "@/components/button";
import { Spacer } from "@/components/spacer";
import BabcoLogo from "@/components/svg/babco-logo";
import { useTransitionClick } from "@/lib/hooks/use-transition-click";
import Carousel from "@/components/carousel/carousel";
import olivia from "@/../public/images/members/olivia.webp";
import mia from "@/../public/images/members/mia.webp";
import andrea from "@/../public/images/members/andrea.webp";
import mahshid from "@/../public/images/members/mahshid.webp";
import mahlet from "@/../public/images/members/mahlet.webp";
import daria from "@/../public/images/members/daria.webp";
import mahsa from "@/../public/images/members/mahsa.webp";
import lena from "@/../public/images/members/lena.webp";
import lucia from "@/../public/images/members/lucia.webp";
import tyra from "@/../public/images/members/tyra.webp";
import paula from "@/../public/images/members/paula.webp";
import naomi from "@/../public/images/members/naomi.webp";
import guillem from "@/../public/images/members/guillem.webp";
import { containerVariants, YScrollVariants } from "@/lib/utils/animations";
import { ThemeSelector } from "@/components/theme/theme-selector";

const members = [
  { src: olivia, className: "w-[200px] sm:w-[335px] h-[180px] sm:h-[301px]" },
  { src: mia, className: "w-[140px] sm:w-[234px] h-[120px] sm:h-[196px]" },
  { src: mahshid, className: "w-[113px] sm:w-[165px] h-[120px] sm:h-[173px]" },
  { src: daria, className: "w-[125px] sm:w-[219px] h-[125px] sm:h-[219px]" },
  { src: lena, className: "w-[107px] sm:w-[207px] h-[107px] sm:h-[207px]" },
  { src: naomi, className: "w-[105px] sm:w-[197px] h-[102px] sm:h-[203px]" },

  { src: andrea, className: "w-[105px] sm:w-[177px] h-[105px] sm:h-[177px]" },
  { src: tyra, className: "w-[150px] sm:w-[165px] h-[130px] sm:h-[165px]" },
  { src: guillem, className: "w-[130px] sm:w-[200px] h-[130px] sm:h-[212px]" },
  { src: mahlet, className: "w-[70px] sm:w-[160px] h-[76px] sm:h-[166px]" },
  { src: mahsa, className: "w-[80px] sm:w-[160px] h-[86px] sm:h-[166px]" },
  { src: lucia, className: "w-[170px] sm:w-[203px] h-[167px] sm:h-[212px]" },
  { src: paula, className: "w-[150px] sm:w-[220px] h-[150px] sm:h-[220px]" },
];

const Team = () => {
  const handleContactClick = useTransitionClick("/contact-us");

  return (
    <section className="w-full flex flex-col relative">
      <div className="w-full flex-1 flex flex-col items-center justify-center overflow-x-hidden pt-[80px]">
        <Spacer
          horizontal
          className="w-full flex flex-col lg:flex-row justify-between items-start gap-10"
        >
          <motion.div
            className="w-full flex flex-col items-start gap-10 lg:gap-16"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            <motion.p
              className="cursor-scale max-w-[250px] lg:max-w-[470px] text-[32px] lg:text-[80px] font-extralight text-text-primary-light dark:text-text-primary-dark leading-[100%]"
              variants={YScrollVariants}
              transition={{ duration: 0.4 }}
            >
              Build something iconic with us
            </motion.p>

            <motion.div
              variants={YScrollVariants}
              transition={{ duration: 0.4 }}
            >
              <Button
                className="w-[178px] h-[56px] gap-2 text-base leading-[75%]"
                variant="changing"
                onClick={handleContactClick}
              >
                <p className="pt-1 text-base leading-[75%]">Contact Us</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="17"
                  viewBox="0 0 19 17"
                  fill="none"
                >
                  <path
                    d="M18.4676 3.11683C18.5318 2.56829 18.1392 2.07157 17.5906 2.00739L8.65161 0.961401C8.10307 0.897214 7.60636 1.28986 7.54217 1.8384C7.47798 2.38695 7.87063 2.88366 8.41917 2.94785L16.365 3.87761L15.4352 11.8234C15.371 12.3719 15.7637 12.8687 16.3122 12.9328C16.8607 12.997 17.3575 12.6044 17.4216 12.0558L18.4676 3.11683ZM1.62013 16.8079L18.0945 3.78511L16.8543 2.21611L0.379865 15.2389L1.62013 16.8079Z"
                    className="fill-white dark:fill-black"
                  />
                </svg>
              </Button>
            </motion.div>
          </motion.div>

          <ThemeSelector />
        </Spacer>

        <div className="w-full flex flex-col items-center justify-center gap-2 relative mt-[126px]">
          <Carousel
            showArrows={false}
            gap="gap-0"
            align="start"
            itemsAlign="items-start"
            autoScroll={true}
            autoScrollSpeed={0.5}
            className="w-full"
          >
            {[...members.slice(0, 7), ...members.slice(0, 7)].map(
              (item, index) => (
                <div
                  key={index}
                  className={`cursor-scale pr-3 sm:pr-10 ${index % 2 === 1 ? "mt-12" : ""}`}
                >
                  <Image
                    className={item.className}
                    src={item.src}
                    alt="member"
                  />
                </div>
              )
            )}
          </Carousel>

          <Carousel
            showArrows={false}
            gap="gap-0"
            align="start"
            itemsAlign="items-start"
            autoScroll={true}
            autoScrollSpeed={0.5}
            className="w-full mt-3 2xl:mt-12"
          >
            {[
              ...members.slice(7, members.length),
              ...members.slice(7, members.length),
            ].map((item, index) => (
              <div
                key={index}
                className={`cursor-scale pr-3 sm:pr-10 ${index % 2 === 0 ? "mt-12" : ""}`}
              >
                <Image
                  className={item.className}
                  src={item.src}
                  alt="member"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="w-full absolute bottom-0 z-10">
        <BabcoLogo useGradient={true} />
      </div>
    </section>
  );
};

export default Team;