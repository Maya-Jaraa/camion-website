"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Pagination } from "swiper/modules";
import { IoOpenOutline } from "react-icons/io5";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import TruckModal from "./TruckModal";
import { useLocale, useTranslations } from "next-intl";

type Truck = {
  name: string;
  width: number;
  height: number;
  length: number;
  image: string;
};

export default function TruckSwiper() {
  const t = useTranslations("truckSwiper");
  const locale = useLocale();
  const isArabic = locale === "ar";
  const trucks: Truck[] = [
    {
      name: t("truck1_name"),
      width: 42865,
      height: 54663,
      length: 46326,
      image: "/images/types/track1.svg",
    },
    {
      name: t("truck2_name"),
      width: 42000,
      height: 51000,
      length: 50000,
      image: "/images/types/track2.svg",
    },
    {
      name: t("truck3_name"),
      width: 41000,
      height: 52000,
      length: 48000,
      image: "/images/types/track3.svg",
    },
  ];

  const [activeTruck, setActiveTruck] = useState<Truck>(trucks[0]);
  const [openModal, setOpenModal] = useState(false);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveTruck(trucks[swiper.activeIndex]);
  };

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-5 md:gap-15 min-h-[60vh]">
        <div className="md:w-[30%] w-[70%] text-[#727272]">
          <h3 className="text-[#fcc400] font-semibold text-[16px] md:text-3xl mb-3">
            {activeTruck.name}
          </h3>

          <hr />
          <p className="my-1.5 flex justify-between text-[14px] md:text-xl">
            {t("width")}:
            <span className="font-medium text-[14px] md:text-base text-black">
              {activeTruck.width}
            </span>
          </p>

          <hr />
          <p className="my-1.5 flex justify-between text-[14px] md:text-xl">
            {t("height")}:
            <span className="font-medium text-[14px] md:text-base text-black">
              {activeTruck.height}
            </span>
          </p>

          <hr />
          <p className="my-1.5 flex justify-between text-[14px] md:text-xl">
            {t("length")}:
            <span className="font-medium text-[14px] md:text-base text-black">
              {activeTruck.length}
            </span>
          </p>
          <hr />
        </div>

        <div className="md:w-[45%] w-[70%]">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            centeredSlides
            pagination={{ clickable: true, el: ".truck-pagination" }}
            onSlideChange={handleSlideChange}
            className="rounded-xl"
          >
            {trucks.map((truck, index) => (
              <SwiperSlide key={index}>
                <div className="md:h-60 h-30 bg-white space-y-5 rounded-xl shadow-2xl border border-[#ffc400] p-2 md:p-6 flex flex-col items-center">
                  <div className="w-full flex items-center justify-between text-[#ffc400]">
                    <h2 className="font-semibold text-[16px] md:text-xl">
                      {truck.name}
                    </h2>

                    <IoOpenOutline
                      size={25}
                      onClick={() => {
                        setActiveTruck(truck);
                        setOpenModal(true);
                      }}
                    />
                  </div>

                  <Image
                    src={truck.image}
                    alt={truck.name}
                    width={500}
                    height={500}
                    className="w-[80%] object-contain mx-auto"
                    priority={index === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            className={`truck-pagination flex justify-center mt-4 ${
              isArabic ? "flex-row-reverse" : ""
            }`}
          ></div>
        </div>
      </div>

      <TruckModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        truck={activeTruck}
      />
    </>
  );
}
