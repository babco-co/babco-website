import { motion } from "motion/react";
import NavigationLink from "@/components/header/navigation-link";
import NavigationDropdown from "@/components/header/navigation-dropdown";
import type { MenuItem } from "@/components/header/types";

type DesktopNavigationProps = {
  menuItems: MenuItem[];
};

const DesktopNavigation = ({ menuItems }: DesktopNavigationProps) => {
  return (
    <motion.nav className="hidden lg:flex flex-1 items-center justify-center gap-5">
      {menuItems.map((item, index) => (
        <div key={index} className="flex items-center gap-5">
          {item.dropdown ? (
            <NavigationDropdown text={item.text} items={item.dropdown.items} />
          ) : (
            <NavigationLink
              href={item.href!}
              text={item.text}
              external={item.external}
            />
          )}
          {index < menuItems.length - 1 && (
            <div className="hidden sm:flex items-start justify-center text-center">
              <p className="text-light-gray mb-2">.</p>
            </div>
          )}
        </div>
      ))}
    </motion.nav>
  );
};

export default DesktopNavigation;
