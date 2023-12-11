import React from "react";
import "../AddListing.css";
import Input from "../Input";

const PropertyDetails = () => {
  return (
    <>
      <div className="w-[1240px] h-[2132px] p-[40px] rounded-2xl gap-[40px] ml-[45px] shadow-xl mb-[100px]">
        <div className="w-[1160px] h-[526px] gap-[20px] mb-[40px]">
          <div className="flex justify-between h-[36px] w-[1160px] mt-6">
            <p className="w-[454px] h-[36px] font-semibold text-[28px]">
              Enter your property details
            </p>
          </div>
          <div className="mt-8 space-y-[18px]">
            <select className="w-[1160px] h-[50px] rounded-xl border border-[#FFEBB0] py-3 px-4 gap-[10px] focus outline-none">
              <option selected disabled>
                Select your property type
              </option>
              <option value="">Flat</option>
              <option>Apartment</option>
              <option>Penthouse</option>
            </select>
            <select className="w-[1160px] h-[50px] rounded-xl border border-[#FFEBB0] py-3 px-4 gap-[10px] focus outline-none">
              <option selected disabled>
                Furnishing Options
              </option>
              <option value="">Flat</option>
              <option>Apartment</option>
              <option>Penthouse</option>
            </select>
            <Input extrastyle="gap-[16px]" placeholder="Price" />
            <select className="w-[1160px] h-[50px] rounded-xl border border-[#FFEBB0] py-3 px-4 gap-[10px] focus outline-none">
              <option selected disabled>
                Number of bedrooms
              </option>
              <option value="">Flat</option>
              <option>Apartment</option>
              <option>Penthouse</option>
            </select>
            <select className="w-[1160px] h-[50px] rounded-xl border border-[#FFEBB0] py-3 px-4 gap-[10px] focus outline-none">
              <option selected disabled>
                Number of bathrooms
              </option>
              <option value="">Flat</option>
              <option>Apartment</option>
              <option>Penthouse</option>
            </select>
            <Input extrastyle="gap-[16px]" placeholder="Property age" />
            <Input extrastyle="gap-[16px]" placeholder="Carpet area" />
          </div>
        </div>

        {/* second section */}
        <div className="w-[1160px] h-[362px] gap-[20px] ">
          <div className="flex justify-between h-[36px] w-[1160px] mt-6">
            <p className="w-[454px] h-[36px] font-semibold text-[28px]">
              Key features
            </p>
          </div>
          <p className="w-[667px] h-[26px] mt-5 font-normal text-lg">
            Kindly select or provide any specific or noteworthy features about
            your property
          </p>
          <div className="w-[1160px] h-[50px] flex justify-between space-x-[20px] mt-5">
            <input
              className="w-[1160px] h-[50px] rounded-xl py-3 px-4  text-[18px] font-normal shadow-sm  placeholder:text-[#A6A7A8]  focus outline-none  sm:text-sm sm:leading-6 border border-[#FFEBB0]"
              placeholder="Parking"
            />
            <input
              className="w-[1160px] h-[50px] rounded-xl py-3 px-4  text-[18px] font-normal shadow-sm  placeholder:text-[#A6A7A8]  focus outline-none  sm:text-sm sm:leading-6 border border-[#FFEBB0]"
              placeholder="Kitchen"
            />
          </div>
          <div className="w-[1160px] h-[50px] flex justify-between space-x-[20px]  mt-4">
            <input
              className="w-[1160px] h-[50px] rounded-xl py-3 px-4  text-[18px] font-normal shadow-sm  placeholder:text-[#A6A7A8]  focus outline-none  sm:text-sm sm:leading-6 border border-[#FFEBB0]"
              placeholder="Balconies"
            />
            <input
              className="w-[1160px] h-[50px] rounded-xl py-3 px-4  text-[18px] font-normal shadow-sm  placeholder:text-[#A6A7A8]  focus outline-none  sm:text-sm sm:leading-6 border border-[#FFEBB0]"
              placeholder="Security alarm"
            />
          </div>
          <div className="w-[1160px] h-[50px] flex justify-between space-x-[20px] mt-4">
            <input
              className="w-[1160px] h-[50px] rounded-xl py-3 px-4  text-[18px] font-normal shadow-sm  placeholder:text-[#A6A7A8]  focus outline-none  sm:text-sm sm:leading-6 border border-[#FFEBB0]"
              placeholder="Swimming pool"
            />
            <input
              className="w-[1160px] h-[50px] rounded-xl py-3 px-4  text-[18px] font-normal shadow-sm  placeholder:text-[#A6A7A8]  focus outline-none  sm:text-sm sm:leading-6 border border-[#FFEBB0]"
              placeholder="Garden"
            />
          </div>
          <Input extrastyle="mt-4" placeholder="Add other features" />
        </div>

        {/* third section */}
        <div className="mt-[40px] w-[1160px] h-[152pxx] ">
          <div className="w-[1160px] h-[36px] flex justify-between">
            <p className="w-[372px] h-[36px] font-semibold text-[28px] leading-[36px]">
              Add photos of your property
            </p>
          </div>
          <p className="font-normal text-lg mt-2">
            Photos can bring your property to life in a way that text adverts
            can't.{" "}
          </p>
          <div className="w-[1160px] h-[50px] gap-[20px] grid grid-cols-2 mt-4">
            <input
              type="file"
              className="w-[570px] h-[50px] rounded-xl py-3 px-4  text-[18px] font-normal shadow-sm  placeholder:text-[#A6A7A8]  focus outline-none  sm:text-sm sm:leading-6 border border-[#FFEBB0] bg-white"
              placeholder={`${(
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 3.25H6C3.582 3.25 2.25 4.582 2.25 7V17C2.25 19.418 3.582 20.75 6 20.75H18C20.418 20.75 21.75 19.418 21.75 17V7C21.75 4.582 20.418 3.25 18 3.25ZM6 4.75H18C19.577 4.75 20.25 5.423 20.25 7V14.25L15.71 9.70996C15.32 9.31996 14.68 9.31996 14.29 9.70996L9.34998 14.6499C9.15998 14.8399 8.84002 14.8399 8.65002 14.6499L7.70996 13.71C7.31996 13.32 6.68004 13.32 6.29004 13.71L3.75 16.25V7C3.75 5.423 4.423 4.75 6 4.75ZM6.75 9C6.75 8.31 7.30404 7.75 7.99304 7.75H8.00305C8.69205 7.75 9.25098 8.31 9.25098 9C9.25098 9.69 8.69305 10.25 8.00305 10.25C7.31405 10.25 6.75 9.69 6.75 9Z"
                    fill="#0D0E0F"
                  />
                </svg>
              )} Add photos and videos of your property`}
            />
            <input
              type="file"
              className="w-[570px] h-[50px] rounded-xl py-3 px-4  text-[18px] font-normal shadow-sm  placeholder:text-[#A6A7A8]  focus outline-none  sm:text-sm sm:leading-6 border border-[#FFEBB0] bg-white"
              placeholder={`${(
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 3.25H6C3.582 3.25 2.25 4.582 2.25 7V17C2.25 19.418 3.582 20.75 6 20.75H18C20.418 20.75 21.75 19.418 21.75 17V7C21.75 4.582 20.418 3.25 18 3.25ZM6 4.75H18C19.577 4.75 20.25 5.423 20.25 7V14.25L15.71 9.70996C15.32 9.31996 14.68 9.31996 14.29 9.70996L9.34998 14.6499C9.15998 14.8399 8.84002 14.8399 8.65002 14.6499L7.70996 13.71C7.31996 13.32 6.68004 13.32 6.29004 13.71L3.75 16.25V7C3.75 5.423 4.423 4.75 6 4.75ZM6.75 9C6.75 8.31 7.30404 7.75 7.99304 7.75H8.00305C8.69205 7.75 9.25098 8.31 9.25098 9C9.25098 9.69 8.69305 10.25 8.00305 10.25C7.31405 10.25 6.75 9.69 6.75 9Z"
                    fill="#0D0E0F"
                  />
                </svg>
              )} Add photos and videos of your property`}
            />
          </div>
        </div>

        {/* fourth section */}
        <div className="mt-[40px] w-[1160px] h-[152pxx] ">
          <div className="w-[1160px] h-[36px] flex justify-between">
            <p className="w-[301px] h-[36px] font-semibold text-[28px] leading-[36px]">
              Describe your property
            </p>
          </div>
          <p className="font-normal text-lg mt-2 w-[709px] h-[26px] ">
            This is your chance to highlight your property's key features.
            (Minimum of 100 words)
          </p>
          <div className="w-[1160px] h-[200px] gap-[20px] mt-4">
            <input
              className="w-[1160px] h-[200px] rounded-xl py-3 px-4  text-[18px] font-normal shadow-sm  placeholder:text-[#A6A7A8]  focus outline-none border border-[#FFEBB0] overflow-scroll flex
              items-start"
              placeholder="E.g: Well presented semi detached family home with secluded garden..."
            />
          </div>
        </div>

        {/* fifth section */}
        <div className="mt-[40px] w-[1160px] h-[460px] gap-[20px] ">
          <div className="w-[1160px] h-[36px] flex justify-between">
            <p className="w-[243px] h-[36px] font-semibold text-[28px]">
              Select preferences
            </p>
          </div>
          <div className="space-y-[10px] w-[1160px] h-[86px] gap-[10px] mt-3">
            <p className="w-[266px] h-[26px] font-normal">
              Please, select your status group
            </p>
            <select className="w-[1160px] h-[50px] rounded-xl border border-[#FFEBB0] py-3 px-4 gap-[10px] focus outline-none">
              <option selected disabled>
                Agent
              </option>
              <option value="">Buyer</option>
              <option>Reviewer</option>
            </select>
          </div>

          <div className="space-y-[10px] w-[1160px] h-[86px] gap-[10px] mt-4">
            <p className="w-[516px] h-[26px] font-normal">
              Select your earliest available date for users to schedule a tour
            </p>

            {/* <div class="relative max-w-sm">
              <input
                datepicker
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus outline-none ps-10 p-2.5"
                placeholder="Select date"
              />
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
            </div> */}

            <div class="relative max-w-sm">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input
                datepicker
                datepicker-title="Flowbite datepicker"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg "
                placeholder="Select date"
              />
            </div>

            <div className="space-y-[10px] w-[1160px] h-[86px] ">
              <p className="w-[216px] h-[26px] font-normal">
                Enter your phone number
              </p>
              <Input extrastyle="" placeholder="Phone number" type="text" />
            </div>

            <div className="space-y-[10px] w-[1160px] h-[86px] ">
              <p className="w-[605px] h-[26px] font-normal">
                Choose if you want users who view this listing to see your
                number below
              </p>
              <div className="flex items-center justify-between w-[1160px] h-[50px] rounded-xl border border-[#FFEBB0] py-3 px-4 gap-[10px] bg-white">
                <div className="w-[1094] h-[26px]">
                  <p className="font-normal text-[#A6A7A8] text-lg w-[1094] h-[26px]">
                    Show number
                  </p>
                </div>
                <div className="">
                  <input
                    type="checkbox"
                    className="flex justify-end"
                    value=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* button */}
        <div className="w-[1160px] h-[50px] gap-[8px] mt-[40px] flex justify-end">
          <button
            className={`flex items-center bg-[#E8AE00] rounded-xl py-3 px-4  w-[104px] h-[50px] gap-[8px]`}
          >
            <div className="h-[24px] w-[24px]">
              <svg
                width="9"
                height="16"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-[4px]"
              >
                <path
                  d="M7.99978 15.7508C7.80778 15.7508 7.61575 15.6778 7.46975 15.5308L0.46975 8.53079C0.17675 8.23779 0.17675 7.76275 0.46975 7.46975L7.46975 0.46975C7.76275 0.17675 8.23779 0.17675 8.53079 0.46975C8.82379 0.76275 8.82379 1.23779 8.53079 1.53079L2.06081 8.00076L8.53079 14.4707C8.82379 14.7637 8.82379 15.2388 8.53079 15.5318C8.38379 15.6778 8.19178 15.7508 7.99978 15.7508Z"
                  fill="#0D0E0F"
                />
              </svg>
            </div>
            <p className="w-[74px] h-[26px] font-[500] text-lg flex items-center">
              Back
            </p>
          </button>
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

export default PropertyDetails;
