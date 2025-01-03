import React from "react";
import { Spacer } from "./spacer";

const Footer = () => {
  return (
    <div className="w-full h-[400px] flex items-center justify-end">
      <Spacer horizontal>
        <p className="text-xl font-bold leading-[100%] text-white/30">
          ©2024 BABCO. All Rights Reserved.
        </p>
      </Spacer>
    </div>
  );
};

export default Footer;
