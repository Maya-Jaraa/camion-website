"use client";

import Steps from "../ui/Steps";
import { useTranslations } from "next-intl";

export default function HowWeWork() {
  const t = useTranslations("howWeWork");

  return (
    <div className="max-h-screen space-y-0 md:space-y-2 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-[#ffc400] text-[16px] md:text-2xl lg:text-3xl font-bold">
        {t("title")}
      </h1>

      <p className="w-full lg:w-[70%] mx-auto block text-[10px] md:text-[17px] lg:text-[20px] text-center  ">
        {t("subtitle")}
      </p>

      <div className="w-full">
        <Steps />
      </div>
    </div>
  );
}
