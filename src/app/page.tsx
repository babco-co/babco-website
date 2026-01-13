import { Spacer } from "@/components/spacer";
import Hero from "@/app/(home)/_components/hero/hero";
import TeamBehind from "@/app//(home)/_components/team-behind";
import Product from "@/app//(home)/_components/product/product";
import Offer from "@/app//(home)/_components/offer";
import Team from "@/app//(home)/_components/team";
import Header from "@/components/header/header";

export default function Page() {
  return (
    <div className="w-full min-h-screen font-helvetica overflow-x-hidden">
      <Spacer
        vertical
        className="h-[calc(100dvh-50px)] lg:h-full flex flex-col mx-3 sm:mx-5 mt-5 border-[0.5px] border-border-primary-light dark:border-border-primary-dark rounded-[10px] bg-white/50 dark:bg-[#0C0C0C]"
      >
        <Header />
        <Hero />
      </Spacer>

      <Spacer horizontal vertical>
        <TeamBehind />
      </Spacer>

      <Spacer horizontal vertical>
        <Product />
      </Spacer>

      <Spacer horizontal vertical>
        <Offer />
      </Spacer>

      <Spacer className="mx-3 sm:mx-5 border-[0.5px] border-border-primary-light dark:border-border-primary-dark rounded-[10px] bg-white/50 dark:bg-[#0C0C0C]">
        <Team />
      </Spacer>
    </div>
  );
}
