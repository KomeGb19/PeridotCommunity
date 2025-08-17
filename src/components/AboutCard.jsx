import React from "react";

const AboutCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex justify-center w-[360px] h-[450px] bg-deep-purple rounded-[20px] shadow-black">
      <div className="flex  justify-center items-center flex-col gap-3">
        <div className="flex justify-center items-center bg-deep-purple border-primary2 border-2 w-[80px] h-[80px] rounded-full mb-2">
          <div className="flex justify-center items-center bg-white w-[72px] h-[72px] rounded-full">
            <img src={imgURL} alt={label} />
          </div>
        </div>
        <h3 className="font-anek text-2xl font-bold text-white text-center max-w-[200px] leading-8 ">
          {label}
        </h3>
        <hr className="border-primary w-[100px] mt-[13px] mb-[30px]" />
        <p className="font-afacad text-lg text-center text-white max-w-[273px] max-h-[135px]">
          {subtext}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
