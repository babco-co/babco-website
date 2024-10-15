import Image from "next/image";
import arrow from "../../../public/arrow-right-circle.svg";

const Offer = () => {
  return (
    <section className="w-full flex flex-col gap-10">
      <p className="max-w-[810px] text-3xl lg:text-[100px] font-extralight text-primary-white leading-[100%]">
        We offer design & development for:
      </p>
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
  <div className="w-full flex flex-row items-center justify-between">
    <p className="text-xl lg:text-[60px] font-extralight leading-[200%] text-medium-gray">
      {title}
    </p>

    <Image src={arrow} alt="arrow" className="w-[38px] h-[38px]" />
  </div>
);
