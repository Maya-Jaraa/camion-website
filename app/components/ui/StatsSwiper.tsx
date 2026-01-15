
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { StatCard } from "./StatCard";

interface StatsSwiperProps {
  items: {
    value: string;
    text: string;
  }[];
}

export const StatsSwiper: React.FC<StatsSwiperProps> = ({ items }) => {
  return (
    <div className="relative w-full flex flex-col items-center overflow-x-hidden">
      <div
        className="
          absolute inset-0
          top-[70%]
          -z-10
          overflow-hidden
          h-[0px]
          border-l-[50vw] border-r-[50vw] border-b-[40px]
          border-l-[#FFC400] border-r-[#FFC400] border-b-[#FFC400]
          border-t-[40px] border-t-transparent
        "
      />

      <div
        className="w-full py-10 flex justify-center items-center
       relative z-20 overflow-x-hidden truck-swiper"
      >
        <Swiper
          modules={[EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          initialSlide={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            scale: 0.95,
            slideShadows: false,
          }}
          className="w-full    md:max-w-[850px] "
          breakpoints={{
            0: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide
              key={index}
              className=" !w-[33%]    md:!w-[250px] lg:!w-[270px] gap-0 items-center flex justify-center"
            >
              <StatCard value={item.value} text={item.text} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
