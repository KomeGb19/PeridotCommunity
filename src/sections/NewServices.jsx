import React from "react";
import { peridotPurple } from "../assets/images";
import ServicesButton from "../components/ServicesButton";
import { services } from "../constants";
const NewServices = () => {
  return (
    <section
      id="our-services"
      className="w-full flex justify-center items-center flex-col bg-highlight-purple pb-20"
    >
      <div className="flex justify-center items-center bg-deep-purple w-[229px] h-[64px] rounded-[94px] pt-2.5 mb-[46px] mt-10 ">
        <h3 className="text-white font-anek font-semibold text-2xl text-center">
          Our Services
        </h3>
      </div>
      <div className="flex justify-center items-center flex-col xl:flex-row gap-10 xl:gap-20">
        <div className="flex justify-center items-center bg-[#F8F3FF] w-[412px] h-[228px] border-deep-purple border-[1px] rounded-[20px]">
          <img src={peridotPurple} alt="" className="w-[200px] h-[80px]" />
        </div>
        <div className="flex justify-center items-center flex-col xl:items-start">
          <p className="text-lg text-deep-purple font-afacad max-w-[550px] p-4 xl:p-0 text-center xl:text-left mb-[40px]">
            At Peridot we provide compassionate and personalized home care
            services designed to meet the unique needs of individuals and
            families.
          </p>
          <ServicesButton />
        </div>
      </div>
    </section>
  );
};

export default NewServices;
