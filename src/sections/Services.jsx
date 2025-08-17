import React from "react";
import ServicesCard from "../components/ServicesCard";

const Services = () => {
  return (
    <section className="w-full flex justify-center items-center flex-col bg-primary2 pb-10">
      <div className="flex justify-center items-center bg-peridot-purple w-[275px] h-[64px] rounded-[94px] pt-2.5 mb-[46px] mt-10 ">
        <h3 className="text-deep-purple font-anek font-semibold text-2xl text-center">
          Our Services
        </h3>
      </div>
      <p className="text-xl text-deep-purple font-afacad max-w-[847px] text-center mb-[99px]">
        At Peridot we provide compassionate and personalized home care services
        designed to meet the unique needs of individuals and families.
      </p>
      <div className="flex justify-center items-center flex-row gap-[70px] max-md:flex-col">
        {services.map((cards) => (
          <ServicesCard key={cards.label} {...cards} />
        ))}
      </div>
    </section>
  );
};

export default Services;
