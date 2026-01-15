"use client";

import React from "react";
import Title from "../ui/Title";
import { StatsSwiper } from "../ui/StatsSwiper";
import { useTranslations } from "next-intl";

const CamionInNumbers: React.FC = () => {
  const t = useTranslations("camionInNumbers");

  const statsData = [
    { value: t("stat1_value"), text: t("stat1_text") },
    { value: t("stat2_value"), text: t("stat2_text") },
    { value: t("stat3_value"), text: t("stat3_text") },
    { value: t("stat4_value"), text: t("stat4_text") },
    { value: t("stat5_value"), text: t("stat5_text") },
  ];

  return (
    <div className="md:my-15 my-5">
      <Title
        label={t("title_label")}
        text={t("title_text")}
      />
      <StatsSwiper items={statsData} />
    </div>
  );
};

export default CamionInNumbers;
