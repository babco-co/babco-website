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
      <Spacer className="mb-[82px] mx-5 mt-5 border-[0.5px] border-white/20 rounded-[10px]">
        <Header />
        <Hero />
      </Spacer>

      <Spacer horizontal className="mb-[140px]">
        <TeamBehind />
      </Spacer>

      <Spacer horizontal vertical>
        <Product />
      </Spacer>

      <Spacer horizontal className="py-[90px]">
        <Offer />
      </Spacer>

      <Spacer>
        <Team />
      </Spacer>
    </div>
  );
}
