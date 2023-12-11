import React from "react";
import HeroListProperty from "../assets/img/HeroListProperty.png";
import "./AddListing.css";
import Input from "../components/Input";

const BuildComponent = () => {
  // const EnterAddressForm = () => {
  return (
    <>
      <div>
        <img src={HeroListProperty} alt="" />
      </div>
      <div className="address-main-div">
        <div className="address-div">
          <div className="back-button">
            <div className="angle-arrow">
              <svg
                width="9"
                height="16"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="arrow-svg"
              >
                <path
                  d="M7.99978 15.7508C7.80778 15.7508 7.61575 15.6778 7.46975 15.5308L0.46975 8.53079C0.17675 8.23779 0.17675 7.76275 0.46975 7.46975L7.46975 0.46975C7.76275 0.17675 8.23779 0.17675 8.53079 0.46975C8.82379 0.76275 8.82379 1.23779 8.53079 1.53079L2.06081 8.00076L8.53079 14.4707C8.82379 14.7637 8.82379 15.2388 8.53079 15.5318C8.38379 15.6778 8.19178 15.7508 7.99978 15.7508Z"
                  fill="#0D0E0F"
                />
              </svg>
            </div>
            <div className="back-text">Back</div>
          </div>
          <div className="flex justify-between h-[36px] w-[1160px] mt-6">
            <p className="w-[454px] h-[36px] font-semibold text-[28px]">
              Enter the address of your property{" "}
            </p>
          </div>
          <div className="mt-8">
            <Input extrastyle="gap-[16px]" placeholder="Enter Address" type="text"/>
            <Input extrastyle="gap-[16px]" placeholder="Town" type="text"/>
            <Input extrastyle="gap-[16px]" placeholder="Conuntry" type="text"/>
            <Input extrastyle="gap-[16px]" placeholder="Postcode" type="text"/>
          </div>
        </div>
        <div className="w-[1160px] h-[50px] gap-[8px] mt-[40px] flex justify-end">
          <button
            className={`flex items-center bg-[#E8AE00] rounded-xl py-3 px-4  w-[138px] h-[50px] opacity-[20%] gap-[8px]`}
          >
            <p className="w-[74px] h-[26px] font-[500] text-lg flex items-center">
              Continue
            </p>
            <div className="h-[24px] w-[24px]">
              <svg
                width="9"
                height="16"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-[4px] ml-[8px]"
              >
                <path
                  d="M0.999779 15.7498C0.807779 15.7498 0.61575 15.6768 0.46975 15.5298C0.17675 15.2368 0.17675 14.7618 0.46975 14.4688L6.93972 7.9988L0.46975 1.52883C0.17675 1.23583 0.17675 0.760797 0.46975 0.467797C0.76275 0.174797 1.23779 0.174797 1.53079 0.467797L8.53079 7.4678C8.82379 7.7608 8.82379 8.23583 8.53079 8.52883L1.53079 15.5288C1.38379 15.6768 1.19178 15.7498 0.999779 15.7498Z"
                  fill="#0D0E0F"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default BuildComponent;
