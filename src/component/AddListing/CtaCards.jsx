import React from "react";

const CtaCards = ({ svg, text }) => {
  return (
    <div
      className={` rounded-xl p-4 gap-4  flex items-center shadow-md border-gray`}
    >
      <div className="  rounded-xl p-[8px] bg-black">{svg}</div>
      <div className="  gap-1  flex items-center">
        <div className="  text-base font-normal flex items-center">{text}</div>
      </div>
    </div>
  );
};

export default CtaCards;
