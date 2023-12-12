import React from "react";

const CtaCards = ({ svg, text }) => {
  return (
    <div
      className={`w-[605px] h-[80px] rounded-xl p-4 gap-4  flex items-center shadow-md border-gray`}
    >
      <div className="w-[48px] h-[48px] rounded-xl p-[8px] bg-black">{svg}</div>
      <div className="w-[469px] h-[48px] gap-1  flex items-center">
        <div className="w-[509px] h-[48px] text-base font-normal flex items-center">{text}</div>
      </div>
    </div>
  );
};

export default CtaCards;
