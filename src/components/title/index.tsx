import React, { ReactNode } from "react";
import { LuMouse } from "react-icons/lu";
import { AiOutlineDash } from "react-icons/ai";

const Title = ({
  children,
  description,
}: {
  children?: ReactNode;
  description?: ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col max-md:hidden">
        <LuMouse color="#12F7D6" size={32} />
        <AiOutlineDash color="#FFFFFF" className="rotate-90 mt-2" size={32} />
        <AiOutlineDash color="#FFFFFF" className="rotate-90" size={32} />
      </div>

      <div className="flex flex-col mb-4">
        {children && (
          <>
            <h1 className="text-[#12F7D6] capitalize text-[4rem]">
              {children}
            </h1>

            <div className="w-full flex items-center">
              <div className="w-[8px] rounded-full aspect-square bg-[#12F7D6]"></div>
              <div className="w-full h-[2px] bg-[#12F7D6]"></div>
              <div className="w-[8px] rounded-full aspect-square bg-[#12F7D6]"></div>
            </div>
          </>
        )}
      </div>
      {description && <span className="text-white">{description}</span>}
    </div>
  );
};

export default Title;
