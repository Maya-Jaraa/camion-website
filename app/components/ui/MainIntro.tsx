import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import Reveal from "./Reveal";

interface MainIntroProps {
  image: string;
  type: string;
}

export default function MainIntro({ image, type }: MainIntroProps) {
  const t = useTranslations(type);
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <div className="w-full h-[12rem] md:h-[25rem] lg:h-[32rem]  relative overflow-hidden">
      <div className="relative w-full h-full bg-white">
        {/* الصورة في الخلفية - تأخذ 70% من العرض */}
        <div
          className={`absolute top-0 bottom-0 w-[60%] ${
            isAr ? "left-0" : "right-0"
          }`}
        >
          <Image
            src={image}
            alt="Hero Truck"
            fill
            priority
            sizes="70vw"
            className="object-cover"
            style={{
              objectPosition: isAr ? "left center" : "right center",
              transform: isAr ? "scaleX(-1)" : "none",
            }}
          />
        </div>

        {/* Gradient Overlay - يبدأ من اليسار/اليمين */}
        <div
          className={`absolute  top-0 h-full w-[80%] ${
            isAr
              ? "bg-gradient-to-l from-white via-white/100 to-transparent"
              : "bg-gradient-to-r from-white via-white/100 to-transparent"
          }`}
        />

        <div
          className={`
                  absolute top-1/2 -translate-y-1/2
                 w-[50%]
                  z-10 max-w-xl
                   ${
                     isAr
                       ? " right-5 md:right-100 lg:right-23 "
                       : " left-5 md:left-10 lg:left-23"
                   }
                  ${isAr ? "text-right " : "text-left"}
                `}
        >
          {" "}
          <Reveal animation="fade-right">
            <h1 className="text-[#FFC400] font-extrabold text-[12px] md:text-2xl lg:text-4xl leading-snug">
              {t("title")}
            </h1>
          </Reveal>
          {type === "truck-size" ? (
            ""
          ) : (
            <Reveal animation="fade-right">
              <p className="text-gray-950 mt-3 text-[7px] md:text-[12px] lg:text-[16px] leading-relaxed max-w-md">
                {t("text")}
              </p>
            </Reveal>
          )}
          {type === "truck-size" ? (
            ""
          ) : (
            <Reveal animation="fade-right">
              <Link
                href={`/${locale}/get-started`}
                className="
                    inline-block bg-[#FFC400] text-white font-semibold
                    px-2 py-1 md:px-6 md:py-1.5 lg:px-8 lg:py-3 rounded-md mt-4
                    shadow hover:bg-[#e0b000] transition
                    text-[8px] md:text-[12px] lg:text-base
                  "
              >
                {t("button")}
              </Link>
            </Reveal>
          )}
        </div>
      </div>
    </div>
  );
}
