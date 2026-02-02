"use client";

import { motion } from "motion/react";
import Image from "next/image";
import ContactForm from "@/app/contact-us/_components/form";
import { pageVariants } from "@/lib/utils/animations";
import { Spacer } from "@/components/spacer";
import Header from "@/components/header/header";
import arrowBlackIcon from "@/../public/icons/arrow-black-icon.svg";

export default function ContactUsPage() {
  return (
    <Spacer className="mb-10 font-helvetica">
      <Spacer className="w-full mt-5 px-5">
        <Header />
      </Spacer>

      <motion.div
        className="w-full flex shrink-0 flex-col items-start justify-center 
          gap-10 sm:gap-[76px] p-10 mt-[208px]"
        variants={pageVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
      >
        <div className="w-full sm:max-w-[316px] flex items-center justify-start group">
          <p className="text-3xl sm:text-[42px] font-extralight leading-[100%] text-text-primary-light dark:text-text-primary-dark">
            Build something iconic with us
          </p>
          <Image
            src={arrowBlackIcon}
            alt="arrow"
            className="hidden sm:block w-[22px] h-auto rotate-90 translate-y-6 -translate-x-8 invert-0 dark:invert"
          />
        </div>

        <ContactForm />
      </motion.div>
    </Spacer>
  );
}
