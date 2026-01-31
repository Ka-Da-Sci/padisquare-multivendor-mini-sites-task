import Image from "next/image";
import { memo } from "react";

const Logo = () => {
  return (
    <div className="flex items-center w-full max-w-50 will-change-[filter] transition-[filter] duration-300 hover:brightness-110">
      <Image width={200} height={200}
      className='w-fit max-w-full max-h-full' src={"/images/padisquare-logo.png"} alt='logo' />
    </div>
  );
};

export default memo(Logo);
