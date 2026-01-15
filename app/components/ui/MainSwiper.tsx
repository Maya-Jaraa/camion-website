"use client";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Reveal from "./Reveal";
interface HeroSlide {
  id: number;
  image: string;
}

const slides: HeroSlide[] = [
  { id: 1, image: "/images/swipperMain/bus.svg" },
  { id: 2, image: "/images/swipperMain/bus2.svg" },
  { id: 3, image: "/images/swipperMain/roadbus.svg" },
];

const MainSwiper: FC = () => {
  const t = useTranslations("hero");
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <div
      className=" w-full h-[12rem] md:h-[25rem] lg:h-[32rem]  relative overflow-hidden"
      dir={isAr ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <Swiper
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        dir={isAr ? "rtl" : "ltr"}
        className="w-full h-full"
      >
        {slides.map((slide) => {
          const isRoadbus = slide.image.includes("roadbus");
          const isBus = slide.image.includes("bus") && !isRoadbus;
          const needsZoom = !isRoadbus;

          return (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full bg-white">
                {/* الصورة في الخلفية - تأخذ 70% من العرض */}
                <div
                  className={`absolute top-0 bottom-0 w-[60%] ${
                    isAr ? "left-0" : "right-0"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt="Hero Truck"
                    fill
                    priority
                    sizes="70vw"
                    className="object-cover"
                    style={{
                      objectPosition: isAr ? "left center" : "right center",
                      transform: isAr ? "scaleX(-1)" : "none",
                    }}
                  />
                </div>

                {/* Gradient Overlay - يبدأ من اليسار/اليمين */}
                <div
                  className={`absolute  top-0 h-full w-[80%] ${
                    isAr
                      ? "bg-gradient-to-l from-white via-white/100 to-transparent"
                      : "bg-gradient-to-r from-white via-white/100 to-transparent"
                  }`}
                />

                {/* النص فوق الصورة - لا يقاسم العرض */}
                <div
                  className={`absolute top-0 bottom-0 flex flex-col justify-center pt-4 md:pt-8 lg:pt-12 z-10 ${
                    isAr
                      ? "right-0 items-end pr-4 md:pr-8 lg:pr-12 xl:pr-16"
                      : "left-0 items-start pl-4 md:pl-8 lg:pl-12 xl:pl-16"
                  }`}
                  dir={isAr ? "rtl" : "ltr"}
                >
                  <div
                    className={`max-w-lg w-full ${
                      isAr ? "text-right" : "text-left"
                    }`}
                  >
                    <Reveal animation="fade-right">
                      <h1
                        className={`text-[#FFC400] font-extrabold text-base md:text-2xl lg:text-4xl leading-tight mb-3 md:mb-4 whitespace-nowrap ${
                          isAr ? "text-right" : "text-left"
                        }`}
                      >
                        {t("title")}
                      </h1>
                    </Reveal>
                    <Reveal animation="fade-right">
                      <p
                        className={`text-gray-900  text-xs md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6 ${
                          isAr ? "text-right" : "text-left"
                        }`}
                      >
                        {t("text")}
                      </p>
                    </Reveal>
                    <Reveal animation="fade-right">
                      <div className={isAr ? "text-right" : "text-left"}>
                        <Link
                          href={`/${locale}/get-started`}
                          className="
                          inline-block bg-[#FFC400] text-white font-bold
                          px-4 py-2 md:px-8 md:py-4 rounded-lg
                          shadow-md hover:bg-[#e0b000] transition
                          text-xs md:text-base
                        "
                        >
                          {t("button")}
                        </Link>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MainSwiper;
