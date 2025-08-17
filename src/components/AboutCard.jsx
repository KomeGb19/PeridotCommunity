import React from "react";

const AboutCard = ({ imgURL, label, subtext }) => {
  return (
    <div
      className="flex justify-center w-[360px] h-[450px] bg-deep-purple rounded-[20px] shadow-black
      sm:w-[300px] sm:h-[380px] xs:w-full xs:h-auto"
    >
      <div className="flex justify-center items-center flex-col gap-3">
        <div
          className="flex justify-center items-center bg-deep-purple border-primary2 border-2 w-[80px] h-[80px] rounded-full mb-2
          sm:w-[64px] sm:h-[64px]"
        >
          <div
            className="flex justify-center items-center bg-white w-[72px] h-[72px] rounded-full
            sm:w-[56px] sm:h-[56px]"
          >
            <img
              src={imgURL}
              alt={label}
              className="w-[48px] h-[48px] object-contain sm:w-[40px] sm:h-[40px]"
            />
          </div>
        </div>
        <h3
          className="font-anek text-2xl font-bold text-white text-center max-w-[200px] leading-8
          sm:text-xl sm:max-w-[160px]"
        >
          {label}
        </h3>
        <hr className="border-primary w-[100px] mt-[13px] mb-[30px] sm:w-[70px] sm:mt-2 sm:mb-4" />
        <p
          className="font-afacad text-lg text-center text-white max-w-[273px] max-h-[135px]
          sm:text-base sm:max-w-[200px] sm:max-h-[100px]"
        >
          {subtext}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
