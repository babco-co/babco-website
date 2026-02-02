import Link from "next/link";
import { BIcon } from "@/components/svg/b-icon";
import BabcoTMLogo from "@/components/svg/babcoTM-logo";

type HeaderLogoProps = {
  isScrolled: boolean;
  isMenuOpen: boolean;
  getFullGradientClass: () => string;
};

const HeaderLogo = ({
  isScrolled,
  isMenuOpen,
  getFullGradientClass,
}: HeaderLogoProps) => {
  const content = isScrolled ? (
    <BabcoTMLogo className="w-[106px] h-[21px]" isMenuOpen={isMenuOpen} />
  ) : (
    <div
      className={`w-[38px] h-[38px] flex items-center justify-center rounded-full z-50 ${getFullGradientClass()}`}
    >
      <BIcon className="fill-white dark:fill-black" />
    </div>
  );

  // if (isMenuOpen) {
  //   return (
  //     <div className="flex flex-1 items-center justify-start z-50">
  //       {isScrolled ? (
  //         <BabcoTMLogo className="w-[106px] h-[21px]" isMenuOpen={isMenuOpen} />
  //       ) : (
  //         <div
  //           className={`w-[38px] h-[38px] flex items-center justify-center rounded-full z-50 ${getFullGradientClass()}`}
  //         >
  //           <BIcon className="fill-white dark:fill-black" />
  //         </div>
  //       )}
  //     </div>
  //   );
  // }

  return (
    <Link className="flex flex-1 items-center justify-start z-50" href="./">
      {content}
    </Link>
  );
};

export default HeaderLogo;
