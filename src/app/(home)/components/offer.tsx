"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import arrow from "../../../../public/icons/arrow-right-circle.svg";
import { YScrollVariants } from "@/lib/utils/animations";

const Offer = () => {
  const router = useRouter();

  const handleItemClick = () => {
    router.push("/contact-us");
  };

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
      <Item title="Vertical SAAS" onItemClick={handleItemClick} />
      <Item title="Dev Tools" onItemClick={handleItemClick} />
      <Item title="Dev Infrastructure" onItemClick={handleItemClick} />
      <Item title="AI Tools & Apps" onItemClick={handleItemClick} />
      <Item title="Marketplaces" onItemClick={handleItemClick} />
    </section>
  );
};

export default Offer;

const Item = ({
  title,
  onItemClick,
}: {
  title: string;
  onItemClick?: () => void;
}) => (
  <motion.div
    className="w-full flex flex-row items-center justify-between cursor-pointer"
    initial="hidden"
    whileInView="visible"
    variants={YScrollVariants}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    onClick={onItemClick}
  >
    <p className="text-2xl lg:text-[60px] font-extralight leading-normal lg:leading-[200%] text-medium-gray hover:text-white">
      {title}
    </p>

    <Image src={arrow} alt="arrow" className="w-[38px] h-[38px]" />
  </motion.div>
);
