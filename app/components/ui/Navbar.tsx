"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { useState, useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navItems = [
  { href: "/", key: "home" },
  { href: "/shippers", key: "shippers" },
  { href: "/carriers", key: "carriers" },
  { href: "/truck-size", key: "truckSize" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const t = useTranslations();
  const locale = useLocale();
  const isAr = locale === "ar";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // normalize path for active state (ONLY ADDITION)
  const normalizePath = (path: string) => {
    if (path === "/") return "/";
    return path.replace(/^\/(ar|en)/, "");
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener?.("touchstart", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`w-full  ${
          isAr ? "pl-0 pr-3 lg:pl-0 lg:pr-8" : "pr-0 pl-3 lg:pr-0 lg:pl-8"
        } gap-2 flex items-center justify-between bg-white h-[2.5rem] md:h-[4rem] shadow-sm border-b border-gray-200 relative z-50`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href={`/${locale}`}>
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={60}
              height={60}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-3 lg:gap-8 text-gray-600 text-[14px] lg:text-[15px]">
          {navItems.map((item) => {
            const itemPath = `/${locale}${item.href === "/" ? "" : item.href}`;

            const currentPath = normalizePath(pathname);
            const targetPath = normalizePath(item.href);

            const isActive =
              currentPath === targetPath ||
              (targetPath !== "/" && currentPath.startsWith(targetPath));

            return (
              <Link
                key={item.href}
                href={itemPath}
                className={`${
                  isActive
                    ? "text-[#FFC400] font-semibold"
                    : "hover:text-[#FFC400]"
                } transition text-nowrap`}
              >
                {t(`navbar.${item.key}`)}
              </Link>
            );
          })}
        </div>

        {/* Right Section - Desktop */}
        <div
          className={`hidden lg:flex justify-around gap-4 items-center w-[35%] xl:w-[25%] h-full bg-[#ffc400] ${
            isAr
              ? "[clip-path:polygon(0_0,100%_0,75%_100%,0_100%)] pl-5 pr-10"
              : "[clip-path:polygon(0_0,100%_0,100%_100%,20%_100%)] pl-10 pr-5"
          }`}
        >
          <Link
            href={`/${locale}/get-started`}
            className="text-nowrap flex items-center text-[#FFC400] bg-white font-semibold px-6 py-2 text-[14px] lg:text-[15px] rounded-[10px] shadow-sm hover:bg-[#5a470949] hover:text-white transition"
          >
            {t("navbar.getStarted")}
          </Link>
          <LanguageSwitcher />
        </div>

        {/* Mobile Right Section */}
        <div className="lg:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-[#FFC400] transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        ref={menuRef}
        className={`fixed top-0 ${
          isAr ? "left-0" : "right-0"
        } h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen
            ? "translate-x-0"
            : isAr
            ? "-translate-x-full"
            : "translate-x-full"
        }`}
        dir={isAr ? "rtl" : "ltr"}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-[#FFC400]">
            <Link
              href={`/${locale}`}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center"
            >
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={50}
                height={50}
                className="cursor-pointer"
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-gray-900 transition"
              aria-label="Close menu"
            >
              <HiX className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4">
            <nav className="flex flex-col">
              {navItems.map((item) => {
                const itemPath = `/${locale}${
                  item.href === "/" ? "" : item.href
                }`;

                const currentPath = normalizePath(pathname);
                const targetPath = normalizePath(item.href);

                const isActive =
                  currentPath === targetPath ||
                  (targetPath !== "/" && currentPath.startsWith(targetPath));

                return (
                  <Link
                    key={item.href}
                    href={itemPath}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-6 py-4 text-base font-medium transition ${
                      isActive
                        ? `text-[#FFC400] bg-[#FFC400]/10 ${
                            isAr
                              ? "border-l-4 border-[#FFC400]"
                              : "border-r-4 border-[#FFC400]"
                          }`
                        : "text-gray-700 hover:text-[#FFC400] hover:bg-gray-50"
                    } ${isAr ? "text-right" : "text-left"}`}
                  >
                    {t(`navbar.${item.key}`)}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <Link
              href={`/${locale}/get-started`}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center bg-[#FFC400] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#e0b000] transition"
            >
              {t("navbar.getStarted")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
