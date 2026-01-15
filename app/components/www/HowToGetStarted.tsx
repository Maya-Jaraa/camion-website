"use client";

import React from "react";
import GetStartedSteps from "../ui/GetStartedSteps";
import { useTranslations } from "next-intl";

const HowToGetStarted: React.FC = () => {
  const t = useTranslations("howToGetStarted");

  return (
    <div className="my-15 space-y-5 flex flex-col items-center">
      <h1 className="text-[#ffc400] text-xl md:text-2xl lg:text-4xl font-bold">
        {t("title")}
      </h1>

      <p className="text-sm md:text-[16px] mt-2 mb-20 lg:text-lg text-center text-black">
        {t("subtitle")}
      </p>

      <GetStartedSteps />
    </div>
  );
};

export default HowToGetStarted;
