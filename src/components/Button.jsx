import React from "react";

const Button = ({ label }) => {
  return (
    <button className="bg-white w-[140px] h-[42px] rounded-[10px]">
      <div className="font-afacad text-lg font-semibold text-deep-purple">
        {label}
      </div>
    </button>
  );
};

export default Button;
