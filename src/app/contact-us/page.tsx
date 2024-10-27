"use client";
import { motion } from "framer-motion";
import ContactForm from "./form";
import { pageVariants } from "@/lib/utils/animations";
import { Spacer } from "@/components/layout/spacer";

export default function Page() {
  return (
    <div className="w-full flex items-center justify-center">
      <Spacer horizontal className="mb-10">
        <motion.div
          className="w-full lg:w-[492px] flex flex-shrink-0 flex-col items-center justify-center 
          gap-10 p-10"
          variants={pageVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
        >
          <div className="flex gap-4 items-center justify-center">
            <p className="text-lg sm:text-[56px] font-extralight leading-[200%] text-primary-white">
              Contact Us
            </p>
          </div>
          <ContactForm />
        </motion.div>
      </Spacer>
    </div>
  );
}
