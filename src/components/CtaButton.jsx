import React from "react";

const CtaButton = ({ label, setShowModal }) => {
  return (
    <button
      onClick={() => setShowModal(true)}
      className="flex justify-center items-center"
    >
      <div className="font-afacad text-xl bg-deep-purple text-white font-semibold p-4 rounded-[10px] hover:bg-white hover:text-deep-purple transition-colors duration-300 ease-in">
        {label}
      </div>
    </button>
  );
};

export default CtaButton;
