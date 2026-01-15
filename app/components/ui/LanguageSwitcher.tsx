"use client";

import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FaGlobe } from "react-icons/fa6";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0, right: 0 });
  const isAr = locale === "ar";

  // Construct new path with new locale
  const buildPath = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    return segments.join("/");
  };

  // Calculate dropdown position
  useEffect(() => {
    if (open && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const dropdownWidth = 128; // w-32 = 128px
      
      if (isAr) {
        // للعربي: محاذاة لليمين من الزر (الزر على اليمين)
        // نستخدم right لتحديد المسافة من اليمين - محاذاة لليمين من الزر
        const rightPosition = window.innerWidth - rect.right;
        // التأكد من أن القائمة لا تخرج عن الشاشة
        const safeRight = Math.max(0, Math.min(rightPosition, window.innerWidth - dropdownWidth));
        setPosition({
          top: rect.bottom + 8,
          left: 0,
          right: safeRight,
        });
      } else {
        // للإنجليزي: محاذاة لليسار من الزر (الزر على اليسار)
        const leftPosition = rect.right - dropdownWidth;
        // التأكد من أن القائمة لا تخرج عن الشاشة
        const safeLeft = Math.max(0, Math.min(leftPosition, window.innerWidth - dropdownWidth));
        setPosition({
          top: rect.bottom + 8,
          left: safeLeft,
          right: 0,
        });
      }
    }
  }, [open, isAr]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        !dropdownRef.current?.contains(event.target) &&
        !buttonRef.current?.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      <div className="relative">
        <button
          ref={buttonRef}
          onClick={() => setOpen(!open)}
          className="
            w-8 h-8 md:w-10 md:h-10 rounded-full 
            flex items-center justify-center
            hover:bg-[#5a470949] transition 
          "
          aria-label="Change language"
          aria-expanded={open}
        >
          <FaGlobe className="w-4 h-4 md:w-5 md:h-5 text-gray-700 lg:text-white" />
        </button>
      </div>

      {/*  NAWAR CLIP
        استخدام createPortal لحل مشكلة overflow/clip:
        - الـ Navbar أو الـ parent container كان عنده overflow: hidden أو clip
        - هذا كان يمنع القائمة المنسدلة من الظهور بشكل صحيح
        - createPortal ينشئ القائمة مباشرة في document.body بدلاً من داخل الـ parent
        - بهذه الطريقة القائمة تظهر فوق كل شيء ولا تتأثر بـ overflow/clip
      */}
      {open &&
        typeof window !== "undefined" &&
        createPortal(
          <div
            ref={dropdownRef}
            className="fixed w-32 bg-white shadow-2xl rounded-md border border-gray-200 py-2 flex flex-col z-[9999]"
            style={{
              top: `${position.top}px`,
              [isAr ? "right" : "left"]: isAr
                ? `${position.right}px`
                : `${position.left}px`,
            }}
          >
            <Link
              href={buildPath("en")}
              className="
                px-4 py-2 hover:bg-gray-100 text-sm
                flex justify-between items-center
              "
              onClick={() => setOpen(false)}
            >
              English {locale === "en" && "✓"}
            </Link>

            <Link
              href={buildPath("ar")}
              className="
                px-4 py-2 hover:bg-gray-100 text-sm
                flex justify-between items-center
              "
              onClick={() => setOpen(false)}
            >
              العربية {locale === "ar" && "✓"}
            </Link>
          </div>,
          document.body
        )}
    </>
  );
}
