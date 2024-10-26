import Hero from "./(home)/hero/hero";
import TeamBehind from "./(home)/team-behind";
import Brands from "./(home)/brands";
import Product from "./(home)/product/product";
import Offer from "./(home)/offer";
import Team from "./(home)/team";
import { Spacer } from "@/components/layout/spacer";

export default function Page() {
  return (
    <div className="w-full min-h-screen font-[family-name:var(--font-inter)]">
      <Spacer horizontal vertical className="mt-[240px]">
        <Hero />
      </Spacer>

      <Spacer vertical horizontal>
        <Brands />
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
