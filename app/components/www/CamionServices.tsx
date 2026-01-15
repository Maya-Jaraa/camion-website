// "use client";

// import React from "react";
// import Title from "../ui/Title";
// import Card from "../ui/Card";
// import { LuMessageCircleDashed } from "react-icons/lu";
// import { useTranslations } from "next-intl";

// const CamionServices: React.FC = () => {
//   const t = useTranslations("camionServices");

//   return (
//     <div className="md:my-15 my-5 ">
//       <Title label={t("title")} text={t("subtitle")} />

//       <p className="text-[#6D6D6D] w-[80%] lg:w-[70%] mx-auto block text-[10px] md:text-[14px] lg:text-[16px] text-center my-2 md:my-4">
//         {t("description")}
//       </p>

//       <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-1 lg:gap-3 mx-6">
//         <Card>
//           <LuMessageCircleDashed className="text-[#7F8184] w-4 h-4 md:w-7 md:h-7 lg:w-9.5 lg:h-9.5" />
//           <h3 className="font-bold text-[#FFC400] md:h-[3rem] text-[14px]  lg:text-[17px]">
//             {t("service1_title")}
//           </h3>
//           <p className="text-[#7F8184] text-[11px] md:text-[13px] lg:text-[15px]">
//             {t("service1_desc")}
//           </p>
//         </Card>

//         <Card>
//           <LuMessageCircleDashed className="text-[#7F8184] w-4 h-4 md:w-7 md:h-7 lg:w-9.5 lg:h-9.5" />
//           <h3 className="font-bold text-[#FFC400] md:h-[3rem] text-[14px]  lg:text-[17px]">
//             {t("service2_title")}
//           </h3>
//           <p className="text-[#7F8184] text-[11px] md:text-[13px] lg:text-[15px]">
//             {t("service2_desc")}
//           </p>
//         </Card>

//         <Card>
//           <LuMessageCircleDashed className="text-[#7F8184]  w-4 h-4 md:w-7 md:h-7 lg:w-9.5 lg:h-9.5" />
//           <h3 className="font-bold text-[#FFC400] md:h-[3rem] text-[14px]  lg:text-[17px]">
//             {t("service3_title")}
//           </h3>
//           <p className="text-[#7F8184] text-[11px] md:text-[13px] lg:text-[15px]text-[11px] md:text-[13px] lg:text-[15px]">
//             {t("service3_desc")}
//           </p>
//         </Card>

//         <Card>
//           <LuMessageCircleDashed className="text-[#7F8184] w-4 h-4 md:w-7 md:h-7 lg:w-9.5 lg:h-9.5" />
//           <h3 className="font-bold text-[#FFC400] md:h-[3rem] text-[14px]  lg:text-[17px]">
//             {t("service4_title")}
//           </h3>
//           <p className="text-[#7F8184] text-[11px] md:text-[13px] lg:text-[15px]">
//             {t("service4_desc")}
//           </p>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default CamionServices;
"use client";

import React from "react";
import Title from "../ui/Title";
import Card from "../ui/Card";
import { LuMessageCircleDashed } from "react-icons/lu";
import { useTranslations } from "next-intl";

const CamionServices: React.FC = () => {
  const t = useTranslations("camionServices");

  const services = [
    {
      title: t("service1_title"),
      desc: t("service1_desc"),
    },
    {
      title: t("service2_title"),
      desc: t("service2_desc"),
    },
    {
      title: t("service3_title"),
      desc: t("service3_desc"),
    },
    {
      title: t("service4_title"),
      desc: t("service4_desc"),
    },
  ];

  return (
    <div className="md:my-15 my-5">
      <Title label={t("title")} text={t("subtitle")} />

      <p className="text-[#6D6D6D] w-[80%] lg:w-[70%] mx-auto block text-[10px] md:text-[14px] lg:text-[16px] text-center my-2 md:my-4">
        {t("description")}
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-1 lg:gap-3 mx-6">
        {services.map((service, index) => (
          <Card key={index}>
            <LuMessageCircleDashed className="text-[#7F8184] w-4 h-4 md:w-7 md:h-7 lg:w-9.5 lg:h-9.5" />

            <h3 className="font-bold text-[#FFC400] md:h-[3rem] text-[12px] ms:text-[13px] lg:text-[17px]">
              {service.title}
            </h3>

            <p className="text-[#7F8184] text-[10px] ms:text-[11px] md:text-[13px] lg:text-[15px]">
              {service.desc}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CamionServices;
