"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Reveal from "./Reveal";

export default function Steps() {
  const t = useTranslations("steps");
  const locale = useLocale();
  const isArabic = locale === "ar";
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-y-10 lg:gap-x-8 items-center">
        {/* STEP 1 */}
        <Reveal animation="fade-right">
          <div className="flex flex-col items-center text-center max-w-xs mx-auto">
            <h2 className="text-[18px] md:text-[25px] lg:text-[40px] font-bold text-[#FFC400]">
              {t("step1_number")}
            </h2>
            <p className="text-[12px] md:text-base font-semibold text-gray-600 mt-1">
              {t("step1_title")}
            </p>
            <p className="text-black text-[11px] md:text-sm mt-1">
              {t("step1_desc")}
            </p>
          </div>
        </Reveal>

        <div className="hidden lg:block">
          <div className="relative top-10 w-[120px] h-[130px]">
            <Image
              src="/images/Vector.svg"
              alt="vector"
              fill
              className="object-contain object-left lg:rotate-[-10deg] rtl:scale-x-[-1] rtl:lg:rotate-[10deg]"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <Reveal
            animation={isArabic ? "fade-right" : "fade-left"}
            delay={500}
          >
            <div className="relative top-10 w-full h-[130px]">
              <Image
                src="/images/types/track1.svg"
                alt="vector"
                fill
                className="object-contain  rtl:scale-x-[-1]"
              />
            </div>
          </Reveal>
        </div>

        {/* STEP 2 */}
        <div className="hidden lg:block"></div>
        <Reveal
          animation="fade-right"
          delay={500}
        >
          <div className="flex flex-col items-center text-center max-w-xs mx-auto">
            <h2 className="text-[18px] md:text-[25px] lg:text-[40px] font-bold text-[#FFC400]">
              {t("step2_number")}
            </h2>
            <p className="font-semibold text-[12px] md:text-base text-gray-600 mt-1">
              {t("step2_title")}
            </p>
            <p className="text-black text-[11px] md:text-sm mt-1">
              {t("step2_desc")}
            </p>
          </div>
        </Reveal>

        <div className="hidden lg:block">
          <div className="relative top-10 w-[120px] h-[130px]">
            <Image
              src="/images/Vector.svg"
              alt="vector"
              fill
              className="object-contain object-left lg:rotate-[-10deg] rtl:scale-x-[-1] rtl:lg:rotate-[10deg]"
            />
          </div>
        </div>

        {/* STEP 3 */}
        <div className="hidden lg:block"></div>
        <div className="hidden lg:block"></div>
        <Reveal
          animation="fade-right"
          delay={700}
        >
          <div className="flex flex-col items-center text-center max-w-xs mx-auto">
            <h2 className="text-[18px] md:text-[25px] lg:text-[40px] font-bold text-[#FFC400]">
              {t("step3_number")}
            </h2>
            <p className="font-semibold text-[12px] md:text-base text-gray-600 mt-1">
              {t("step3_title")}
            </p>
            <p className="text-black text-[11px] md:text-sm mt-1">
              {t("step3_desc")}
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
