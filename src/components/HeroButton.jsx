import React from "react";

const HeroButton = ({ iconURL, label, backgroundColor, textColor }) => {
  return (
    <button
      className={`flex justify-center items flex-row px-3 text-md py-3 font-afacad rounded-[10px] 
            ${
              backgroundColor
                ? `${backgroundColor} ${textColor}`
                : `bg-primary2 text-deep-purple`
            }
            `}
    >
      {label}
      {iconURL && <img src={iconURL} alt="join arrow" />}
    </button>
  );
};

export default HeroButton;
