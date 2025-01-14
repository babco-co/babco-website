"use client";
import Image from "next/image";
import { motion } from "motion/react";
import arrowBlackIcon from "../../../../public/icons/arrow-black-icon.svg";
import { containerVariants, YScrollVariants } from "@/lib/utils/animations";
import { useTransition } from "@/components/page-transition";
import { useThemeVariant } from "@/lib/hooks/use-theme-variant";

const Offer = () => {
  const { startTransition } = useTransition();
  const { getFullGradientClass } = useThemeVariant();

  const handleItemClick = () => {
    startTransition("/contact-us");
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
        getFullGradientClass={getFullGradientClass}
      />
    </section>
  );
};

export default Offer;

interface ItemProps {
  title: string;
  tag: string;
  descFirst: string;
  descSec: string;
  descThird: string;
  onItemClick?: () => void;
  getFullGradientClass?: () => string;
}

const RegularItem = ({
  title,
  tag,
  descFirst,
  descSec,
  descThird,
  onItemClick,
}: ItemProps) => (
  <div
    className="w-full flex flex-col lg:flex-row gap-10 items-center justify-between py-8 lg:py-[91px] cursor-pointer"
    onClick={onItemClick}
  >
    <ItemHeader tag={tag} title={title} />
    <RegularDescription
      descFirst={descFirst}
      descSec={descSec}
      descThird={descThird}
    />
  </div>
);

const RegularDescription = ({
  descFirst,
  descSec,
  descThird,
}: Pick<ItemProps, "descFirst" | "descSec" | "descThird">) => (
  <motion.div
    className="w-full lg:w-2/3 flex flex-col items-start justify-center text-start gap-3 lg:gap-5"
    initial="hidden"
    whileInView="visible"
    variants={containerVariants}
    viewport={{ once: true }}
  >
    {[descFirst, descSec, descThird].map((desc, index) => (
      <motion.p
        key={index}
        className="text-base lg:text-xl font-extralight leading-[100%] text-light-gray"
        variants={YScrollVariants}
        transition={{ duration: 0.4 }}
      >
        {desc}
      </motion.p>
    ))}
  </motion.div>
);

const WorkWithUsItem = ({
  title,
  tag,
  descFirst,
  descSec,
  descThird,
  onItemClick,
  getFullGradientClass,
}: ItemProps) => (
  <div
    className="w-full flex flex-col lg:flex-row gap-8 lg:gap-10 items-center justify-between py-8 lg:py-[91px] cursor-pointer"
    onClick={onItemClick}
  >
    <ItemHeader tag={tag} title={title} />
    <WorkWithUsDescription
      descFirst={descFirst}
      descSec={descSec}
      descThird={descThird}
      getFullGradientClass={getFullGradientClass}
    />
  </div>
);

const WorkWithUsDescription = ({
  descFirst,
  descSec,
  descThird,
  getFullGradientClass,
}: Pick<
  ItemProps,
  "descFirst" | "descSec" | "descThird" | "getFullGradientClass"
>) => (
  <div className="w-full lg:w-2/3 flex flex-col items-start justify-center text-start gap-8">
    {[descFirst, descSec, descThird].map((desc, index) => (
      <motion.div
        key={index}
        className="w-full flex flex-row items-center justify-between pb-2 border-b-[0.5px] border-border-sec-light dark:border-border-sec-dark"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <motion.p
          className="text-2xl lg:text-[42px] font-extralight leading-[200%] text-medium-gray hover:text-brand-light dark:hover:text-brand-dark"
          variants={YScrollVariants}
          transition={{ duration: 0.4 }}
        >
          {desc}
        </motion.p>
        <motion.div
          className={`w-[55px] h-[55px] flex items-center justify-center rounded-lg ${getFullGradientClass?.()}`}
          variants={YScrollVariants}
          transition={{ duration: 0.4 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="17"
            viewBox="0 0 19 17"
            fill="none"
          >
            <path
              d="M18.4676 3.11683C18.5318 2.56829 18.1392 2.07157 17.5906 2.00739L8.65161 0.961401C8.10307 0.897214 7.60636 1.28986 7.54217 1.8384C7.47798 2.38695 7.87063 2.88366 8.41917 2.94785L16.365 3.87761L15.4352 11.8234C15.371 12.3719 15.7637 12.8687 16.3122 12.9328C16.8607 12.997 17.3575 12.6044 17.4216 12.0558L18.4676 3.11683ZM1.62013 16.8079L18.0945 3.78511L16.8543 2.21611L0.379865 15.2389L1.62013 16.8079Z"
              fill="black"
            />
          </svg>
        </motion.div>
      </motion.div>
    ))}
  </div>
);

const ItemHeader = ({ tag, title }: { tag: string; title: string }) => (
  <motion.div
    className="w-full lg:w-1/2 flex flex-col items-start justify-center"
    initial="hidden"
    whileInView="visible"
    variants={containerVariants}
    viewport={{ once: true }}
  >
    <Image
      className="invert-0 dark:invert mb-2"
      src={arrowBlackIcon}
      alt="arrow"
    />

    <motion.p
      className="text-base font-extralight leading-[120%] text-dark-gray mb-5"
      variants={YScrollVariants}
      transition={{ duration: 0.4 }}
    >
      {tag}
    </motion.p>

    <motion.p
      className="max-w-[440px] text-[32px] lg:text-[88px] font-extralight leading-normal lg:leading-[100%] text-text-primary-light dark:text-text-primary-dark hover:text-brand-light dark:hover:text-brand-dark"
      variants={YScrollVariants}
      transition={{ duration: 0.4 }}
    >
      {title}
    </motion.p>
  </motion.div>
);
