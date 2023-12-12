import React from "react";
import { Route, Routes } from "react-router-dom";
import Accounts from "./Accounts";
import MyMessage from "../message/MyMessage";
function MyAccount(props) {
  return (
    <div>
      <div className="rentsec1">
        <div className="rentsec1-left">
          {/* image ke upr ka content yha likhe */}
          <div className="m-5">
            <h2 className="text-[36px] font-bold">Welcome to your account</h2>
            <p className="text-[18px] font-normal">
              Complete your profile to seamlessly connect with property owners
              and do so much more.
            </p>
            <button className=" text-[16px] rounded-[50px] px-[16px] font-medium py-[8px] border-[1.5px] border-[#01B8C6] float-left">
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
        <img src="BuildingIllustration.png" alt="" />
      </div>
      {/* ===============================My ProperTies============================ */}

      <Routes>
        <Route path="/account" element={<Accounts />} />
        <Route path="/message" element={<MyMessage />} />
      </Routes>
    </div>
  );
}

export default MyAccount;
