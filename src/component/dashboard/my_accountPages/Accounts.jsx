import React from "react";
import CtaCards from "../../Card/CtaCards";
import {
  checkBox,
  live,
  XmarkCancel,
  blockIcon,
  arrowRight,
} from "../../svg/svg";

function Accounts(props) {
  return (
    <div>
      <div className="w-[1010px] h-[420px]  mt-[40px] ">
        <div className="w-[1010px] h-[36px] mb-[16px]">
          <div class="container">
            <div class="row">
              <div class="col">
                <div className="  text-[26px] font-semibold ">
                  My properties
                </div>
              </div>
              <div class="col">
                <div className="w-[308px] mt-[6px] h-[24px] text-center ">
                  <p className="float-left text-[18px] font-medium pr-[24px]">
                    For sale
                  </p>
                  <p className="float-left  text-[18px] font-medium pr-[24px]">
                    For rent
                  </p>
                  <p className=" text-[18px] font-medium ">For investment</p>
                </div>
              </div>
              <div class="col"></div>
            </div>
          </div>
        </div>
        <div className="w-[1010px] h-[80px]  mb-[16px]  ">
          <CtaCards svg={checkBox} text="Active" arrowIcon={arrowRight} />
        </div>
        <div className="w-[1010px] h-[80px]  mb-[16px]  ">
          <CtaCards svg={live} text="Reviewing" arrowIcon={arrowRight} />
        </div>
        <div className="w-[1010px] h-[80px]  mb-[16px]  ">
          <CtaCards svg={XmarkCancel} text="Declined" arrowIcon={arrowRight} />
        </div>
        <div className="w-[1010px] h-[80px]  mb-[16px] ">
          <CtaCards svg={blockIcon} text="Inactive" arrowIcon={arrowRight} />
        </div>
      </div>
    </div>
  );
}

export default Accounts;
