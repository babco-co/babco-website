import { Spacer } from "@/components/spacer";
import Hero from "./(home)/components/hero/hero";
import TeamBehind from "./(home)/components/team-behind";
import Product from "./(home)/components/product/product";
import Offer from "./(home)/components/offer";
import Team from "./(home)/components/team";

export default function Page() {
  return (
    <div className="w-full min-h-screen font-[family-name:var(--font-inter)]">
      <Spacer>
        <Hero />
      </Spacer>

      <Spacer vertical horizontal>
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
