import React from "react";
import userCircle from "../../logo/logo/user-circle96.png";
import Input from "../input/Input";
function MyProfile(props) {
  return (
    <div>
      <div className="w-[1010px] h-[42px] bg-[#EBFFFD] rounded-[12px]">
        <div className="px-[8px] pt-[8px] pb-[16px] text-[18px] font-medium float-left">
          Your profile has been successfully updated.
        </div>
        <spna className="m-[8px]">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6  float-right mx-[8px] mt-[8px]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </spna>
      </div>
      <div className=" h-[640px] mt-[40px] ">
        <div className=" h-[36px] text-[28px] font-semibold ">Profile</div>
        <div className=" h-[154px] text-[28px] font-semibold  ">
          <div className=" h-[114px] my-[20px] text-[28px] font-semibold ">
            <img src={userCircle && userCircle} className=" h-[80px]" />
            <span className="text-[#098895] text-[16px] font-medium text-center pl-[14px]">
              Upload
            </span>
          </div>
        </div>
        <div className=" h-[450px]  border-2 ">
          <div className="m-[24px] w-[962px] h-[312px]  ">
            <h2 className=" h-[32px] text-[24px] font-semibold mb-[15px]">
              Personal Info
            </h2>
            <div className="">
              <Input
                extrastyle="w-[942px] h-[50px]  mb-[20px]"
                placeholder="Full Name"
                type="text"
              />
            </div>
            <div className="">
              <Input
                extrastyle="w-[942px] h-[50px]  mb-[20px]"
                placeholder="Username"
                type="text"
              />
            </div>
            <div className="">
              <Input
                extrastyle="w-[942px] h-[50px]  mb-[20px]"
                placeholder="Telephone Number"
                type="text"
              />
            </div>
            <div className="">
              <Input
                extrastyle="w-[942px] h-[50px]  "
                placeholder="Pin Code"
                type="text"
              />
            </div>
          </div>
          <div className="m-[24px]  h-[50px] ">
            <button className="float-right w-[178px] text-[16px] rounded-[12px] px-[16px] py-[12px] font-medium bg-[#E8AE00]  ">
              Complete Profile
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 float-right "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
