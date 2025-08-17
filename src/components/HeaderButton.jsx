import React from "react";

const HeaderButton = ({ label, iconURL, className }) => {
  return (
    <button
      className={`flex justify-center items-center bg-deep-purple text-white px-4 py-2 gap-2 rounded-[37px] font-semibold max-lg:hidden ${className}`}
    >
      <img src={iconURL} alt="icon" width={24} height={24} />
      {label}
    </button>
  );
};

export default HeaderButton;
