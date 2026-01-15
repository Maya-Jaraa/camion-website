"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const ListCard = ({ src, label }: { src: string; label: string }) => (
  <div className="transition-transform duration-300 ease-in-out hover:scale-105 w-[30%] md:w-[25%] flex flex-col items-center space-y-3 justify-center border-1 p-2 border-[#ffc400] rounded-md md:p-4">
    <Image
      src={src}
      alt={label}
      width={160}
      height={160}
      className="object-contain"
    />
    <span className="text-[#7F8184] text-[9px] md:text-base font-semibold">
      {label}
    </span>
  </div>
);

export default function TruckTypes() {
  const t = useTranslations("truckTypes");

  return (
    <div className="mb-30 text-center space-y-1.5 md:space-y-2 flex flex-col items-center justify-center md:gap-1.5">
      <h1 className="text-[#ffc400] text-[16px] md:text-2xl lg:text-3xl f font-bold">
        {t("title")}
      </h1>

      <p className="text-[11px] md:text-xl text-[#7F8184]">{t("subtitle")}</p>

      <div className="w-full flex space-x-2.5 md:space-x-7 justify-center">
        <ListCard
          src="/images/types/track3.svg"
          label={t("truck1")}
        />
        <ListCard
          src="/images/types/track2.svg"
          label={t("truck2")}
        />
        <ListCard
          src="/images/types/track1.svg"
          label={t("truck3")}
        />
      </div>

      <Link
        href="/truck-size"
        className="transition-transform duration-300 ease-in-out hover:scale-105 text-[10px] md:text-base w-[30%] md:w-[20%] py-1.5 rounded-md text-lg text-white font-semibold bg-[#ffc400]"
      >
        {t("button")}
      </Link>
    </div>
  );
}
