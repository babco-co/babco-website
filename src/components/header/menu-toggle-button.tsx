import Image from "next/image";
import menuIcon from "@/../public/icons/hamburger-icon.svg";
import closeIcon from "@/../public/icons/close-icon.svg";

type MenuToggleButtonProps = {
  isOpen: boolean;
  onClick: () => void;
  getFullGradientClass: () => string;
};

const MenuToggleButton = ({
  isOpen,
  onClick,
  getFullGradientClass,
}: MenuToggleButtonProps) => {
  return (
    <button
      className={`w-[38px] h-[38px] flex lg:hidden shrink-0 items-center justify-center rounded-full z-50 ${
        isOpen
          ? "bg-brand-light dark:bg-brand-dark"
          : getFullGradientClass()
      }`}
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <Image
        className="invert dark:invert-0"
        src={isOpen ? closeIcon : menuIcon}
        alt="menu"
      />
    </button>
  );
};

export default MenuToggleButton;