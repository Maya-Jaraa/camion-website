"use client";

import { IoArrowRedoSharp } from "react-icons/io5";
import { useTranslations, useLocale } from "next-intl";

const ListItem = ({ text }: { text: string }) => {
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <div className="w-full items-center flex px-1.5 space-x-1 md:space-x-4 transition-transform duration-300 ease-in-out hover:scale-105">
      <IoArrowRedoSharp
        className={`
       
          text-[#FFC400] text-[15px] md:text-[30px]
          ${isArabic ? "scale-x-[-1]" : ""}
        `}
      />
      <p className="text-[#514F4F] text-left text-[11px] md:text-lg lg:text-xl">
        {text}
      </p>
    </div>
  );
};

export default function WhyChooseCamion() {
  const t = useTranslations("whyChooseCamion");

  const items = [
    t("item1"),
    t("item2"),
    t("item3"),
    t("item4"),
    t("item5"),
    t("item6"),
  ];

  return (
    <div className="text-center space-y-0 md:space-y-2 flex flex-col items-center justify-center gap-1.5">
      <h1 className="text-[#ffc400] text-[16px] md:text-2xl lg:text-3xl font-bold">
        {t("title")}
      </h1>

      <p className="w-full lg:w-[70%] mx-auto block text-[10px] md:text-[17px] lg:text-[20px] text-center  ">
        {t("subtitle")}
      </p>

      <div className="md:w-[80%] px-2 space-y-3 flex flex-col justify-start">
        {items.map((txt, i) => (
          <ListItem key={i} text={txt} />
        ))}
      </div>
    </div>
  );
}
