"use client";

import Image from "next/image";
import React from "react";
import { FaSquare } from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl";
import Reveal from "../ui/Reveal";

interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => {
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <div className="lg:space-y-3 md:space-y-2 space-y-1">
      <div className="flex items-center gap-3">
        <FaSquare
          className={`
            text-[#fcc400] text-[12px] md:text-sm mt-1
            ${isArabic ? "scale-x-[-1]" : ""}
          `}
        />
        <h3 className="font-semibold text-[#727272] text-sm md:text-base lg:text-xl">
          {title}
        </h3>
      </div>

      <p className="md:ml-7 text-xs md:text-sm lg:text-base">{description}</p>
    </div>
  );
};

const GreenLogistics: React.FC = () => {
  const t = useTranslations("greenLogistics");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <div className="flex flex-col items-center space-y-2 md:space-y-4 mb-7">
      <div className="relative  inline-block text-lg md:text-3xl">
        <div
          className={`absolute -top-2 w-10 opacity-60 -z-10 ${
            isArabic ? "-right-5 scale-x-[-1]" : "-left-5"
          }`}
        >
          <Image
            src="/images/plant.svg"
            alt=""
            width={40}
            height={40}
          />
        </div>

        <span className="text-[#727272] font-bold text-[16px] md:text-3xl">
          {t("title")}
        </span>
      </div>

      <p className="text-[#727272] text-xs md:text-sm w-full md:w-[50%] text-center px-4 md:px-0">
        {t("paragraph")}
      </p>

      <div className="flex flex-col w-full md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-7 md:w-[90%] lg:w-full px-4 md:px-0">
        {/* IMAGE */}
        <div className="relative inline-block p-2 w-full md:w-auto">
          <div className="absolute -left-3 top-2 w-full h-[70%] bg-[#fcc400] rounded-lg -z-10"></div>
          <div className="absolute right-2 top-2 md:top-3 w-[70%] h-full bg-[#fcc400] rounded-lg -z-10"></div>

          <div className="relative z-20 rounded-lg overflow-hidden">
            <Image
              src="/images/track.svg"
              alt="truck"
              width={400}
              height={400}
              className="w-full max-w-xs md:w-70 xl:w-95 h-auto rounded-lg"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="space-y-4 md:space-y-6 text-[#727272] leading-relaxed w-full md:w-[50%] px-2 md:px-0">
          <Reveal animation="fade-right">
            <FeatureItem
              title={t("feature1_title")}
              description={t("feature1_desc")}
            />
          </Reveal>
          <Reveal
            animation="fade-right"
            delay={500}
          >
            <FeatureItem
              title={t("feature2_title")}
              description={t("feature2_desc")}
            />
          </Reveal>
          <Reveal
            animation="fade-right"
            delay={700}
          >
            <FeatureItem
              title={t("feature3_title")}
              description={t("feature3_desc")}
            />
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default GreenLogistics;
