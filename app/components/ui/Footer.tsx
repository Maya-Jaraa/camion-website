"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <footer
      className={`bg-[#FFEBA9]  w-full  text-gray-800 py-10 px-6 ${
        isAr ? "text-right" : "text-left"
      }`}
    >
      <div className="mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 items-start">
        {/* LEFT: Logo + description */}
        <div className="flex flex-col gap-3 md:gap-4">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={120}
            height={50}
            className="opacity-95 w-20 md:w-32"
          />

          <p className="text-xs md:text-sm lg:text-base text-gray-700">
            {t("aboutText")}
          </p>

          {/* Social icons */}
          <div className="flex gap-4 text-base md:text-lg text-gray-700">
            <a href="#" className="hover:text-[#fcc400]">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-[#fcc400]">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#fcc400]">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#fcc400]">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold text-sm md:text-base lg:text-lg mb-3">
            {t("company")}
          </h3>
          <ul className="flex flex-col gap-2 text-xs md:text-sm lg:text-base">
            <li>
              <Link href={`/${locale}/about`} className="hover:text-[#fcc400]">
                {t("aboutUs")}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/contact`}
                className="hover:text-[#fcc400]"
              >
                {t("contactUs")}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/truck-size`}
                className="hover:text-[#fcc400]"
              >
                {t("truckSize")}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/shippers`}
                className="hover:text-[#fcc400]"
              >
                {t("shippers")}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/carriers`}
                className="hover:text-[#fcc400]"
              >
                {t("carriers")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-sm md:text-base lg:text-lg mb-3">
            {t("contacts")}
          </h3>

          <div className="flex flex-col gap-2 text-xs md:text-sm lg:text-base text-gray-700">
            <p className="text-nowrap">username@gmail.com</p>
            <p className="text-nowrap">0954226574467</p>
            <p className="text-nowrap">0954226574467</p>
            <p className="text-nowrap">{t("address")}</p>
          </div>
        </div>

        {/* Image on right */}
        <div className={`flex ${isAr ? "justify-start" : "justify-end"} sm:col-span-2 lg:col-span-1`}>
          <Image
            src="/images/map.svg"
            alt="World Map"
            width={250}
            height={140}
            className="rounded-md shadow-md w-full max-w-xs md:max-w-sm h-auto"
          />
        </div>
      </div>

      {/* Bottom row */}
      <div className="max-w-7xl mx-auto mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-gray-300 pt-4 text-xs md:text-sm lg:text-base text-gray-700">
        <p>{t("copyright")}</p>

        <div className="flex items-center gap-3 md:gap-4">
          <Link href={`/${locale}/terms`} className="hover:text-[#fcc400]">
            {t("terms")}
          </Link>
          <span>|</span>
          <Link href={`/${locale}/privacy`} className="hover:text-[#fcc400]">
            {t("privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
