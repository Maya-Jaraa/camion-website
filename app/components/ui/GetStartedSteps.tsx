"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import Reveal from "./Reveal";

export default function GetStartedSteps() {
  const t = useTranslations("howToGetStarted");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-6 lg:gap-y-12 lg:gap-x-8 items-center px-4">
      {/* STEP 1 */}
      <Reveal animation="fade-right">
        <div className="flex flex-col items-center text-center max-w-xs mx-auto rounded-md p-3 lg:p-0 border border-[#ffc400] lg:border-0">
          <h2 className="text-lg md:text-xl font-bold text-[#FFC400]">
            {t("step1_number")}
          </h2>
          <p className="font-semibold text-gray-600 mt-1 text-sm md:text-lg">
            {t("step1_title")}
          </p>
          <p className="text-black mt-1 text-xs md:text-base">
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
            className={`
              object-contain object-left rotate-[5deg]
              ${isArabic ? "scale-x-[-1] -rotate-[5deg]" : ""}
            `}
          />
        </div>
      </div>

      <div className="hidden lg:block"></div>
      <div className="hidden lg:block">
        <Reveal
          animation={isArabic ? "fade-right" : "fade-left"}
          delay={500}
        >
          <div className="relative top-10 w-full h-[130px]  ">
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
        <div className="flex flex-col items-center text-center max-w-xs mx-auto rounded-md p-3 lg:p-0 border border-[#ffc400] lg:border-0">
          <h2 className="text-lg md:text-xl font-bold text-[#FFC400]">
            {t("step2_number")}
          </h2>
          <p className="font-semibold text-gray-600 mt-1 text-sm md:text-lg">
            {t("step2_title")}
          </p>
          <p className="text-black mt-1 text-xs md:text-base">
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
            className={`
              object-contain object-left rotate-[5deg]
              ${isArabic ? "scale-x-[-1] -rotate-[5deg]" : ""}
            `}
          />
        </div>
      </div>

      <div className="hidden lg:block"></div>

      {/* STEP 3 */}
      <div className="hidden lg:block"></div>
      <div className="hidden lg:block"></div>
      <Reveal
        animation="fade-right"
        delay={700}
      >
        <div className="flex flex-col items-center text-center max-w-xs mx-auto rounded-md p-3 lg:p-0 border border-[#ffc400] lg:border-0">
          <h2 className="text-lg md:text-xl font-bold text-[#FFC400]">
            {t("step3_number")}
          </h2>
          <p className="font-semibold text-gray-600 mt-1 text-sm md:text-lg">
            {t("step3_title")}
          </p>
          <p className="text-black mt-1 text-xs md:text-base">
            {t("step3_desc")}
          </p>
        </div>
      </Reveal>

      <div className="hidden lg:block">
        <div className="relative top-10 w-[120px] h-[130px]">
          <Image
            src="/images/Vector.svg"
            alt="vector"
            fill
            className={`
              object-contain object-left rotate-[5deg]
              ${isArabic ? "scale-x-[-1] -rotate-[5deg]" : ""}
            `}
          />
        </div>
      </div>

      {/* STEP 4 */}
      <div className="hidden lg:block"></div>
      <div className="hidden lg:block"></div>
      <div className="hidden lg:block"></div>
      <Reveal
        animation="fade-right"
        delay={800}
      >
        <div className="flex flex-col items-center text-center max-w-xs mx-auto rounded-md p-3 lg:p-0 border border-[#ffc400] lg:border-0">
          <h2 className="text-lg md:text-xl font-bold text-[#FFC400]">
            {t("step4_number")}
          </h2>
          <p className="font-semibold text-gray-600 mt-1 text-sm md:text-lg">
            {t("step4_title")}
          </p>
          <p className="text-black mt-1 text-xs md:text-base">
            {t("step4_desc")}
          </p>
        </div>
      </Reveal>
    </div>
  );
}
