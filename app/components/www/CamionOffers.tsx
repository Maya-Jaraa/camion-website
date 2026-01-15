"use client";

import React from "react";
import Card from "../ui/Card";
import { useTranslations } from "next-intl";

const CamionServices: React.FC = () => {
  const t = useTranslations("camionOffersCarriers");

  return (
    <div className="my-15 flex flex-col items-center space-y-7">
      <h1 className="text-[#ffc400] text-xl md:text-2xl lg:text-4xl text-center font-bold">
        {t("title")}
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-0 gap-3 md:gap-1 lg:gap-3 mx-6 w/full">
        <Card>
          <div className="flex flex-col h/full items-center justify-center">
            <h3 className="font-bold text-[#7F8184] h/[4rem] px-3.5 text-sm md:text-[16px] lg:text-lg">
              {t("service1_title")}
            </h3>
            <p className="text-[#7F8184] px-3.5 text-xs md:text-[14px] lg:text-[16px]">
              {t("service1_desc")}
            </p>
          </div>
        </Card>

        <Card>
          <div className="flex flex-col h/full items-center justify-center">
            <h3 className="font-bold text-[#7F8184] h/[4rem] px-3.5 text-sm md:text-[16px] lg:text-lg">
              {t("service2_title")}
            </h3>
            <p className="text-[#7F8184] px-3.5 text-xs md:text-[14px] lg:text-[16px]">
              {t("service2_desc")}
            </p>
          </div>
        </Card>

        <Card>
          <div className="flex flex-col h/full items-center justify-center">
            <h3 className="font-bold text-[#7F8184] h/[4rem] px-3.5 text-sm md:text-[16px] lg:text-lg">
              {t("service3_title")}
            </h3>
            <p className="text-[#7F8184] px-3.5 text-xs md:text-[14px] lg:text-[16px]">
              {t("service3_desc")}
            </p>
          </div>
        </Card>

        <Card>
          <div className="flex flex-col h/full items-center justify-center ">
            <h3 className="font-bold text-[#7F8184] h/[4rem] px-3.5 text-sm md:text-[16px] lg:text-lg">
              {t("service4_title")}
            </h3>
            <p className="text-[#7F8184] px-3.5 text-xs md:text-[14px] lg:text-[16px]">
              {t("service4_desc")}
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CamionServices;
