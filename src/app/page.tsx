import Hero from "./(home)/hero/hero";
import TeamBehind from "./(home)/team-behind";
import Brands from "./(home)/brands";

export default function Page() {
  return (
    <div className="w-full min-h-screen font-[family-name:var(--font-inter)]">
      <Spacer horizontal className="mt-[240px] mb-[100px]">
        <Hero />
      </Spacer>

      <Spacer vertical>
        <Brands />
      </Spacer>

      <Spacer horizontal vertical>
        <TeamBehind />
      </Spacer>
    </div>
  );
}

export const Spacer = ({
  children,
  className,
  horizontal = false,
  vertical = false,
}: {
  children: React.ReactNode;
  className?: string;
  horizontal?: boolean;
  vertical?: boolean;
}) => (
  <div
    className={`${horizontal ? "px-4 sm:px-8 lg:px-12" : ""}
       ${
         vertical ? "mb-[120px] sm:mb-[160px] lg:mb-[226px]" : ""
       } ${className}`}
  >
    {children}
  </div>
);
