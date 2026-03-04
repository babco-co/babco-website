import { Hero } from "@/app/(home)/_components/hero/hero";
import { TeamBehind } from "@/app//(home)/_components/team-behind";
import { Product } from "@/app//(home)/_components/product/product";
import { Offer } from "@/app//(home)/_components/offer";
import { Team } from "@/app//(home)/_components/team";
import { Header } from "@/components/header/header";
import { cn } from "@/lib/utils/cn";

export default function Page() {
  const sectionSpacingClass = "px-4 sm:px-8 lg:px-12 mt-[100px]";
  const panelClass =
    "mx-3 sm:mx-5 border-[0.5px] border-border-primary-light dark:border-border-primary-dark rounded-[10px] bg-white/50 dark:bg-[#0C0C0C]";

  return (
    <div className="w-full min-h-screen font-helvetica overflow-x-hidden">
      <div
        className={cn(
          panelClass,
          "h-[calc(100dvh-50px)] lg:h-full flex flex-col mt-5"
        )}
      >
        <Header />
        <Hero />
      </div>

      <div className={sectionSpacingClass}>
        <TeamBehind />
      </div>

      <div className={sectionSpacingClass}>
        <Product />
      </div>

      <div className={sectionSpacingClass}>
        <Offer />
      </div>

      <div className={cn(panelClass, "mt-[100px]")}>
        <Team />
      </div>
    </div>
  );
}
