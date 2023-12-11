import React from "react";
import { Link } from "react-router-dom";
function ImageCards({
  imgs,
  userName,
  userDate,
  text,
  userMesg,
  links,
  arrowIcon,
}) {
  return (
    <div
      className={` h-[102px] rounded-md p-4 gap-4  flex items-center shadow-lg border-gray`}
    >
      <img src={imgs} className=" h-[70px] rounded-xl py-[8px] pr-[8px] " />
      <div className=" h-[48px] gap-1 my-[11px] flex items-center ">
        <div className="w-[840px] h-[70px] text-[18px] font-medium">
          <p className="text-[#098895] text-[18px] font-semibold  mb-[4px]">
            {userName}
            <span className="text-[#0D0E0F] px-2 text-[14px] font-normal ">
              {userDate}
            </span>
          </p>
          <p className="text-[#E8AE00] h-[20px] text-[14px] font-semibold  mb-[4px]">
            {text}
          </p>
          <p className="h-[20px] text-[14px] font-normal">{userMesg}</p>
        </div>
      </div>
      <div className=" w-[24px] h-[24px] text-[18px] font-medium text-end float-right">
        <div className=" w-[8.5px] h-[15.5px] text-[18px] font-medium  mt-[4.25px] ">
          <Link to={links}>{arrowIcon}</Link>
        </div>
      </div>
    </div>
  );
}

export default ImageCards;
