import React from "react";

const TeamCard = ({ imgURL, label, position }) => {
  return (
    <div className="flex justify-center items-center flex-1 flex-col w-full max-sm:w-full">
      <div className="flex justify-center items-center bg-[#E6D6FC] rounded-full w-[302px] h-[286px]">
        <div className="flex justify-center items-center bg-[#EDE1FF] rounded-full w-[274px] h-[260px]">
          <img src={imgURL} alt={label} />
        </div>
      </div>
      <h3 className="text-center font-anek text-3xl text-deep-purple font-semibold pt-4 w-[170px]">
        {label}
      </h3>
      <hr className="border-deep-purple w-[100px] mb-2" />
      <p className="font-afacad text-xl text-deep-purple">{position}</p>
    </div>
  );
};

export default TeamCard;
