"use client";

import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Reveal from "./Reveal";
import emailjs from "emailjs-com";
const ContactForm: React.FC = () => {
  const t = useTranslations("contact");
  const tAlerts = useTranslations("alerts");
  const locale = useLocale();
  const isArabic = locale === "ar";
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("SERVICE_ID", "TEMPLATE_ID", e.currentTarget, "PUBLIC_KEY")
      .then(() => {
        alert("تم إرسال الرسالة بنجاح");
        e.currentTarget.reset();
      })
      .catch(() => {
        alert("تعذر الإرسال، حاول لاحقًا");
      })
      .finally(() => setLoading(false));
  };
  return (
    <Reveal animation={isArabic ? "fade-left" : "fade-right"}>
      <form
        onSubmit={handleSubmit}
        className={`w-full mx-auto max-w-xl space-y-4 ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        <div className="flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-4">
          <input
            name="firstName"
            type="text"
            placeholder={t("firstName")}
            required
            className={`w-full md:flex-1 border border-[#fcc400] rounded-md px-3 py-2 focus:border-[#727272] focus:outline-none ${
              isArabic ? "text-right" : "text-left"
            }`}
          />

          <input
            name="lastName"
            type="text"
            placeholder={t("lastName")}
            required
            className={`w-full md:flex-1 border border-[#fcc400] rounded-md px-3 py-2 focus:border-[#727272] focus:outline-none ${
              isArabic ? "text-right" : "text-left"
            }`}
          />
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-4">
          <input
            name="email"
            type="email"
            placeholder={t("email")}
            required
            className={`w-full md:flex-1 border border-[#fcc400] rounded-md px-3 py-2 focus:border-[#727272] focus:outline-none ${
              isArabic ? "text-right" : "text-left"
            }`}
          />

          <input
            name="phone"
            type="tel"
            placeholder={t("phone")}
            required
            className={`w-full md:flex-1 border border-[#fcc400] rounded-md px-3 py-2 focus:border-[#727272] focus:outline-none ${
              isArabic ? "text-right" : "text-left"
            }`}
          />
        </div>

        <textarea
          name="message"
          placeholder={t("message")}
          required
          className={`w-full h-32 border border-[#fcc400] rounded-md px-3 py-2 resize-none focus:border-[#727272] focus:outline-none ${
            isArabic ? "text-right" : "text-left"
          }`}
        />
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#fcc400] text-white font-semibold py-3 rounded-md hover:opacity-90 transition disabled:opacity-50"
        >
          {loading ? tAlerts("sending") : t("send")}
        </button>
      </form>
    </Reveal>
  );
};

export default ContactForm;
