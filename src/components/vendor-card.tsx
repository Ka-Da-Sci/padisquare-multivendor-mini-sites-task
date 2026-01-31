"use client";

import { montserrat, poppins } from "@/styles/fonts";
import { VendorMetaType } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

const VendorPreviewCard = ({ vendor }: { vendor: VendorMetaType }) => {
  return (
    <Link
      href={`/site/${vendor.slug}`}
      className="text-primary text-xl group"
    >
      <div
        className={`${montserrat.variable} ${poppins.variable} vendor-card overflow-clip rounded-lg shadow-none border border-solid border-[#D5D5D5] w-full h-full flex flex-col items-center justify-stretch`}
      >
        <div
          className={`p-2 bg-[#1E1E1E] vendor-card-top h-fit overflow-hidden relative w-full flex justify-center rounded-t-lg`}
        >
          <div className="m-3 h-auto max-sm:max-h-78.75 sm:h-37.5 xl:h-50 rounded-lg overflow-hidden flex flex-col justify-start sm:justify-center">
            <Image
              width={400}
              height={400}
              src={`${vendor?.logo}`}
              alt={vendor?.name}
              className="w-auto max-w-full rounded-lg"
            />
          </div>
          <div
            className={`hidden group-hover:flex z-20 justify-center items-center w-full h-full absolute top-0 left-0 bg-[#1E1E1E]/70`}
          >
            <div
              className="rounded-lg bg-brand-primary px-5 py-2"
            >
              <p className="text-white font-inter font-normal text-base antialiased capitalize">
                Explore
              </p>
            </div>
          </div>
        </div>
        <div className="w-full text-left flex flex-col items-start px-4 py-3 gap-4 bg-background overflow-clip">
          {/* <h2 className="text-left text-[#0053FA] bg-[#E1EBFF] font-poppins font-normal text-sm sm:text-base antialiased rounded-lg px-2 py-1">
          {vendor.category}
        </h2> */}
          <p className="text-left text-[#1E1E1E] font-montserrat font-bold text-sm sm:text-base lg:text-lg antialiased line-clamp-2">
            {vendor.name}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default VendorPreviewCard;
