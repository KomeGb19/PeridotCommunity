import React from "react";

const HeroButton = ({
  iconURL,
  label,
  backgroundColor,
  textColor,
  setShowModal,
}) => {
  return (
    <button
      onClick={() => setShowModal(true)}
      className={`flex justify-center items-center gap-2 px-4 py-3 font-afacad rounded-[10px]
      transform transition-all duration-300 ease-in-out
      hover:shadow-lg hover:scale-105 hover:-translate-y-1 active:scale-95
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor}`
          : `bg-primary2 text-deep-purple`
      }`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="join arrow"
          className="w-5 h-5 transition-transform hover:translate-x-1"
        />
      )}
    </button>
  );
};

export default HeroButton;
