"use client";
import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

type SectionType = "vision" | "mission" | "goals";

export default function Vision() {
  const t = useTranslations("about");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const sections: Record<SectionType, { title: string; text: string }> = {
    vision: {
      title: t("visionTitle"),
      text: t("visionText"),
    },
    mission: {
      title: t("missionTitle"),
      text: t("missionText"),
    },
    goals: {
      title: t("goalsTitle"),
      text: t("goalsText"),
    },
  };

  const [selected, setSelected] = useState<SectionType>("vision");

  return (
    <div
      className={`w-full mb-10 grid grid-cols-1   lg:grid-cols-2  bg-white  overflow-hidden shadow-md`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* LEFT SIDE */}
      <div className="relative bg-white  flex flex-col ">
        {(Object.keys(sections) as SectionType[]).map((item) => (
          <button
            key={item}
            onClick={() => setSelected(item)}
            className={`p-4    transition-all ${
              selected === item
                ? " bg-[#fcc400] shadow font-semibold text-white"
                : "text-[#7F8184] hover:bg-[#7F8184]/20"
            } ${isArabic ? "text-right" : "text-left"}`}
          >
            <h3 className="text-[15px] md:text-lg">{sections[item].title}</h3>
            <p className="text-[8px] md:text-sm mt-1 opacity-90">
              {sections[item].text}
            </p>
          </button>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="relative h-60 md:h-full bg-gray-900 text-white p-10 flex items-center">
        <Image
          src="/images/casey-max-103018131459-2.jpg"
          alt="About Background"
          fill
          className={`object-cover opacity-40 ${
            isArabic ? "scale-x-[-1]" : ""
          }`}
        />

        <div className="relative z-10">
          <h3 className="text-[18px] md:text-xl font-bold mb-4">
            {sections[selected].title}
          </h3>
          <p className="max-w-md leading-relaxed text-[15px] md:text-lg">
            {sections[selected].text}
          </p>
        </div>
      </div>
    </div>
  );
}
