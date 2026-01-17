import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import "../globals.css";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import { Cairo, Inter } from "next/font/google";
export const metadata: Metadata = {
  title: "Camion Website",
  description: "",
};
const arabicFont = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ar",
  display: "swap",
});

const latinFont = Inter({
  subsets: ["latin"],
  variable: "--font-en",
  display: "swap",
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const messages = (await import(`../../messages/${locale}.json`)).default;
  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <body className={`${arabicFont.variable} ${latinFont.variable}`}>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
        >
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
