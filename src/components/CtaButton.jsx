import React from "react";

const CtaButton = ({ label }) => {
  return (
    <button className="flex justify-center items-center">
      <div className="font-afacad text-xl bg-deep-purple text-white font-semibold p-4 rounded-[10px]">
        {label}
      </div>
    </button>
  );
};

export default CtaButton;
