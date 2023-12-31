import React from "react";

const FeatureButton = ({ svg, featureText, exstyle, ...otherProps }) => {
  return (
    <button
      className={` flex items-center  font-semibold  px-1.5  border-[#fcf6e5]  h-[40px] rounded-[12px]  hover:border-[1.5px] hover:border-[#FFEBB0] ${exstyle}`}
      {...otherProps}
    >
      {svg}
      <span className="ml-1">{featureText}</span>
    </button>
  );
};

export default FeatureButton;
