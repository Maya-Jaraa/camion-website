"use client";

import React from "react";
import { useTranslations, useLocale } from "next-intl";
import Reveal from "./Reveal";

const ContactInfoCard: React.FC = () => {
  const t = useTranslations("contactInfo");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <Reveal animation={isArabic ? "fade-right" : "fade-up"}>
      <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:w-fit">
        <div className="absolute top-3 left-3 w-full h-full bg-[#fff8df] rounded-2xl shadow-md"></div>

        <div className="relative bg-[#ffe9b0] w-full lg:w-80 p-4 md:p-6 rounded-2xl shadow-lg">
          <h2 className="text-lg font-semibold text-[#727272]">{t("title")}</h2>

          <p className="text-sm text-[#727272] mt-1">{t("subtitle")}</p>

          <div
            className={`flex items-start mt-6 ${
              isArabic ? "space-x-reverse space-x-3" : "space-x-3"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 stroke-white flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-1.372a1.125 1.125 0 00-.852-1.09l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a1.125 1.125 0 01-1.21.378 12.035 12.035 0 01-7.143-7.143 1.125 1.125 0 01.378-1.21l1.293-.970a1.125 1.125 0 00.417-1.173L6.713 3.102A1.125 1.125 0 005.623 2.25H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>

            <div className={`${isArabic ? "text-right" : "text-left"}`}>
              <p className="text-xs text-[#727272] font-medium">
                {t("phoneLabel")}
              </p>
              <p className="text-sm text-[#727272] break-all">{t("phone")}</p>
            </div>
          </div>

          <div
            className={`flex items-start mt-6 ${
              isArabic ? "space-x-reverse space-x-3" : "space-x-3"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 stroke-white flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.03 1.89l-7.5 4.875a2.25 2.25 0 01-2.43 0L3.28 8.883a2.25 2.25 0 01-1.03-1.89V6.75"
              />
            </svg>

            <div className={`${isArabic ? "text-right" : "text-left"}`}>
              <p className="text-xs text-[#727272] font-medium">
                {t("emailLabel")}
              </p>
              <p className="text-sm text-[#727272] break-all">{t("email")}</p>
            </div>
          </div>

          {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute bottom-4 right-4 w-16 h-16 md:w-20 md:h-20 stroke-white opacity-90 ${
            isArabic ? "scale-x-[-1]" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.3}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10l18-7-7 18-2.5-8L3 10z"
          />
        </svg> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`
    absolute bottom-4
    ${isArabic ? "left-4" : "right-4"}
    w-16 h-16 md:w-20 md:h-20
    stroke-white opacity-90
  `}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 10l18-7-7 18-2.5-8L3 10z"
            />
          </svg>
        </div>
      </div>
    </Reveal>
  );
};

export default ContactInfoCard;
