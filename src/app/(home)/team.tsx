import Image from "next/image";
import Button from "@/components/ui/button";
import { Spacer } from "../page";
import BabcoLogo from "./hero/babco-logo";
import arrow from "../../../public/arrow-right-icon.svg";
import member1 from "../../../public/member-1.webp";
import member2 from "../../../public/member-2.webp";
import member3 from "../../../public/member-3.webp";
import member4 from "../../../public/member-4.webp";
import member5 from "../../../public/member-5.webp";
import member6 from "../../../public/member-6.webp";
import member7 from "../../../public/member-7.webp";


const Team = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <Spacer horizontal>
        <div className="w-full flex flex-col items-start gap-5">
          <p className="text-3xl lg:text-[100px] font-extralight text-primary-white leading-[100%]">
            Create something intentionally great with us
          </p>

          <Button className="ml-4 gap-2" variant="primary">
            Talk to us
            <Image src={arrow} alt="arrow" />
          </Button>
        </div>
      </Spacer>

      <div className="w-full h-[1200px] flex items-end justify-center  relative">
        <Image className="w-[304px] h-[256px] absolute left-[40%] top-[20%] -z-10" src={member2} alt="img" />
        <Image className="w-[435px] h-[401px] absolute left-[20%] top-[40%] -z-10" src={member1} alt="img" />
        <Image className="w-[205px] h-[223px] absolute right-[20%] top-[15%] -z-10" src={member7} alt="img" />
        <Image  className="w-[246px] h-[271px] absolute right-[20%] top-[40%] -z-10" src={member6} alt="img" />
        <Image  className="w-[227px] h-[227px] absolute right-[30%] top-[60%] -z-10" src={member3} alt="img" />
        <Image className="w-[154px] h-[196px] absolute right-[15%] top-[55%] -z-10" src={member4} alt="img" />
        <Image className="w-[274px] h-[285px] absolute right-[-3%] top-[25%]" src={member5} alt="img" />

        <BabcoLogo fill={"#fff"} />
      </div>
    </section>
  );
};

export default Team;
