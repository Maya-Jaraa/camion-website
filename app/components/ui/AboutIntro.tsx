"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutIntro() {
  const t = useTranslations("about");
  const locale = useLocale();
  const isArabic = locale === "ar";
  return (
    // <section className="relative  bg-white py-10 overflow-hidden">
    //   <Image
    //     src="/images/about.svg"
    //     alt=""
    //     width={1000}
    //     height={400}
    //     className={`
    //        object-cover
    //       ${isArabic ? "object-left scale-x-[-1]" : "object-right"}
    //     `}
    //   />

    //   <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-10 flex justify-end items-center md:top-15">
    //     <div className="max-w-md text-white">
    //       <h2 className="font-bold text-sm md:text-2xl mb-3">CAMION</h2>

    //       <p className="leading-relaxed text-xs md:text-xl mb-2">
    //         {t("title")}
    //       </p>

    //       <p className="leading-relaxed text-xs md:text-xl">{t("desc")}</p>
    //     </div>
    //   </div>
    // </section>
    <section
      className={`
    relative w-full min-h-[30vh] md:min-h-[88vh] bg-white
    bg-no-repeat bg-cover  
   
  `}
      style={{
        backgroundImage: "url('/images/about.svg')",
      }}
    >
      <div
        className={` relative z-10 md:top-15  lg:top-40 top-5  px-15  flex ${
          isArabic ? "justify-start" : "justify-end"
        } items-center h-full`}
      >
        <div className=" text-white w-[60%] md:[80%] lg:w-[60%]">
          <h2 className="font-bold text-[10px] md:text-xl mb-3">CAMION</h2>
          <p className="leading-relaxed text-[6px] md:text-lg mb-2">
            {t("title")}
          </p>
          <p className="leading-relaxed text-[6px] md:text-lg">{t("desc")}</p>
        </div>
      </div>
    </section>
  );
}
