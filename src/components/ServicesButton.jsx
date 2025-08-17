import React from "react";
import { forwardArrow } from "../assets/icons";

const ServicesButton = () => {
  return (
    <button className=" flex justify-center items-center flex-row bg-[#F5EFFF] px-2 gap-5 rounded-full border-deep-purple border-[1px] w-[160px] h-[50px]">
      <p className="text-deep-purple font-afacad">Learn More</p>
      <div className="flex justify-center items-center bg-deep-purple rounded-full w-[32px] h-[32px]">
        <img src={forwardArrow} alt="Button" />
      </div>
    </button>
  );
};

export default ServicesButton;
