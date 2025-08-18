import React from "react";
import { useState } from "react";

const HeaderButton = ({
  label,
  iconURL,
  className,
  hoverIconURL,
  setShowModal,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setShowModal(true)}
      className={`flex justify-center items-center bg-deep-purple text-white px-4 py-2 gap-2 
      rounded-[37px] font-semibold max-xl:hidden
      transform transition-all duration-300 ease-in-out
      hover:bg-white hover:text-deep-purple hover:shadow-lg hover:scale-105
      active:scale-95 ${className}`}
    >
      <img
        src={isHovered ? hoverIconURL : iconURL}
        alt="icon"
        width={24}
        height={24}
        className="transition-transform duration-300 transform group-hover:rotate-12"
      />
      {label}
    </button>
  );
};

export default HeaderButton;
