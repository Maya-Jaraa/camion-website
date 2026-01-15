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
const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-ar",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-en",
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
      <body className={`${cairo.variable} ${inter.variable}`}>
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
