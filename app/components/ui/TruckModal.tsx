"use client";

import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useTranslations } from "next-intl";

type Props = {
  open: boolean;
  onClose: () => void;
  truck: {
    name: string;
    width: number;
    height: number;
    length: number;
    image: string;
  };
};

export default function TruckModal({ open, onClose, truck }: Props) {
  if (!open) return null;

  const pdfRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("truckSwiper");

  // DOWNLOAD AS PDF
  const handleDownloadPDF = async () => {
    if (!pdfRef.current) return;

    const canvas = await html2canvas(pdfRef.current, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${truck.name}.pdf`);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: truck.name,
          text: `${t("modal_share_text")}: ${truck.name} – ${t("width")}: ${
            truck.width
          }, ${t("height")}: ${truck.height}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Share canceled");
      }
    } else {
      alert("Sharing is not supported on this device.");
    }
  };

  return (
    <div
      className="fixed inset-0 h-screen bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 px-3"
      onClick={onClose}
    >
      <div
        ref={pdfRef}
        className="bg-white rounded-xl p-4 md:p-6 w-full max-w-[500px] md:max-w-[650px] shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between w-full mb-4">
          <div className="relative w-16 h-10 md:w-20 md:h-25">
            <Image
              src="/images/logo.svg"
              alt="logo"
              fill
              className="object-contain"
            />
          </div>

          <button
            onClick={onClose}
            className="text-[#ff0000] bg-white rounded-full shadow p-1 md:p-2"
          >
            <IoClose size={26} />
          </button>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center mb-6">
          <Image
            src={truck.image}
            alt={truck.name}
            width={600}
            height={400}
            className="w-[80%] md:w-[70%] h-auto object-contain"
          />
        </div>

        {/* NAME */}
        <h2 className="text-center text-[#fcc400] text-xl md:text-2xl font-semibold mb-4">
          {truck.name}
        </h2>

        {/* INFO */}
        <div className="space-y-3 text-[#727272] text-base w-full max-w-[80%] mx-auto">
          <div className="flex justify-between border-b pb-1 font-semibold text-lg md:text-xl">
            <span>{t("width")}</span>
            <span className="text-black">{truck.width}</span>
          </div>

          <div className="flex justify-between border-b pb-1 font-semibold text-lg md:text-xl">
            <span>{t("height")}</span>
            <span className="text-black">{truck.height}</span>
          </div>

          <div className="flex justify-between border-b pb-1 font-semibold text-lg md:text-xl">
            <span>{t("length")}</span>
            <span className="text-black">{truck.length}</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mt-6 gap-3 md:gap-4">
          <button
            onClick={handleDownloadPDF}
            className="px-4 py-2 border hover:bg-[#ffc400] hover:text-white border-[#fcc400] rounded-lg text-[#fcc400] text-sm md:text-base"
          >
            {t("download")}
          </button>

          <button
            onClick={handleShare}
            className="px-4 py-2 border hover:bg-[#ffc400] hover:text-white border-[#fcc400] rounded-lg text-[#fcc400] text-sm md:text-base"
          >
            {t("share")}
          </button>
        </div>
      </div>
    </div>
  );
}
