"use client";

import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Reveal from "./Reveal";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  company?: string; // honeypot
};

const ContactForm: React.FC = () => {
  const t = useTranslations("contact");
  const tAlerts = useTranslations("alerts");
  const locale = useLocale();
  const isArabic = locale === "ar";
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      company: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setLoading(true);

    try {
      // EmailJS يحتاج HTMLFormElement أو object حسب طريقتك.
      // هنا نستخدم send (object) بدل sendForm (form element)
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          message: data.message,
          company: data.company || "",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      alert(tAlerts("success"));
      reset(); // ✅ Reset مؤكد لكل الحقول
    } catch (error) {
      console.error(error);
      alert(tAlerts("error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Reveal animation={isArabic ? "fade-left" : "fade-right"}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`w-full mx-auto max-w-xl space-y-4 ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        <div className="flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-4">
          <input
            type="text"
            placeholder={t("firstName")}
            className={`w-full md:flex-1 border border-[#fcc400] rounded-md px-3 py-2 focus:border-[#727272] focus:outline-none ${
              isArabic ? "text-right" : "text-left"
            }`}
            {...register("firstName", { required: true })}
          />

          <input
            type="text"
            placeholder={t("lastName")}
            className={`w-full md:flex-1 border border-[#fcc400] rounded-md px-3 py-2 focus:border-[#727272] focus:outline-none ${
              isArabic ? "text-right" : "text-left"
            }`}
            {...register("lastName", { required: true })}
          />
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-4">
          <input
            type="email"
            placeholder={t("email")}
            className={`w-full md:flex-1 border border-[#fcc400] rounded-md px-3 py-2 focus:border-[#727272] focus:outline-none ${
              isArabic ? "text-right" : "text-left"
            }`}
            {...register("email", { required: true })}
          />

          <input
            type="tel"
            placeholder={t("phone")}
            className={`w-full md:flex-1 border border-[#fcc400] rounded-md px-3 py-2 focus:border-[#727272] focus:outline-none ${
              isArabic ? "text-right" : "text-left"
            }`}
            {...register("phone", { required: true })}
          />
        </div>

        <textarea
          placeholder={t("message")}
          className={`w-full h-32 border border-[#fcc400] rounded-md px-3 py-2 resize-none focus:border-[#727272] focus:outline-none ${
            isArabic ? "text-right" : "text-left"
          }`}
          {...register("message", { required: true })}
        />

        {/* Honeypot */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          {...register("company")}
        />

        {/* (اختياري) رسائل أخطاء بسيطة */}
        {(errors.firstName ||
          errors.lastName ||
          errors.email ||
          errors.phone ||
          errors.message) && (
          <p className="text-sm text-red-600">
            {tAlerts("fillRequired") /* ضيفها بالترجمة إن أحببت */}
          </p>
        )}

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
