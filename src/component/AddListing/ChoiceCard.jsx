import React from "react";

const ChoiceCard = ({svg, title, text, height}) => {
  return (
    <div
      className={`w-[605px] h-[${height}] rounded-xl p-4 gap-4  flex items-center`}
    >
      <div>{svg}</div>
      <div className="w-[469px] h-[108px] gap-1 pt-3">
        <div className="w-[469px] h-[26px] font-semibold text-lg">{title}</div>
        <div className="w-[469px] h-[48px] text-base font-normal">{text}</div>
      </div>
    </div>
  );
};

export default ChoiceCard;
