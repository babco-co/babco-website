"use client";
import { motion } from "motion/react";
import ContactForm from "./components/form";
import { pageVariants } from "@/lib/utils/animations";
import { Spacer } from "@/components/spacer";
import Header from "@/components/header";

export default function ContactUsPage() {
  return (
    <Spacer className="mb-10 font-helvetica">
      <Spacer className="w-full  mt-5 px-5">
        <Header />
      </Spacer>

      <motion.div
        className="w-full flex flex-shrink-0 flex-col items-start justify-center 
          gap-10 sm:gap-[76px] p-10"
        variants={pageVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
      >
        <div className="w-full flex gap-4 items-center justify-start">
          <p className="text-3xl sm:text-[100px] font-extralight leading-[100%] text-primary-white">
            Create something intentionally great with us
          </p>
        </div>
        <ContactForm />
      </motion.div>
    </Spacer>
  );
}
