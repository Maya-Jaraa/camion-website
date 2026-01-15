"use client";

import React from "react";
import { LuSend } from "react-icons/lu";
import { useTranslations, useLocale } from "next-intl";

const GetInTouch: React.FC = () => {
  const t = useTranslations("contact");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <div className="my-15 flex flex-col items-center">
      <h1 className="flex items-center gap-2 text-[#ffc400] text-xl md:text-2xl lg:text-4xl font-bold">
        <LuSend className={isArabic ? "scale-x-[-1]" : ""} />
        {t("title")}
      </h1>

      <p className="text-[#6D6D6D] w-[60%] text-sm md:text-[16px] lg:text-lg text-center my-4">
        {t("description")}
      </p>
    </div>
  );
};

export default GetInTouch;
