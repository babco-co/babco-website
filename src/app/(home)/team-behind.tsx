import Image from "next/image";
import airbnb from "../../../public/airbnb-logo.svg";
import google from "../../../public/google-logo.svg";
import apple from "../../../public/apple-logo.svg";
import meta from "../../../public/meta-logo.svg";
import amazon from "../../../public/amazon-logo.svg";
import instagram from "../../../public/instagram-logo.svg";
import Braun from "../../../public/Braun-logo.svg";
import king from "../../../public/king-logo.svg";
import samsung from "../../../public/samsung-logo.svg";

const TeamBehind = () => {
  return (
    <section className="w-full flex flex-col items-start justify-center gap-11">
      <p className="text-xl lg:text-[66px] font-bold text-[#333] leading-normal uppercase">
        From the team behind
      </p>

      <div className="flex flex-row items-center justify-start gap-[60px]">
        <Image className="opacity-30" src={airbnb} alt="babco" />
        <Image className="opacity-30" src={google} alt="babco" />
        <Image className="opacity-30" src={apple} alt="babco" />
        <Image className="opacity-30" src={meta} alt="babco" />
        <Image className="opacity-30" src={amazon} alt="babco" />
        <Image className="opacity-30" src={instagram} alt="babco" />
        <Image className="opacity-30" src={Braun} alt="babco" />
        <Image className="opacity-30" src={king} alt="babco" />
        <Image className="opacity-30" src={samsung} alt="babco" />
      </div>
    </section>
  );
};

export default TeamBehind;
