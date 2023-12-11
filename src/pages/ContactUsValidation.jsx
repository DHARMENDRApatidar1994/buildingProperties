import React from 'react'
import checkBox from '../logo/logo/Check-box24.png'

const ContactUsValidation = () => {
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
      {/* <div className="w-[1440px] h-[378px] ">
        <img src={HeroContactus} alt="conatct-us" className="w-full" />
      </div> */}
      <div className=" w-[1440px] h-[692px] ">
        <h2 className=" w-[631px] h-[42px] mt-[56px] ml-[405px] rounded-[12px]  bg-[#EBFFFD]">
          <p className="mb-[18px]  w-[575px] pl-[16px] pr-[8px] py-[8px]  h-[42px] text-[18px] text-start font-normal float-left">
            Thank you for your inquiry. We well respond promptly
          </p>
          <p className="w-[41px] h-[41px]  float-left mx-1 my-[1px] px-[8px] py-[8px]">
            <img
              src={checkBox}
              alt="chebox"
              className="w-[17px] h-[17px] mx-[4px] my-[4px]  "
            />
          </p>
        </h2>
      </div>
    </div>
  )
}

export default ContactUsValidation