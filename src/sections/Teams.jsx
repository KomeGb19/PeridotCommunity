import React from "react";
import { teamMembers } from "../constants";
import TeamCard from "../components/TeamCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../index.css";

const Teams = () => {
  return (
    <section
      id="teams"
      className="w-full flex justify-center items-center flex-col bg-accent-purple pb-10"
    >
      {/* Title */}
      <div className="flex justify-center items-center bg-deep-purple w-[203px] h-[64px] rounded-[94px] pt-2.5 mb-[46px] mt-10 ">
        <h3 className="text-white font-anek font-semibold text-2xl text-center">
          The Team
        </h3>
      </div>

      {/* Subtitle */}
      <p className="text-xl text-deep-purple font-afacad max-w-[847px] text-center mb-[99px]">
        Compassion and Professionalism
      </p>

      {/* Slider */}
      <div className="w-full max-w-6xl px-6">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            768: { slidesPerView: 2 }, // tablets
            1024: { slidesPerView: 3 }, // desktops
          }}
          className="pb-10"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <TeamCard {...member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Teams;
