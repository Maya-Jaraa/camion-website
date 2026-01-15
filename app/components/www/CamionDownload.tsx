"use client";

import React from "react";
import Title from "../ui/Title";
import { MdDownload } from "react-icons/md";
import { GrApple } from "react-icons/gr";
import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Reveal from "../ui/Reveal";

const CamionDownload: React.FC = () => {
  const t = useTranslations("camionDownload");
  const locale = useLocale();
  const isArabic = locale === "ar";
  return (
    <div className="md:my-25 my-5 space-y-3">
      <Title
        label={t("title_label")}
        text={t("title_text")}
      />

      <div className="lg:px-7 px-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-3 justify-between items-center">
        <Reveal animation={isArabic ? "fade-left" : "fade-right"}>
          {" "}
          <div className="md:space-y-7 space-y-3 w-full md:w-[50%] lg:w-[75%]">
            <h1 className="text-[#7F8184] flex items-center text-base md:text-2xl lg:text-3xl font-semibold">
              <MdDownload className="text-[#FFC400] font-normal text-xl md:text-3xl" />
              <span>{t("download_title")}</span>
            </h1>

            <p className="text-[#7F8184] md:px-2 text-xs md:text-base">
              {t("description")}
            </p>

            <div className="md:px-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5">
              <Link
                href=""
                className="bg-[#ffc400] text-xs md:text-lg rounded-md flex items-center justify-center text-white px-4 py-2 md:px-4 md:py-1.5 sm:w-40 transition hover:bg-[#e0b000]"
              >
                <GrApple className="mr-2" />
                <span>{t("appstore")}</span>
              </Link>

              <Link
                href=""
                className="bg-[#F5F5F5] text-xs md:text-lg rounded-md flex items-center justify-center text-black px-4 py-2 md:px-4 md:py-1.5 sm:w-40 transition hover:bg-gray-200"
              >
                <span>{t("googleplay")}</span>
              </Link>
            </div>
          </div>
        </Reveal>
        <Reveal animation={isArabic ? "fade-right" : "fade-left"}>
          <div className="flex w-full md:w-1/2 items-center justify-center gap-2">
            <Image
              src="/images/mob1.svg"
              alt="mob1"
              width={150}
              height={150}
              className="w-20 ms:w-24 md:w-32 lg:w-48 h-auto"
            />

            <Image
              src="/images/mob.svg"
              alt="mob"
              width={150}
              height={150}
              className="w-20 ms:w-24 md:w-36 lg:w-48 h-auto"
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default CamionDownload;
