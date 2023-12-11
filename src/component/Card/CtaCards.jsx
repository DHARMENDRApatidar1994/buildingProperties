import React from "react";

const CtaCards = ({ svg, text, arrowIcon }) => {
  return (
    <div
      className={` h-[80px] rounded-xl p-4 gap-4  flex items-center shadow-lg border-gray`}
    >
      <div className=" h-[48px] rounded-xl p-[8px] bg-black">{svg}</div>
      <div className=" h-[48px] gap-1 my-[11px] flex items-center ">
        <div className="w-[840px] h-[26px] text-[18px] font-medium">{text}</div>
      </div>
      <div className=" w-[24px] h-[24px] text-[18px] font-medium text-end float-right">
        <div className=" w-[8.5px] h-[15.5px] text-[18px] font-medium ml-[8.25px] mt-[4.25px] ">
          {arrowIcon}
        </div>
      </div>
    </div>
  );
};

export default CtaCards;
