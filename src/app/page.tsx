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
      <Spacer horizontal className="mt-[240px] mb-[300px] lg:mb-[100px]">
        <Hero />
      </Spacer>

      <Spacer vertical horizontal>
        <Brands />
      </Spacer>

      <Spacer vertical>
        <TeamBehind />
      </Spacer>

      <Spacer horizontal vertical>
        <Product />
      </Spacer>

      <Spacer horizontal vertical>
        <Offer />
      </Spacer>

      <Spacer>
        <Team />
      </Spacer>
    </div>
  );
}
