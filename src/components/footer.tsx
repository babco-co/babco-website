import React from "react";
import { Spacer } from "./spacer";

const Footer = () => {
  return (
    <div className="w-full h-fit">
      <Spacer className="mx-3 sm:mx-5">
        <div className="w-full flex justify-end pt-[26px] pb-5">
          <p className="text-sm font-light leading-[100%] text-text-primary-light dark:text-text-primary-dark/30">
            ©2024 BABCO. All Rights Reserved.
          </p>
        </div>
      </Spacer>
    </div>
  );
};

export default Footer;
