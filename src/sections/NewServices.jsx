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
      <div className="flex justify-center items-center bg-deep-purple w-56 h-16 rounded-[94px] pt-2.5 mb-12 mt-10 ">
        <h3 className="text-white font-anek font-semibold text-2xl text-center">
          Our Services
        </h3>
      </div>
      <div className="flex flex-col xl:flex-row justify-center items-center gap-10 xl:gap-20 w-full px-4">
        <div className="flex justify-center items-center bg-[#F8F3FF] w-full max-w-[412px] h-[180px] sm:h-[228px] border-deep-purple border rounded-[20px]">
          <img
            src={peridotPurple}
            alt=""
            className="w-[140px] h-[56px] sm:w-[200px] sm:h-[80px]"
          />
        </div>
        <div className="flex justify-center items-center flex-col xl:items-start w-full max-w-[550px]">
          <p className="text-base sm:text-lg text-deep-purple font-afacad w-full p-4 xl:p-0 text-center xl:text-left mb-10">
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
