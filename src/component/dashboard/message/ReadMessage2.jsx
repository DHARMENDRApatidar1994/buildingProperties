import React from "react";
import imgMessage from "../../../assets/Images/messageImg/ImgMessage1.png";
import userImg from "../../../assets/Images/messageImg/userImagees32.png";
import directMessage from "../../../logo/logo/Direct-messages24.png";
import { Link } from "react-router-dom";
function ReadMessage2(props) {
  return (
    <div>
      <div className=" h-[640px] mt-[40px] ">
        <div className=" h-[36px] text-[28px] font-semibold mb-[20px]">
          Message
        </div>
        <div className=" h-[50px] text-[28px] font-semibold mb-[20px] ">
          <Link to="/dashboard/my-account/message">
            <span className="w-[24px] h-[24px] float-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 mt-[10px] "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
          </Link>
          <img src={imgMessage} className="mx-[10px]  h-[50px] float-left" />
          <div className=" float-left ">
            <p className="text-[#098895] h-[26px] text-[18px] font-semibold  mb-[2px]">
              Oxford Circus Station, London
            </p>
            <p className="text-[#E8AE00] h-[20px] text-[14px] font-semibold  ">
              Emmanuel Ikechukwu
            </p>
          </div>
          <div className="w-[40px] h-[40px] float-right mt-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-red-700"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
        </div>
        <div className=" h-[574px]  ">
          <h2 className="m-[24px]    text-center h-[20px] text-[14px] font-normal ">
            Mar 12 2021
          </h2>
          <div className="mx-[24px] mb-[24px] h-[196px]  ">
            <div className="w-[920px] h-[196px] ">
              <p className=" w-[819px] h-[156px] ml-[40px] my-[20px]   text-[18px] text-[#0D0E0F] font-normal  ">
                Hello Usman, the hottest property trends in the UK! From
                charming urban flats to serene countryside estates, our latest
                blog dives into the top-selling properties that are capturing
                buyers' hearts. Discover what makes these homes stand out in the
                competitive market, and find your own slice of British real
                estate... Explore the hottest property trends in the UK! From
                charming urban flats to serene countryside estates, our latest
                blog dives into the top-selling properties that are capturing
                buyers' hearts.
              </p>
              <img
                src={userImg}
                alt=""
                className="w-[32px] mt-[-38px] h-[32px] clear-both"
              />
              <span className=" mt-[-36px] float-right">9:55 pm</span>
            </div>
          </div>
          <div className="mx-[24px]  mb-[24px] w-[962px] h-[200px]  ">
            <button type="button" className="float-left  w-[40px] h-[40px]">
              <input type="file" className="w-[30px] h-[30px] text-white" />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-[24px] h-[24px] mx-[8px] mt-[-28px] "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                />
              </svg>
            </button>
            <textarea
              placeholder="Write a message..."
              className="p-[10px] ml-[45px] mt-[-40px] w-[912px] h-[195px]  "
            />
          </div>
          <div className="mx-[24px] mb-[24px] h-[50px]">
            <button className="float-right w-[106px] text-[16px] rounded-[12px] px-[16px] py-[12px] font-medium bg-[#E8AE00]  ">
              Send
              <img
                src={directMessage}
                alt="fb"
                className="w-[24px] h-[24px] float-right"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadMessage2;
