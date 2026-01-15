import React from "react";
import Image from "next/image";

interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className=" lg:w-[20%] w-[70%] rounded-2xl p-[1px] bg-gradient-to-br from-[#FFEBA9] to-[#FFC400] transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="relative rounded-2xl h-[10rem] s:h-[8rem]  md:h-[17rem] lg:h-[20rem] bg-white p-3 md:px-6 flex flex-col space-y-2 md:space-y-4 justify-start overflow-hidden">
        {children}

        <Image
          width={130}
          height={130}
          src="/images/Mask.svg"
          alt="mask"
          className="absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
}
