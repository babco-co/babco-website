"use client";
import Image from "next/image";
import Button from "@/components/ui/button";
import { Spacer } from "@/components/layout/spacer";
import Carousel from "@/components/ui/carousel";
import { useModal } from "@/components/ui/contact-us/modal-context";
import BabcoLogo from "./hero/babco-logo";
import member1 from "../../../public/member-1.webp";
import member2 from "../../../public/member-2.webp";
import member3 from "../../../public/member-3.webp";
import member4 from "../../../public/member-4.webp";
import member5 from "../../../public/member-5.webp";
import member6 from "../../../public/member-6.webp";
import member7 from "../../../public/member-7.webp";
import member8 from "../../../public/member-8.webp";
import member9 from "../../../public/member-9.webp";
import member10 from "../../../public/member-10.webp";
import member11 from "../../../public/member-11.webp";
import member12 from "../../../public/member-12.webp";
import member13 from "../../../public/member-13.webp";

const members = [
  { src: member1, className: "w-[435px] h-[401px]" },
  { src: member2, className: "w-[304px] h-[256px]" },
  { src: member7, className: "w-[205px] h-[223px]" },
  { src: member5, className: "w-[244px] h-[255px]" },
  { src: member13, className: "w-[269px] h-[196px]" },
  { src: member10, className: "w-[119px] h-[124px]" },
  { src: member11, className: "w-[232px] h-[232px]" },

  { src: member3, className: "w-[227px] h-[227px]" },
  { src: member6, className: "w-[246px] h-[271px]" },
  { src: member4, className: "w-[154px] h-[196px]" },
  { src: member9, className: "w-[325px] h-[325px]" },
  { src: member8, className: "w-[179px] h-[179px]" },
  { src: member12, className: "w-[370px] h-[362px]" },
];

const Team = () => {
  const { openModal } = useModal();
  return (
    <section className="w-full flex flex-col items-center justify-center overflow-x-hidden pt-[100px] border-t border-white/10">
      <Spacer horizontal className="w-full">
        <div className="w-full flex flex-col items-start gap-5">
          <p className="max-w-[329px] lg:max-w-full text-[32px] lg:text-[100px] font-extralight text-primary-white leading-[100%]">
            Create something intentionally great with us
          </p>

          <Button
            className="w-[176px] h-[68px] gap-2 text-lg"
            variant="primary"
            onClick={openModal}
          >
            Talk to us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="24"
              viewBox="0 0 23 24"
              fill="none"
            >
              <path
                d="M1.5 10.5L-1.31134e-07 10.5L1.31134e-07 13.5L1.5 13.5L1.5 10.5ZM22.5607 13.0607C23.1464 12.4749 23.1464 11.5251 22.5607 10.9393L13.0147 1.3934C12.4289 0.807611 11.4792 0.807611 10.8934 1.3934C10.3076 1.97918 10.3076 2.92893 10.8934 3.51472L19.3787 12L10.8934 20.4853C10.3076 21.0711 10.3076 22.0208 10.8934 22.6066C11.4792 23.1924 12.4289 23.1924 13.0147 22.6066L22.5607 13.0607ZM1.5 13.5L21.5 13.5L21.5 10.5L1.5 10.5L1.5 13.5Z"
                fill="#000"
              />
            </svg>
          </Button>
        </div>
      </Spacer>

      <div className="w-full  flex flex-col items-center justify-center relative mt-[126px] mb-[-100px]">
        <Carousel speed={0.5} gap={68} className="w-full">
          {members.slice(0, 7).map((item, index) => (
            <Image
              className={item.className}
              key={index}
              src={item.src}
              alt="member"
            />
          ))}
        </Carousel>

        <Carousel speed={0.5} gap={68} className="w-full pt-[50px] pl-[500px]">
          {members.slice(7, members.length).map((item, index) => (
            <Image
              className={item.className}
              key={index}
              src={item.src}
              alt="member"
            />
          ))}
        </Carousel>
      </div>

      <div className="w-full h-fit flex items-end justify-center z-10">
        <BabcoLogo fill={"#fff"} />
      </div>
    </section>
  );
};

export default Team;
