"use client";

import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const CamionTracking: React.FC = () => {
  const t = useTranslations("camionTracking");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <div
      className="
        my-5 md:my-15 px-4 pt-4 md:pt-0 w-full flex flex-col md:flex-row items-center
        min-h-[20rem] md:h-[20rem]
        bg-[linear-gradient(90deg,#ffffff_0%,#fff8df_40%,#ffe9b0_100%)]
      "
    >
      <div className="relative w-full md:w-1/2 lg:w-[58%] h-48 md:h-[90%] mb-4 md:mb-0">
        <Image
          src="/images/location.svg"
          fill
          alt="location"
          className={`
            object-contain
            ${isArabic ? "scale-x-[-1]" : ""}
          `}
        />
      </div>

      <div className="px-2 md:px-2 mb-3 md:mb-0 w-full md:w-auto">
        <h1
          className="
            text-[#7F8184] flex items-center space-x-2 text-lg md:text-3xl font-semibold
            justify-center md:justify-start mb-3
          "
        >
          {t("title")}
          <span className="w-8 h-8 md:w-20 md:h-20 relative">
            <Image
              src="/images/icon.svg"
              alt=""
              fill
              className={`
            object-contain
            ${isArabic ? "scale-x-[-1]" : ""}
          `}
            />
          </span>
        </h1>

        <p className="text-[#7F8184] text-center md:text-start text-sm md:text-base mb-3">
          {t("paragraph1")}
        </p>

        <p className="text-[#7F8184] text-center md:text-start text-sm md:text-base">
          {t("paragraph2")}
        </p>
      </div>
    </div>
  );
};

export default CamionTracking;
