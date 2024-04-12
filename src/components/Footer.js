import React from "react";
import { footerInfo } from "../utils/constants/stringConstants";

const Footer = () => {
  return (
    <div className="bg-black">
      <h6 className="pb-2 pl-2 text-sm text-white md:text-3xl md:pb-4 text-center">
        {footerInfo?.section?.info}
        <span className="font-bold text-red-600">
          {footerInfo?.profile?.name}
        </span>
      </h6>
    </div>
  );
};

export default Footer;
