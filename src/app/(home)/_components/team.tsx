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
import mariana from "@/../public/images/members/mariana.webp";
import andrea from "@/../public/images/members/andrea.webp";
import mahshid from "@/../public/images/members/mahshid.webp";
import mahlet from "@/../public/images/members/mahlet.webp";
import daria from "@/../public/images/members/daria.webp";
import mahsa from "@/../public/images/members/mahsa.webp";
import lena from "@/../public/images/members/lena.webp";
import lucia from "@/../public/images/members/lucia.webp";
import chelsey from "@/../public/images/members/chelsey.webp";
import tyra from "@/../public/images/members/tyra.webp";
import paula from "@/../public/images/members/paula.webp";
import naomi from "@/../public/images/members/naomi.webp";
import guillem from "@/../public/images/members/guillem.webp";
import alice from "@/../public/images/members/alice.webp";
import { containerVariants, YScrollVariants } from "@/lib/utils/animations";
import { ThemeSelector } from "@/components/theme/theme-selector";

const members = [
  { src: mia, className: "w-[132px] sm:w-[264px] h-[112px] sm:h-[224px]" },
  { src: mariana, className: "w-[90px] sm:w-[180px] h-[101px] sm:h-[202px]" },
  { src: mahshid, className: "w-[115px] sm:w-[230px] h-[115px] sm:h-[230px]" },
  { src: daria, className: "w-[135px] sm:w-[270px] h-[135px] sm:h-[270px]" },
  { src: lucia, className: "w-[130px] sm:w-[260px] h-[155px] sm:h-[310px]" },
  { src: chelsey, className: "w-[80px] sm:w-[160px] h-[80px] sm:h-[160px]" },
  { src: lena, className: "w-[103px] sm:w-[206px] h-[103px] sm:h-[206px]" },
  { src: tyra, className: "w-[128px] sm:w-[255px] h-[128px] sm:h-[255px]" },

  { src: olivia, className: "w-[191px] sm:w-[382px] h-[176px] sm:h-[352px]" },
  { src: andrea, className: "w-[100px] sm:w-[200px] h-[100px] sm:h-[200px]" },
  { src: alice, className: "w-[108px] sm:w-[216px] h-[119px] sm:h-[238px]" },
  { src: mahlet, className: "w-[80px] sm:w-[160px] h-[83px] sm:h-[166px]" },
  { src: mahsa, className: "w-[80px] sm:w-[160px] h-[83px] sm:h-[166px]" },
  { src: paula, className: "w-[110px] sm:w-[220px] h-[110px] sm:h-[220px]" },
  { src: naomi, className: "w-[135px] sm:w-[270px] h-[130px] sm:h-[260px]" },
  { src: guillem, className: "w-[100px] sm:w-[200px] h-[106px] sm:h-[212px]" },
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
            {[...members.slice(0, 8), ...members.slice(0, 8)].map(
              (item, index) => (
                <div
                  key={index}
                  className={`cursor-scale pr-3 sm:pr-10 ${index % 2 === 1 ? "" : "mt-12"}`}
                >
                  <Image
                    className={item.className}
                    src={item.src}
                    alt="member"
                  />
                </div>
              ),
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
              ...members.slice(8, members.length),
              ...members.slice(8, members.length),
            ].map((item, index) => (
              <div
                key={index}
                className={`cursor-scale pr-3 sm:pr-10 ${index % 2 === 0 ? "" : "mt-12"}`}
              >
                <Image className={item.className} src={item.src} alt="member" />
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
