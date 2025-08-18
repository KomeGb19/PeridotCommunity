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
      <div className="flex justify-center items-center bg-deep-purple w-[203px] h-[64px] rounded-[94px] pt-2.5 mb-8 mt-10 sm:w-[150px] sm:h-[48px]">
        <h3 className="text-white font-anek font-semibold text-2xl text-center sm:text-lg">
          The Team
        </h3>
      </div>

      <p className="text-xl text-deep-purple font-afacad max-w-[847px] text-center mb-16 sm:text-base sm:mb-8 sm:px-2">
        Compassion and Professionalism
      </p>

      <div className="w-full max-w-6xl px-2 sm:px-0">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
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
