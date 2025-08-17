import React from "react";
import Button from "./Button";

const ServicesCard = ({ imgURL, label }) => {
  return (
    <div className="flex justify-center w-[338px] h-[341px] bg-deep-purple rounded-[20px] shadow-black pt-3">
      <div className="flex flex-col items-center gap-[41px] relative">
        <div>
          <img className="object-cover" src={imgURL} alt={imgURL} />
          <div className="absolute inset-0 bg-deep-purple opacity-60 rounded-b-[20px] mt-[132px] h-[88px]"></div>
          <div className="absolute inset-0 flex justify-center items-center font-anek font-semibold text-xl text-center text-white pt-10">
            <div>{label}</div>
          </div>
        </div>
        <div>
          <Button label="More" />
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
