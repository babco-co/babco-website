"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactForm from "./form";
import { pageVariants } from "@/lib/utils/animations";
import lineMobile from "../../../public/line-mobile.svg";

export default function ContactPage() {
  return (
    <div className="flex items-center justify-center p-12">
      <motion.div
        className="w-full max-w-[691px] flex flex-col items-center justify-center 
          gap-10 p-10 rounded-md relative border border-gray-500"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="w-full">
          <div className="flex gap-4 items-center justify-start">
            <p className="text-lg lg:text-[56px] font-extralight leading-[200%] text-primary-white">
              Contact Us
            </p>
            <Image className="" src={lineMobile} alt="line" />
          </div>
        </div>
        <ContactForm />
      </motion.div>
    </div>
  );
}
