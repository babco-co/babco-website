"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import arrowWhiteIcon from "../../../../public/icons/arrow-white-icon.svg";
import arrowPinkSquareIcon from "../../../../public/icons/arrow-pink-square.svg";
import { YScrollVariants } from "@/lib/utils/animations";

const Offer = () => {
  const router = useRouter();

  const handleItemClick = () => {
    router.push("/contact-us");
  };

  return (
    <section className="w-full flex flex-col gap-4 lg:gap-8">
      <RegularItem
        title="We build iconic UI + brands"
        tag="About us"
        descFirst="BABCO is a woman-led, global design firm. Our approach combines strategic thinking with world class execution. We embed seamlessly with your team, scaling our involvement based on your needs."
        descSec="What sets us apart is our ability to blend high-caliber design with deep technical understanding. Our global team of designers and engineers go beyond beautiful interfaces—we craft compelling brand narratives and user experiences that capture technical audiences and drive real business outcomes."
        descThird="At BABCO, we're more than a design firm. We're your partners in building something extraordinary, bringing the creativity, technical excellence, and strategic insight needed to transform your vision into reality."
        onItemClick={handleItemClick}
      />
      <RegularItem
        title="Fully embedded"
        tag="Our Philosophy"
        descFirst="Born in Silicon Valley's top product teams at Airbnb, Google, Meta, and Apple, we're not your typical design agency."
        descSec="We embed world-class designers directly into your team—no endless email chains or rigid contracts."
        descThird="We show up to standups, work alongside your engineers, and deliver exactly the design talent you need, when you need it."
        onItemClick={handleItemClick}
      />
      <WorkWithUsItem
        title="Work with us"
        tag="Our Services"
        descFirst="Branding"
        descSec="Product Design"
        descThird="Engineering"
        onItemClick={handleItemClick}
      />
    </section>
  );
};

export default Offer;

const RegularItem = ({
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
    className="w-full flex flex-col lg:flex-row gap-10 items-center justify-between py-8 lg:py-[91px] cursor-pointer"
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

      <p className="max-w-[440px] text-[32px] lg:text-[88px] font-extralight leading-normal lg:leading-[100%] text-white hover:text-primary-pink">
        {title}
      </p>
    </div>

    <div className="w-full lg:w-2/3 flex flex-col items-start justify-center text-start gap-3 lg:gap-5">
      <p className="text-base lg:text-xl font-extralight leading-[100%] text-light-gray">
        {descFirst}
      </p>
      <p className="text-base lg:text-xl font-extralight leading-[100%] text-light-gray">
        {descSec}
      </p>
      <p className="text-base lg:text-xl font-extralight leading-[100%] text-light-gray">
        {descThird}
      </p>
    </div>
  </motion.div>
);

const WorkWithUsItem = ({
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
    className="w-full flex flex-col lg:flex-row gap-8 lg:gap-10 items-center justify-between py-8 lg:py-[91px] cursor-pointer"
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

      <p className="max-w-[440px] text-[32px] lg:text-[88px] font-extralight leading-normal lg:leading-[100%] text-white hover:text-primary-pink">
        {title}
      </p>
    </div>

    <div className="w-full lg:w-2/3 flex flex-col items-start justify-center text-start gap-8">
      <div className="w-full flex flex-row items-center justify-between pb-2 border-b-[0.5px] border-white/30">
        <p className="text-2xl lg:text-[42px] font-extralight leading-[200%] text-medium-gray">
          {descFirst}
        </p>
        <Image
          className="w-10 h-10 sm:w-[55px] sm:h-[55px]"
          src={arrowPinkSquareIcon}
          alt="arrow"
        />
      </div>

      <div className="w-full flex flex-row items-center justify-between pb-2 border-b-[0.5px] border-white/30">
        <p className="text-2xl lg:text-[42px] font-extralight leading-[200%] text-medium-gray">
          {descSec}
        </p>
        <Image
          className="w-10 h-10 sm:w-[55px] sm:h-[55px]"
          src={arrowPinkSquareIcon}
          alt="arrow"
        />
      </div>

      <div className="w-full flex flex-row items-center justify-between pb-2 border-b-[0.5px] border-white/30">
        <p className="text-2xl lg:text-[42px] font-extralight leading-[200%] text-medium-gray">
          {descThird}
        </p>
        <Image
          className="w-10 h-10 sm:w-[55px] sm:h-[55px]"
          src={arrowPinkSquareIcon}
          alt="arrow"
        />
      </div>
    </div>
  </motion.div>
);
