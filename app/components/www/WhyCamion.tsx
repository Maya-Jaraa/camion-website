"use client";

import React from "react";
import Title from "../ui/Title";
import Image from "next/image";
import { IoArrowRedoSharp } from "react-icons/io5";
import { useTranslations, useLocale } from "next-intl";
import Reveal from "../ui/Reveal";

const ListItem = ({ text }: { text: string }) => {
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <div className="flex items-center   space-x-2 transition-transform duration-300 ease-in-out hover:scale-105">
      <IoArrowRedoSharp
        className={`
          text-[#FFC400] text-[1.2rem] md:text-3xl

        `}
      />
      <p className="text-[#514F4F] text-[11px] ms:text-[12px] md:text-[14px] lg:text-[16px]">
        {text}
      </p>
    </div>
  );
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h1
    className="relative inline-block text-[#FFC400] font-bold text-base md:text-xl text-center
      after:content-[''] after:block after:h-[4px] md:after:h-[6px] after:w-[8rem] md:after:w-[18rem] lg:after:w-[25rem]
      after:bg-gradient-to-r after:from-transparent after:via-[#FFC400] after:to-transparent after:mt-1"
  >
    {children}
  </h1>
);

const WhyCamion: React.FC = () => {
  const t = useTranslations("whyCamion");

  return (
    <div className="md:my-15 my-5 space-y-4 md:space-y-7 px-4 md:px-10">
      <Title
        label={t("title_label")}
        text={t("title_text")}
      />

      <div className="flex flex-col space-y-4 md:grid md:grid-cols-2 md:space-y-7 place-items-center">
        <div className="relative flex items-center justify-center w-full md:w-[85%] h-[12rem] md:h-[18rem]">
          <Image
            src="/images/why1.svg"
            fill
            alt="img"
            className="object-cover rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>

        <div>
          <SectionTitle>{t("carriers_title")}</SectionTitle>

          <div className="mt-2 md:mt-7 space-y-2 md:space-y-3 ">
            <ListItem text={t("carriers_1")} />
            <ListItem text={t("carriers_2")} />
            <ListItem text={t("carriers_3")} />
            <ListItem text={t("carriers_4")} />
          </div>
        </div>

        <div>
          <SectionTitle>{t("shippers_title")}</SectionTitle>

          <div className="mt-2 md:mt-7 space-y-2 md:space-y-3 ">
            <ListItem text={t("shippers_1")} />
            <ListItem text={t("shippers_2")} />
            <ListItem text={t("shippers_3")} />
            <ListItem text={t("shippers_4")} />
          </div>
        </div>

        <div className="relative w-full md:w-[85%] h-[12rem] md:h-[18rem]">
          <Image
            src="/images/why2.svg"
            fill
            alt="img"
            className="object-cover rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyCamion;
