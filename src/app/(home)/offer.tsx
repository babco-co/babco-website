"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import arrow from "../../../public/arrow-right-circle.svg";
import { YScrollVariants } from "@/lib/utils/animations";

const Offer = () => {
  return (
    <section className="w-full flex flex-col gap-10">
      <motion.p
        className="max-w-[263px] lg:max-w-[810px] 
      text-[32px] lg:text-[100px] font-extralight text-primary-white leading-[100%]"
        initial="hidden"
        whileInView="visible"
        variants={YScrollVariants}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        We offer design & development for:
      </motion.p>
      <Item title="Vertical SAAS" />
      <Item title="Dev Tools" />
      <Item title="Dev Infrastructure" />
      <Item title="AI Tools & Apps" />
      <Item title="Marketplaces" />
    </section>
  );
};

export default Offer;

const Item = ({ title }: { title: string }) => (
  <motion.div
    className="w-full flex flex-row items-center justify-between"
    initial="hidden"
    whileInView="visible"
    variants={YScrollVariants}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
  >
    <p className="text-2xl lg:text-[60px] font-extralight leading-normal lg:leading-[200%] text-medium-gray">
      {title}
    </p>

    <Image src={arrow} alt="arrow" className="w-[38px] h-[38px]" />
  </motion.div>
);
