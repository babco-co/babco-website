import { Spacer } from "@/components/spacer";
import Hero from "./(home)/components/hero/hero";
import TeamBehind from "./(home)/components/team-behind";
import Product from "./(home)/components/product/product";
import Offer from "./(home)/components/offer";
import Team from "./(home)/components/team";
import Header from "@/components/header";

export default function Page() {
  return (
    <div className="w-full min-h-screen font-helvetica">
      <Spacer vertical className="mx-3 sm:mx-5 mt-5 border-[0.5px] border-white/20 rounded-[10px]">
        <Header />
        <Hero />
      </Spacer>

      <Spacer horizontal vertical>
        <TeamBehind />
      </Spacer>

      <Spacer horizontal className="pb-16">
        <Product />
      </Spacer>

      <Spacer horizontal vertical>
        <Offer />
      </Spacer>

      <Spacer className="mx-3 sm:mx-5 border-[0.5px] border-white/20 rounded-[10px] bg-[#0C0C0C]">
        <Team />
      </Spacer>
    </div>
  );
}
