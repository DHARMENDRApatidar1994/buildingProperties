import React from "react";
import CtaCards from "../../Card/CtaCards";
import imgMessage from "../../../assets/Images/messageImg/ImgMessage1.png";
import {
  checkBox,
  live,
  XmarkCancel,
  blockIcon,
  arrowRight,
} from "../../svg/svg";
import ImageCards from "../../Card/ImageCards";

function MyMessage(props) {
  return (
    <div>
      <div>
        <div className="w-[1010px] h-[402px]  mt-[40px] ">
          <div className="w-[1010px] h-[36px] mb-[16px]">
            <div class="container">
              <div class="row">
                <div class="col">
                  <div className=" text-[28px] font-semibold ">Messages</div>
                </div>
                <div class="col">
                  <div className="w-[308px] mt-[6px] h-[24px] text-center ">
                    <p className="float-left text-[18px] font-normal pr-[12px] ">
                      Direct messages
                    </p>
                    <p className="  text-[18px] font-normal pr-[24px]">
                      Scheduled tours
                    </p>
                  </div>
                </div>
                <div class="col"></div>
              </div>
            </div>
          </div>
          <div className="w-[1010px]  mb-[16px] shadow-md ">
            <ImageCards
              imgs={imgMessage}
              userName=" Oxford Circus Station, London"
              userDate="• Mar 12, 2021"
              text="Emmanuel Ikechukwu"
              links="/dashboard/my-account/message/1"
              userMesg="Hello Usman, I’m interested in one of your properties. Hello Usman, I’m interested in one of your properties..."
              arrowIcon={arrowRight}
            />
          </div>
          <div className="w-[1010px]  mb-[16px] shadow-md ">
            <ImageCards
              imgs={imgMessage}
              userName="Leeds City Center"
              userDate=""
              text="Vicky Smith"
              links="/dashboard/my-account/message/2"
              userMesg="Hello Usman, I’m interested in one of your properties. Hello Usman, I’m interested in one of your properties..."
              arrowIcon={arrowRight}
            />
          </div>
          <div className="w-[1010px]  mb-[16px] shadow-md ">
            <ImageCards
              imgs={imgMessage}
              userName="Manchester homes"
              userDate=""
              text="Emmanuel Ikechukwu"
              links="/dashboard/my-account/message/3"
              userMesg="Hello Usman, I’m interested in one of your properties. Hello Usman, I’m interested in one of your properties..."
              arrowIcon={arrowRight}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyMessage;
