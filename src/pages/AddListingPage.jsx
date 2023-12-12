import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomerReview from '../component/Homepage/CustomerReview'
import './AddListing.css'
import FeatureButton from "../component/AddListing/FeatureButton"
import {
  hassleFree,
  communication,
  costSaving,
  exposure,
  agentDep,
  customerSupport,
  addDetails,
  checkBox,
  live,
  experts,
  cancel,
  play,
} from "../component/AddListing/svg";
// import heroImg1 from "../assets/Images/AddListing/avatar.png";
import ListingButtons from "../component/AddListing/ListingButtons";
import heroImg1 from "../assets/Images/AddListing/ctc.jpeg";
import HowItWorks from "../assets/Images/AddListing/Linked Bricks - Intro .mp4";
// src\assets\Images\AddListing\Linked Bricks - Intro .mp4
import ReviewCard from "../component/AddListing/ReviewCard";
import ChoiceCard from "../component/AddListing/ChoiceCard";
import CtaCards from "../component/AddListing/CtaCards"
import Signin from "../component/Popupfile/Signin";
import { useNavigate } from "react-router-dom";
import Choose from "../component/Homepage/Choose";
import { carddata } from "../component/Homepage/Carddata";
const AddListingPage = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  return (
    <>
      {/* nav */}

      {/* carousel */}
      <div className="">
        <div>
          {/* <Slider {...settings}> */}
            <div className="mainoverlaydiv ">
              <div className="Addlisting-overlay">
              <img src={heroImg1} alt="" className="overlayimg" />
              </div>
             
              <div className="textbox  ">
                <div className="selltext">
                  Sell, Let and 
                  Invest in a Property
                </div>
                <div className="confidentialy">
                  Confidently sell, invest in a property or effortlessly find
                  the perfect tenant by listing with us.
                </div>
              </div>
            </div>
          {/* </Slider> */}
        </div>
        {/* buttons */}
        <div className="">
          {/* <ListingButtons open={open} setOpe={setOpen} /> */}
          <div className="featurebuttonaddlisting">
            <FeatureButton
              svg={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sellproperty"
                >
                  <path
                    d="M20.0003 13.08V18C20.0003 20 19.0003 21 17.0003 21H14.3303C14.1643 21 14.0304 20.866 14.0304 20.7V17.622C14.0304 16.625 13.3553 15.695 12.3723 15.529C11.1233 15.319 10.0304 16.288 10.0304 17.5V20.7C10.0304 20.866 9.89632 21 9.73032 21H7.00034C5.00034 21 4.00034 20 4.00034 18V13.08C4.59034 13.36 5.24036 13.5 5.90036 13.5C7.04036 13.5 8.13031 13.1 8.97031 12.44C9.81031 13.1 10.8903 13.5 12.0003 13.5C13.1203 13.5 14.2004 13.1 15.0404 12.44C15.8804 13.1 16.9703 13.5 18.1103 13.5C18.7603 13.5 19.4103 13.36 20.0003 13.08ZM7.50034 3C5.00034 3 4.61729 3.81999 4.20529 5.03799L3.16538 8.11099C2.72738 9.40499 3.17035 10.902 4.36435 11.592C4.81335 11.852 5.33838 12 5.89938 12C7.22938 12 8.53832 11.17 8.95432 10C9.36032 11.17 10.6694 12 11.9994 12C13.3294 12 14.6383 11.17 15.0443 10C15.4603 11.17 16.7703 12 18.0993 12C18.6613 12 19.1854 11.852 19.6344 11.592C20.8284 10.902 21.2713 9.40499 20.8333 8.11099L19.7933 5.03799C19.3833 3.81999 19.0003 3 16.5003 3H7.50034Z"
                    fill="#0D0E0F"
                  />
                </svg>
              }
              featureText="Sell Property"
              exstyle="w-[200px] bg-[#E8AE00]"
              onClick={() => navigate("/add-listing-steps")}
            />

            <FeatureButton
              svg={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="sellproperty"
                  xmlns="http://www.w3.org/2000/svg"
                  // onClick={()=>setOpen(true)}
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.5699 8.58633L13.606 3.58523C12.677 2.80623 11.3219 2.80623 10.3929 3.58523L4.42896 8.58633C3.52296 9.34632 2.99902 9.65327 2.99902 11.6513V18.0003C2.99902 20.0003 3.99902 21.0003 5.99902 21.0003H17.999C19.999 21.0003 20.999 20.0003 20.999 18.0003V11.6513C21 9.65227 20.4769 9.34632 19.5699 8.58633ZM16.53 13.3302L14.295 15.5652C13.691 16.1692 12.709 16.1693 12.106 15.5663L10.835 14.2973L8.53101 16.5293C8.38501 16.6753 8.19298 16.7493 8.00098 16.7493C7.80898 16.7493 7.61695 16.6763 7.47095 16.5293C7.17795 16.2363 7.17795 15.7613 7.47095 15.4683L9.703 13.2362C10.308 12.6332 11.291 12.6323 11.894 13.2353L13.165 14.5043L15.4709 12.2693C15.7639 11.9763 16.239 11.9763 16.532 12.2693C16.825 12.5623 16.823 13.0372 16.53 13.3302Z"
                    fill="#0D0E0F"
                  />
                </svg>
              }
              featureText="Rent Property"
              exstyle="w-[200px] bg-[#E8AE00]"
              onClick={() => setOpen(true)}
            />

            <FeatureButton
              svg={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => setOpen(true)}
                >
                  <path
                    d="M15.7729 11.2659C15.9039 11.2309 16 11.1157 16 10.9807V6.81082C16 6.11082 15.52 5.50086 14.84 5.35086L4.83997 3.0408C3.89997 2.8208 3 3.54076 3 4.50076V19.0008C3 19.0808 3.00001 19.1607 3.01001 19.2307C3.08001 20.3307 3.67002 20.9207 4.77002 20.9907C4.84002 21.0007 4.92 21.0008 5 21.0008H7.19995C7.36595 21.0008 7.5 20.8667 7.5 20.7007V17.1077C7.5 16.1117 8.18094 15.1879 9.16394 15.0279C10.4169 14.8239 11.5 15.7858 11.5 17.0008V20.7007C11.5 20.8667 11.634 21.0008 11.8 21.0008H13.3669C13.6299 21.0008 13.7531 20.6968 13.5811 20.4978C13.2051 20.0628 13 19.5487 13 18.9707V14.0308C13 12.7168 14.0559 11.7159 15.7729 11.2659ZM8 12.7498H7C6.586 12.7498 6.25 12.4138 6.25 11.9998C6.25 11.5858 6.586 11.2498 7 11.2498H8C8.414 11.2498 8.75 11.5858 8.75 11.9998C8.75 12.4138 8.414 12.7498 8 12.7498ZM8 9.74978H7C6.586 9.74978 6.25 9.41378 6.25 8.99978C6.25 8.58578 6.586 8.24978 7 8.24978H8C8.414 8.24978 8.75 8.58578 8.75 8.99978C8.75 9.41378 8.414 9.74978 8 9.74978ZM12 12.7498H11C10.586 12.7498 10.25 12.4138 10.25 11.9998C10.25 11.5858 10.586 11.2498 11 11.2498H12C12.414 11.2498 12.75 11.5858 12.75 11.9998C12.75 12.4138 12.414 12.7498 12 12.7498ZM12 9.74978H11C10.586 9.74978 10.25 9.41378 10.25 8.99978C10.25 8.58578 10.586 8.24978 11 8.24978H12C12.414 8.24978 12.75 8.58578 12.75 8.99978C12.75 9.41378 12.414 9.74978 12 9.74978ZM18 19.4597C19.74 19.4597 21.13 19.0399 22 18.3399V18.9698C22 20.3298 20 20.9998 18 20.9998C16 20.9998 14 20.3298 14 18.9698V18.3399C14.87 19.0399 16.26 19.4597 18 19.4597ZM18 17.0598C19.74 17.0598 21.13 16.6397 22 15.9397V16.4297C22 17.7997 20 18.4597 18 18.4597C16 18.4597 14 17.7997 14 16.4297V15.9397C14.88 16.6397 16.27 17.0598 18 17.0598ZM18 11.9998C20 11.9998 22 12.6798 22 14.0298C22 15.3898 20 16.0598 18 16.0598C16 16.0598 14 15.3898 14 14.0298C14 12.6798 16 11.9998 18 11.9998Z"
                    fill="#0D0E0F"
                  />
                </svg>
              }
              featureText="Invest in a property"
              exstyle="w-[226px] bg-[#FFF9E6]"
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
      </div>

      {/* why list with us */}
      <div className="h-[672px] py-[56px] px-[100px] pb-[40px] flex flex-col gap-10 ">
      <div >
        <h3 className='featuredtext'>Why Choose Us</h3>
        <div className='choosecard bg-light'>
        {carddata.map((value,index)=>(

      
            <div className='choosecard1' key={index}>
                <div className='iconbox'><img src={value.img} alt="" /></div>
                <div className='ms-3'>
                    <h6>{value.name}</h6>
                    <p>{value.para}</p>
                </div>
            </div>
              ))}
        
        </div>
    </div>
        {/* <div className="listwithus">
          <p>Why List with Us</p>
        </div> */}
        {/* <div className="w-[1240px] h-[480px] gap-[30px] grid grid-cols-2">
          <div className="shadow-xl">
            <ChoiceCard
              svg={hassleFree}
              title="Hassle-Free Listing Process"
              text="Say goodbye to tedious property searches. Our intuitive platform
          allows effortless filtering for hassle-free results."
              height="140px"
            />
          </div>
          <div className="shadow-xl">
            <ChoiceCard
              svg={communication}
              title="Direct Communication with potential buyers and sellers"
              text="Access buyers/tenants directly: communicate, provide info, negotiate – no intermediaries."
              height="140px"
            />
          </div>
        </div> */}
        {/* <div className="w-[1240px] h-[480px] gap-[30px] grid grid-cols-2">
          <div className="shadow-xl">
            <ChoiceCard
              svg={costSaving}
              title="Significant Cost Savings"
              text="No agent commissions or hidden fees. Experience direct transparency, maximize earnings."
              height="140px"
            />
          </div>
          <div className="shadow-xl">
            <ChoiceCard
              svg={exposure}
              title="Increased Exposure"
              text="Elevate exposure on Linked Bricks: Reach motivated buyers and tenants, maximizing property matches."
              height="140px"
            />
          </div>
        </div> */}
        {/* <div className="w-[1240px] h-[480px] gap-[30px] grid grid-cols-2">
          <div className="shadow-xl">
            <ChoiceCard
              svg={agentDep}
              title="No Agent Dependency"
              text="Linked Bricks empowers property owners by enabling direct listing control, speeding up decisions without agents."
              height="140px"
            />
          </div>
          <div className="shadow-xl">
            <ChoiceCard
              svg={customerSupport}
              title="Dedicated Customer Support"
              text="Our dedicated customer support team is here to assist sellers throughout the entire process."
              height="140px"
            />
          </div>
        </div> */}
      </div> 
 
 
      

      {/* how it works image */}
      <div className="h-[818px] w-[1300px] py-[40px] px-[100px] gap-[40px]">
        <div className="h-[128px] w-[1240px]  gap-[20px]">
          <div className="howitworks">
            <p className="">How it Works</p>
          </div>
          <div className="unlockproperty">
            <p className="">
              Unlock your property's potential and become a hero for home
              seekers. List with us today for maximum exposure and seamless
              transactions. Here’s how it works{" "}
            </p>
          </div>
        </div>

        <div className=" adddetails w-[1240px] h-[570px] flex justify-between align-center ">
          <div className="w-[605px] h-[570px] gap-[40px]">
            <div className=" w-[605px] h-[480px] space-y-[20px]">
              <div>
                {" "}
                <CtaCards
                  svg={addDetails}
                  text="Add details of your property including photos and description or select our Premium Upgrade option for our assistance"
                />
              </div>
              <div>
                {" "}
                <CtaCards
                  svg={checkBox}
                  text="Upon completion, kindly tick the box"
                />
              </div>
              <div>
                {" "}
                <CtaCards svg={experts} text="Our team of experts review" />
              </div>
              <div>
                {" "}
                <CtaCards svg={live} text="Your listing goes live!" />
              </div>
              <div>
                {" "}
                <CtaCards svg={cancel} text="Cancel anytime – hassle-free!" />
              </div>
              <div>
                {" "}
                <ListingButtons />
              </div>
            </div>
          </div>
          <div className="w-[605px] h-[570px] rounded-[20px] gap-[15px] ">
            <div className="w-[605px] h-[570px] gap-[20.63px] relative">
             
              <iframe  muted className="w-[605px] h-[570px] rounded-[18.75px]" src={HowItWorks} frameborder="0"></iframe>
              <div className="absolute top-[260px] left-[260px] w-[81.86px] h-[57.86px] rounded-[33.86px] py-4 px-6 bg-[#F9FAFB] gap-[11.29px]">
                <div className="h-[33.86px] w-[33.86px] ">
                  <div className="ml-[6px]">{play}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* customer reviews */}
      <div style={{marginTop:"5vmax"}}>
    <CustomerReview/>
    </div>
      <Signin open={open} setOpen={setOpen} />
    </>
  );
};

export default AddListingPage;
