"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import arrowWhiteIcon from "../../../../public/icons/arrow-white-icon.svg";
import { YScrollVariants } from "@/lib/utils/animations";

const Offer = () => {
  const router = useRouter();

  const handleItemClick = () => {
    router.push("/contact-us");
  };

  return (
    <section className="w-full flex flex-col gap-[114px]">
      <Item
        title="We build iconic UI + brands"
        tag="About us"
        descFirst="BABCO is a woman-led, global design firm. Our approach combines strategic thinking with world class execution. We embed seamlessly with your team, scaling our involvement based on your needs."
        descSec="What sets us apart is our ability to blend high-caliber design with deep technical understanding. Our global team of designers and engineers go beyond beautiful interfaces—we craft compelling brand narratives and user experiences that capture technical audiences and drive real business outcomes."
        descThird="At BABCO, we're more than a design firm. We're your partners in building something extraordinary, bringing the creativity, technical excellence, and strategic insight needed to transform your vision into reality."
        onItemClick={handleItemClick}
      />
      <Item
        title="Fully embedded"
        tag="Our Philosophy"
        descFirst="Born in Silicon Valley's top product teams at Airbnb, Google, Meta, and Apple, we're not your typical design agency. "
        descSec="We embed world-class designers directly into your team—no endless email chains or rigid contracts. "
        descThird="We show up to standups, work alongside your engineers, and deliver exactly the design talent you need, when you need it."
        onItemClick={handleItemClick}
      />
    </section>
  );
};

export default Offer;

const Item = ({
  title,
  tag,
  descFirst,
  descSec,
  descThird,
  onItemClick,
}: {
  title: string;
  tag: string;
  descFirst: string;
  descSec: string;
  descThird: string;
  onItemClick?: () => void;
}) => (
  <motion.div
    className="w-full flex flex-col lg:flex-row gap-8 lg:gap-10 items-center justify-between cursor-pointer"
    initial="hidden"
    whileInView="visible"
    variants={YScrollVariants}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    onClick={onItemClick}
  >
    <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
      <Image src={arrowWhiteIcon} alt="arrow" className="mb-2" />

      <p className="text-base font-extralight leading-[120%] text-dark-gray mb-5">
        {tag}
      </p>

      <p className="max-w-[440px] text-3xl lg:text-[88px] font-extralight leading-normal lg:leading-[100%] text-white hover:text-medium-gray">
        {title}
      </p>
    </div>

    <div className="w-full lg:w-2/3 flex flex-col items-start justify-center text-start gap-3 lg:gap-5 pt-0 lg:pt-10">
      <p className="text-base lg:text-xl font-extralight leading-[100%] text-white">
        {descFirst}
      </p>
      <p className="text-base lg:text-xl font-extralight leading-[100%] text-white">
        {descSec}
      </p>
      <p className="text-base lg:text-xl font-extralight leading-[100%] text-white">
        {descThird}
      </p>
    </div>
  </motion.div>
);
