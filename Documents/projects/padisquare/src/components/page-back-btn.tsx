"use client";

import Image from "next/image";
import backIcon from "../../public/images/page-back-icon.svg";
import { montserrat } from "@/styles/fonts";
import { useRouter } from "next/navigation";

const BackBtn = ({pathUrl, pageMenuTitle}: {pathUrl?: string; pageMenuTitle: string;}) => {

    const router = useRouter();


  return (
    <div className="w-full container mx-auto pointer-events-auto cursor-pointer">
      <button
        onClick={() => {
          if (pathUrl) {
            router.push(pathUrl);
          }  else {
            router.back();
          }
        }}
        className="bg-transparent cursor-pointer px-0.5 m-0 rounded-lg w-full min-w-0 min-h-0 flex gap-0.5 items-center justify-between capitalize"
      >
        <Image src={backIcon} alt="back icon" width={15} height={20} className="w-3.75 h-7.5"/>
        <span className={`${montserrat.variable} m-0 p-0 font-montserrat font-semibold text-end text-sm sm:text-base text-[#1E1E1E] antialiased`}>{pageMenuTitle}</span>
      </button>

    </div>
  );
};

export default BackBtn;
