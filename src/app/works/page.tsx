"use client";
import { motion } from "motion/react";
import Header from "@/components/header/header";
import { Spacer } from "@/components/spacer";
import Product from "../(home)/components/product/product";
import { YScrollVariants } from "@/lib/utils/animations";

export default function WorksPage() {
  return (
    <div className="w-full min-h-screen font-helvetica">
      <Spacer className="w-full  mt-5 px-5">
        <Header />
      </Spacer>

      <Spacer horizontal className="my-16 lg:mt-[120px] lg:mb-[100px]">
        <motion.div
          className="w-full flex flex-col lg:flex-row gap-8 lg:gap-10 items-center justify-between cursor-pointer"
          initial="hidden"
          whileInView="visible"
          variants={YScrollVariants}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
            <p className="max-w-[440px] text-[32px] lg:text-[80px] font-extralight leading-normal lg:leading-[100%] text-white hover:text-medium-gray">
              Our work
            </p>
          </div>

          <div className="w-full lg:w-2/3 flex flex-col items-start justify-center text-start gap-3 lg:gap-5 pt-0 lg:pt-10">
            <p className="text-base lg:text-xl font-extralight leading-[100%] text-white">
              OME COPY HERE. BABCO is a woman-led, global design firm. Our
              approach combines strategic thinking with world class execution.
              We embed seamlessly with your team, scaling our involvement based
              on your needs.
            </p>
            <p className="text-base lg:text-xl font-extralight leading-[100%] text-white">
              What sets us apart is our ability to blend high-caliber design
              with deep technical understanding. Our global team of designers
              and engineers go beyond beautiful interfaces—we craft compelling
              brand narratives and user experiences that capture technical
              audiences and drive real business outcomes.
            </p>
          </div>
        </motion.div>
      </Spacer>

      <Spacer horizontal vertical>
        <Product />
      </Spacer>
    </div>
  );
}
