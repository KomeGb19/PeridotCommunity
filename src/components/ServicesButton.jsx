import React from "react";

const ServicesButton = ({
  setShowModal,
  isHovered,
  setIsHovered,
  iconURL,
  hoverIconURL,
}) => {
  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setShowModal(true)}
      className="group flex justify-center items-center flex-row 
                 bg-[#F5EFFF] px-2 gap-5 rounded-full border-deep-purple border-[1px] 
                 w-[160px] h-[50px] transition-all duration-300 hover:bg-deep-purple"
    >
      <p className="text-deep-purple font-afacad transition-colors duration-300 group-hover:text-white">
        Learn More
      </p>
      <div
        className="flex justify-center items-center bg-deep-purple rounded-full 
                   w-[32px] h-[32px] transition-all duration-300 group-hover:bg-white"
      >
        <img
          src={isHovered ? hoverIconURL : iconURL}
          alt="Button"
          width={24}
          height={24}
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      </div>
    </button>
  );
};

export default ServicesButton;
