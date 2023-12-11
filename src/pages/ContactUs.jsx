import React from "react";
// import HeroContactus from "../assets/img/HeroContactimage378.png";
import mail12 from "../logo/logo/Mail12.png";
import vector12 from "../logo/logo/Vector12.png";
import facebook from "../logo/logo/Facebook24.png";
import twitter from "../logo/logo/Twitter24.png";
import whatsapp from "../logo/logo/whatsapp24.png";
import linkedin from "../logo/logo/LinkedIn24.png";
import directMessage from "../logo/logo/Direct-messages24.png";
import { useNavigate } from "react-router-dom";

function ContactUs(props) {
  const navigate = useNavigate();
  const validaPage = () => {
    navigate("/contactusvalidation");
  };
  return (
    <div>
        <div className='rentsec1'>
            <div className='rentsec1-left'>
                <div className="ms-5">

                <h6>Home/<span>Contact Us</span></h6>
                <h2>Contact Us</h2>
                <p>Got any questions or queries, one of our team member will be happy to help with your enquiry</p>
              
               </div>
            </div>
            <img src="BuildingIllustration.png" alt="" />
        </div>
    
      <div className="w-[1240px] h-[692px] mt-[56px]  ml-[100px] mb-28 ">
        <div className="w-[1160px] h-[612px] mx-9 my-9 ">
          <div className="w-[1160px] h-[138px] mb-[40px] ">
            <h2 className="mb-[18px] w-[1160px] h-[44px] text-[36px] font-semibold ">
              Get in touch
            </h2>
            <p className=" mb-[18px]  w-[616px] h-[26px] text-[18px] text-[#414141] font-normal ">
              Contact us via email, online chat, phone, or fill out our contact
              form below.
            </p>
            <div className="w-[413px] h-[28px] ">
              <p className="w-[240px] pl-[10px] py-[2px] float-left rounded-[12px] bg-[#F9FAFB]">
                <img
                  src={mail12}
                  alt="mailicon"
                  className="w-[12px] h-[12px] mt-[5px] float-left"
                />
                <span className="pl-[4px] text-[14px] font-normal text-[#414141]">
                  linkedbricks.co.uk@gmail.com
                </span>
              </p>

              <p className="w-[163px] float-left pl-[16px] py-[2px] rounded-[12px] bg-[#F9FAFB]">
                <img
                  src={vector12}
                  alt="mailicon"
                  className="w-[12px] h-[12px] mt-[5px] float-left"
                />
                <span className="pl-[4px] text-[14px] font-normal text-[#414141]">
                  +44 7060643385
                </span>
              </p>
            </div>
          </div>
          <form>
            <div className="w-[1160px] h-[336px] mb-[40px] ">
              <div className="mb-[20px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                <div className="mr-[10px]">
                  <input
                    id="fname"
                    name="fname"
                    type="text"
                    autoComplete="fname"
                    placeholder="Full Name"
                    className="block w-full px-4 rounded-md border-0 py-3 text-[18px] font-normal shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#A6A7A8] focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="">
                  <input
                    id="lname"
                    name="lname"
                    type="text"
                    autoComplete="lname"
                    placeholder="Last Name"
                    className="block w-full px-3 rounded-md border-0 py-3 text-[18px] font-normal shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#A6A7A8] focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="mb-[20px]">
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  placeholder="Email Address"
                  className="block w-full px-4 rounded-md border-0 py-3 text-[18px] font-normal shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#A6A7A8] focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                />
              </div>
              <div className="">
                <textarea
                  id="enquiry"
                  name="enquiry"
                  type="text"
                  autoComplete="enquiry"
                  placeholder="Enquiry"
                  className="block w-full  h-[196px] px-4 rounded-md border-0 py-3 text-[18px] font-normal shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#A6A7A8] focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </form>

          <div className=" w-[1160px] h-[58px] ">
            <div className=" pt-[8px] w-[190px] h-[40px] float-left">
              <div className="w-[40px] h-[40px] m-[6px] float-left">
                <img
                  src={facebook}
                  alt="fb"
                  className=" w-[24px] h-[24px] float-left"
                />
              </div>
              <div className="w-[40px]  h-[40px] m-[6px] float-left">
                <img
                  src={twitter}
                  alt="fb"
                  className=" w-[24px]  h-[24px] float-left"
                />
              </div>
              <div className="w-[40px]  h-[40px] my-[6px]  float-left">
                <img
                  src={whatsapp}
                  alt="fb"
                  className=" w-[24px]  h-[24px] float-left"
                />
              </div>
              <div className="w-[40px]  h-[40px] my-[6px] float-left">
                <img
                  src={linkedin}
                  alt="fb"
                  className=" w-[24px]  h-[24px] float-left"
                />
              </div>
            </div>
            <div className="w-[147px] h-[58px] float-right bg-[rgb(232,174,0)] rounded-[12px] ">
              <div
                className="px-[12px] py-[16px] text-center"
                onClick={validaPage}
              >
                <div className="w-[42px] h-[26px] px-[24px] mr-[8px] text-center text-[18px] font-medium float-left">
                  Send
                </div>
                <div className=" ml-[70px]">
                  <img
                    src={directMessage}
                    alt="fb"
                    className="w-[24px] h-[24px] "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
