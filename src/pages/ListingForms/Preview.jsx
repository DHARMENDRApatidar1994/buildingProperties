import React from "react";
import PropertyImg from "../../assets/Images/AddListing/propertyimage.png";
import FloorPlan from "../../assets/Images/AddListing/floorplan.png.png";
import { Link } from "react-router-dom";
import scroll1 from "../../assets/Images/AddListing/scroll1.png";
import scroll2 from "../../assets/Images/AddListing/scroll2.png";
import scroll3 from "../../assets/Images/AddListing/scroll3.png";

const Preview = () => {
  return (
    <>
      <div className="w-[1240px] h-[2234px] gap-[40px] ml-[59px]">
        {/* FIRST SECTION IMGS FEATURES AND DESC */}
        <div className="w-[1240px] h-[862px] rounded-[20px] p-[40px] gap-[40px] shadow-md">
          <div className="w-[1160px] h-[36px] gap-[10px]">
            <p className="w-[259px] h-[36px] font-semibold text-[28px]">
              Preview your listing
            </p>
          </div>

          {/* img section */}
          <div className="w-[1160px] h-[282px] rounded-[20px] gap-[20px] flex mt-[40px]">
            <div className="w-[600px] h-[282px] ">
              <img
                className="w-[600px] h-[282px] rounded-[20px]"
                src={PropertyImg}
                alt=""
              />
            </div>
            <div className="w-[80px] h-[282px] gap-[20px]">
              <div className="w-[80px] h-[70px] rounded-[8px] border-[3px] border-[#135966] gap-[16px] ">
                <img src={scroll1} alt="" />
              </div>
              <div className="w-[80px] h-[70px] rounded-[8px] gap-[16px] mt-[16px]">
                <img src={scroll2} alt="" />
              </div>
              <div className="w-[80px] h-[70px] rounded-[8px] mt-[16px]">
                <img src={scroll3} className="w-[230px] h-[65px]" alt="" />
              </div>
            </div>
            {/* divider */}
            <div className="w-[420px] h-[282px] gap-[20px]">
              {/* first div */}
              <div className="w-[420px] h-[26px] flex justify-between">
                {/* for sale badge */}
                <div className="flex items-center ">
                  <div className="absolute flex items-center w-[73px] h-[26px] py-1 pr-2 pl-1 bg-[#F9FAFB] rounded-xl">
                    <div className="">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="my-auto"
                      >
                        <circle cx="6" cy="6" r="4" fill="#01B8C6" />
                      </svg>
                    </div>
                    <div className="h-[18px] w-[45px] font-normal text-xs">
                      For Sale
                    </div>
                  </div>
                </div>
                {/* right 2 svgs */}
                <div className="w-[185px] h-[24px] gap-[20px] flex justify-between">
                  {/* time */}
                  <div className="w-[82px] h-[24px] gap-[4px] flex items-center ">
                    <div className="h-[24px] w-[24px] mt-2">
                      <svg
                        width="18"
                        height="17"
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.38672 15.5833C13.2987 15.5833 16.4701 12.412 16.4701 8.5C16.4701 4.58798 13.2987 1.41667 9.38672 1.41667C5.4747 1.41667 2.30339 4.58798 2.30339 8.5C2.30339 12.412 5.4747 15.5833 9.38672 15.5833ZM9.03255 8.5V4.95623C9.03255 4.56681 8.71542 4.25 8.32422 4.25C7.93029 4.25 7.61589 4.56619 7.61589 4.95623V9.21044C7.61589 9.40515 7.69517 9.58171 7.82335 9.70959C7.95252 9.83807 8.13012 9.91667 8.32629 9.91667H11.8638C12.2565 9.91667 12.5742 9.59953 12.5742 9.20833C12.5742 8.8144 12.2562 8.5 11.8638 8.5H9.03255ZM9.38672 17C4.6923 17 0.886719 13.1944 0.886719 8.5C0.886719 3.80558 4.6923 0 9.38672 0C14.0811 0 17.8867 3.80558 17.8867 8.5C17.8867 13.1944 14.0811 17 9.38672 17Z"
                          fill="#414141"
                        />
                      </svg>
                    </div>
                    <div className="w-[54px] h-[20px] font-normal mb-[2] text-[14px]">
                      10 years
                    </div>
                  </div>
                  {/* area */}
                  <div className="w-[82px] h-[24px] gap-[4px] flex items-center">
                    <div className="h-[24px] w-[24px] mt-2 flex justify-end">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 2.68435V1.78957C17 0.652298 16.3477 0 15.2105 0H14.3157C13.2571 0 12.6263 0.570872 12.5431 1.56587H4.45694C4.37372 0.570872 3.74288 0 2.68435 0H1.78957C0.652298 0 0 0.652298 0 1.78957V2.68435C0 3.74288 0.570872 4.37369 1.56587 4.45691V12.5431C0.570872 12.6263 0 13.2571 0 14.3156V15.2104C0 16.3477 0.652298 17 1.78957 17H2.68435C3.74288 17 4.37372 16.4291 4.45694 15.4341H12.5431C12.6263 16.4291 13.2571 17 14.3157 17H15.2105C16.3477 17 17 16.3477 17 15.2104V14.3156C17 13.2571 16.4292 12.6263 15.4342 12.5431V4.45691C16.4292 4.37369 17 3.74288 17 2.68435ZM12.5431 14.0929H4.45694C4.37998 13.1721 3.82878 12.6209 2.90805 12.544V4.45781C3.82878 4.38086 4.37998 3.82968 4.45694 2.90895H12.5431C12.62 3.82968 13.1712 4.38086 14.092 4.45781V12.544C13.1712 12.6209 12.62 13.1721 12.5431 14.0929Z"
                          fill="#414141"
                        />
                      </svg>
                    </div>
                    <div className="w-[54px] h-[20px] font-normal mb-[2] text-[14px]">
                      340sqm
                    </div>
                  </div>
                </div>
              </div>
              {/* second div */}
              <h5 class=" w-[420px] h-[44px] mt-[10px] text-[36px] font-bold tracking-tight text-gray-900">
                £4,250
              </h5>
              <div className="h-[96px] w-[420px] mt-[32px]">
                <div className="w-[420px] h-[64px] mt-[4px]">
                  <p class=" w-[420px] h-[36px] mt-[8px] font-semibold text-[28px] text-[#135966]">
                    Semi detached house.
                  </p>

                  <p class=" w-[420px] h-[24px] font-normal mt-[8px] text-base text-[#414141] dark:text-gray-400">
                    Southfield Road, Oxford OX4
                  </p>
                </div>
              </div>

              {/* third div (features) */}
              <div
                className={`w-[420px] h-[56px] flex justify-between p-4 bg-white rounded-xl mt-[8px]`}
              >
                <div className="h-[24px] w-[71px] gap-1 flex ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-[1px]"
                  >
                    <path
                      d="M21.75 11V15V15.75V18C21.75 18.41 21.41 18.75 21 18.75C20.59 18.75 20.25 18.41 20.25 18V15.75H12H3.75V18C3.75 18.414 3.414 18.75 3 18.75C2.586 18.75 2.25 18.414 2.25 18V6C2.25 5.586 2.586 5.25 3 5.25C3.414 5.25 3.75 5.586 3.75 6V14.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25H18C20.42 7.25 21.75 8.58 21.75 11ZM7.5 12.5C8.881 12.5 10 11.381 10 10C10 8.619 8.881 7.5 7.5 7.5C6.119 7.5 5 8.619 5 10C5 11.381 6.119 12.5 7.5 12.5Z"
                      fill="black"
                    />
                  </svg>
                  <div className="w-[43px] h-[24px] font-normal text-sm text-black">
                    3 beds
                  </div>
                </div>

                <div className="h-[24px] w-[77px] gap-1 flex ">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.8847 9.44338C19.8847 9.06728 19.8386 9.00098 19.7409 9.00098C19.6431 9.00098 19.5966 9.06728 19.5966 9.44338C19.5966 9.81973 19.6429 9.88603 19.7409 9.88603C19.8384 9.88603 19.8847 9.81973 19.8847 9.44338Z"
                      fill="black"
                    />
                    <path
                      d="M19.5551 10.5874C19.5551 10.2113 19.5085 10.1445 19.4108 10.1445C19.3135 10.1445 19.2667 10.2108 19.2667 10.5874C19.2667 10.964 19.3128 11.0306 19.4108 11.0306C19.5085 11.0306 19.5551 10.964 19.5551 10.5874Z"
                      fill="black"
                    />
                    <path
                      d="M19.2559 9.44338C19.2559 9.06728 19.2098 9.00098 19.1121 9.00098C19.0143 9.00098 18.968 9.06728 18.968 9.44338C18.968 9.81973 19.0141 9.88603 19.1121 9.88603C19.2096 9.88603 19.2559 9.81973 19.2559 9.44338Z"
                      fill="black"
                    />
                    <path
                      d="M21.3768 13.0736V6H19.0534V7.74549C18.8226 7.77816 18.3977 7.87249 18.3977 8.12184C18.3977 8.39948 18.9391 8.52623 19.4422 8.52623C19.945 8.52623 20.4866 8.39996 20.4866 8.12184C20.4866 7.85421 20.0157 7.76475 19.7661 7.73623V6.80779H20.6643V12.1189C20.4701 11.9609 20.2202 11.8619 19.944 11.8619C19.6052 11.8619 19.294 12.0048 19.0846 12.251C18.8752 12.005 18.5637 11.8619 18.2254 11.8619C17.9029 11.8619 17.1758 11.9936 16.9664 12.2195C16.757 11.9936 16.4538 11.8619 16.1313 11.8619C15.793 11.8619 15.0578 12.0048 14.8482 12.251C14.5633 11.9161 13.2285 11.772 12.7758 11.9219C12.3232 11.7718 10.9884 11.9163 10.7035 12.251C10.4941 12.0053 10.1828 11.8619 9.84426 11.8619C9.52178 11.8619 9.2188 11.9933 9.00942 12.2193C8.80004 11.9933 8.49681 11.8619 8.17433 11.8619C7.83576 11.8619 7.52425 12.005 7.31487 12.251C7.10549 12.0053 6.79422 11.8619 6.45541 11.8619C5.95255 11.8619 5.53135 12.1808 5.39607 12.6132C4.89443 12.472 4.19706 12.2812 3.22353 12.0214C2.83938 11.9226 2.44255 12.153 2.3431 12.5167C2.29045 12.7095 2.39551 12.9827 2.44499 13.0948C2.26023 13.478 2.16663 13.8846 2.16663 14.3043V15.9945C2.16663 16.7423 2.46522 17.4224 2.94931 17.936H20.8835C21.368 17.4224 21.6666 16.7421 21.6666 15.994V14.3043C21.6666 13.8778 21.5684 13.4641 21.3768 13.0736ZM20.6641 12.9912H6.63335C6.5417 12.9527 6.29307 12.8686 5.59863 12.6709C5.7088 12.3273 6.04883 12.074 6.45492 12.074C6.77301 12.074 7.06088 12.2281 7.22493 12.4859L7.31438 12.6261L7.40384 12.4859C7.56813 12.2278 7.856 12.074 8.17385 12.074C8.47561 12.074 8.75543 12.2139 8.9224 12.4482L9.00869 12.5693L9.09498 12.4482C9.26194 12.2139 9.54177 12.074 9.84353 12.074C10.1614 12.074 10.4493 12.2281 10.6135 12.4859L10.703 12.6261L10.7925 12.4859C11.0133 12.1386 12.3171 11.9792 12.7388 12.134L12.7754 12.1474L12.8119 12.134C13.2334 11.9797 14.5372 12.1391 14.758 12.4859L14.8475 12.6263L14.9369 12.4859C15.101 12.2278 15.8127 12.074 16.1303 12.074C16.4321 12.074 16.7122 12.2139 16.8791 12.4484L16.9654 12.5695L17.052 12.4484C17.2189 12.2139 17.9224 12.074 18.2244 12.074C18.5425 12.074 18.8301 12.2281 18.9944 12.4859L19.0834 12.6261L19.1731 12.4859C19.3374 12.2278 19.625 12.074 19.9431 12.074C20.239 12.074 20.4998 12.2095 20.6634 12.4148V12.9912H20.6641Z"
                      fill="black"
                    />
                  </svg>

                  <div className="flex items-center w-[49px] h-[20px] font-normal text-sm text-black">
                    2 baths
                  </div>
                </div>

                <div className="h-[24px] w-[127px] gap-1 flex ">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.55003 8.9105L6.62812 13.6148H12.0977H17.5677L18.6451 8.91137C18.6917 8.38605 19.0332 7.94593 19.5027 7.7568C18.8131 6.69984 17.6217 6 16.2656 6C16.2656 6 13.1291 6.25689 12.0835 6.25689C11.0453 6.25689 7.9302 6 7.9302 6C6.57387 6 5.38291 6.70006 4.69287 7.75702C5.16198 7.94614 5.50318 8.38562 5.55003 8.9105Z"
                      fill="black"
                    />
                    <path
                      d="M21.8334 9.85846C21.8334 9.15949 21.1865 8.59277 20.3888 8.59277C19.6345 8.59277 19.0159 9.09914 18.9503 9.74538L17.8204 14.0669H6.3468L5.2162 9.74451C5.1504 9.09914 4.53183 8.59277 3.77795 8.59277C2.98027 8.59277 2.33337 9.15949 2.33337 9.85846C2.33337 9.92906 2.34165 9.99791 2.35429 10.0652L4.27233 17.4827L4.33551 17.4696V17.4827H19.9317V17.34L21.8334 10.0696C21.8334 10.0696 21.8334 9.92906 21.8334 9.85846Z"
                      fill="black"
                    />
                  </svg>

                  <div className="w-[99px] h-[20px] font-normal text-sm text-black">
                    Semi-furnished
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* features */}
          <div className="w-[1160px] h-[174px] gap-[20px]  mt-[40px]">
            <p className="w-[1160px] h-[36px] font-semibold text-[28px]">
              Key features
            </p>
            {/* 1 row */}
            <div className="w-[1160px] h-[26px] gap-[20px] grid grid-cols-2 mt-[30px]">
              <div className="w-[570px] h-[26px] rounded-xl gap-[10px] flex items-center justify-start">
                <div className="h-[24px] w-[24px] pl-3">
                  <input checked type="checkbox" />
                </div>
                <p className="w-[536px] h-[26px] font-normal text-[18px]">
                  Parking
                </p>
              </div>
              <div className="w-[570px] h-[26px] rounded-xl gap-[10px] flex items-center justify-start">
                <div className="h-[24px] w-[24px] pl-3">
                  <input checked type="checkbox" />
                </div>
                <p className="w-[536px] h-[26px] font-normal text-[18px]">
                  Kitchen
                </p>
              </div>
            </div>
            <div className="w-[1160px] h-[26px] gap-[20px] grid grid-cols-2 mt-[15px]">
              <div className="w-[570px] h-[26px] rounded-xl gap-[10px] flex items-center justify-start">
                <div className="h-[24px] w-[24px] pl-3">
                  <input checked type="checkbox" />
                </div>
                <p className="w-[536px] h-[26px] font-normal text-[18px]">
                  Balconies
                </p>
              </div>
              <div className="w-[570px] h-[26px] rounded-xl gap-[10px] flex items-center justify-start">
                <div className="h-[24px] w-[24px] pl-3">
                  <input checked type="checkbox" />
                </div>
                <p className="w-[536px] h-[26px] font-normal text-[18px]">
                  Security Alarm
                </p>
              </div>
            </div>
            <div className="w-[1160px] h-[26px] gap-[20px] grid grid-cols-2 mt-[15px]">
              <div className="w-[570px] h-[26px] rounded-xl gap-[10px] flex items-center justify-start">
                <div className="h-[24px] w-[24px] pl-3">
                  <input checked type="checkbox" />
                </div>
                <p className="w-[536px] h-[26px] font-normal text-[18px]">
                  Swimming Pool
                </p>
              </div>
              <div className="w-[570px] h-[26px] rounded-xl gap-[10px] flex items-center justify-start">
                <div className="h-[24px] w-[24px] pl-3">
                  <input checked type="checkbox" />
                </div>
                <p className="w-[536px] h-[26px] font-normal text-[18px]">
                  Garden
                </p>
              </div>
            </div>
          </div>

          {/* description */}
          <div className="w-[1160px] h-[170px] gap-[20px] mt-[40px]">
            <div className="w-[1160px] h-[170px] rounded-xl gap-[10px]">
              <div className="w-[1160px] h-[134px] gap-[20px] ">
                <p className="w-[1160px] h-[36px] font-semibold text-[28px]">
                  Description
                </p>
                <p className="w-[1160px] h-[78px] font-normal text-[18px] mt-[20px] text-clip overflow-truncate">
                  Situated within the highly sought after village of Kennington
                  is this three bedroom semi-detached family home located on
                  Bagley Close.Internally you are met with an enternace hall,
                  living room, kitchen and dining room which offers access out
                  into the rear garden. Following up the stairs onto the first
                  floor sits three bedrooms and a family bathroom...
                  {/* Externally
                  this property benefits from a front garden with a shared
                  driveway to the right of the property itself offering access
                  to the garage and rear garden.Floorplan and Energy Performance
                  Certifcate (EPC) to follow.Kennington is a vibrant community
                  village on the southern edge of Oxford, with excellent links
                  to Oxford city and Abingdon town. By car the Southern by-pass
                  and A34 are accessible within 1.0 miles There are local
                  convenience shops, post office, doctor’s surgery, library,
                  church, public house and St Swithun’s primary school and
                  playgroup. Oxford railway station is located 2.48 miles away
                  and Oxford City Centre is 2.8 miles away. */}
                  <br />
                  <br />
                </p>
              </div>
              <div className="w-[185px] h-[26px] flex items center mt-2">
                <p className="w-[161px] h-[26px] text-[#098895]">
                  See full description
                </p>
                <div className="h-[24px] w-[24px] mt-[9px]">
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.99978 5.75076C4.80778 5.75076 4.61575 5.67778 4.46975 5.53079L0.46975 1.53079C0.17675 1.23779 0.17675 0.76275 0.46975 0.46975C0.76275 0.17675 1.23779 0.17675 1.53079 0.46975L5.00076 3.93972L8.47073 0.46975C8.76373 0.17675 9.23876 0.17675 9.53176 0.46975C9.82476 0.76275 9.82476 1.23779 9.53176 1.53079L5.53176 5.53079C5.38376 5.67778 5.19178 5.75076 4.99978 5.75076Z"
                      fill="#098895"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECOND SECTION KEY FEATURES */}
        <div className="w-[1240px] h-[392px] gap-[40px] p-[40px] mt-[30px] shadow-md">
          <div className="w-[1160px] h-[312px] gap-[20px]">
            <p className="w-[1160px] h-[36px] font-semibold text-[28px]">
              Floor Plans
            </p>
            <img
              src={FloorPlan}
              alt=""
              className="w-[1160px] h-[256px] mt-[20px]"
            />
          </div>
        </div>

        {/* THIRD SECTION PREFERENCES */}
        <div className="w-[1240px] h-[254px] rounded-[20px] p-[40px] gap-[40px] shadow-md mt-[30px]">
          <div className="w-[1160px] h-[174px] gap-[20px]">
            <p className="w-[1160px] h-[36px] font-semibold text-[28px]">
              Preferences
            </p>
            <div className="w-[1160px] h-[26px] rounded-[12px] gap-[10px] mt-[20px]">
              <div className="h-[24px] w-[1160px] flex items-center rounded-[12px] gap-[10px] ">
                <input type="checkbox" checked className="ml-1" />
                <p className="w-[370px] h-[26px] font-normal text-[18px]">
                  Status group: Agent
                </p>
              </div>
              <div className="h-[24px] w-[1160px] flex items-center rounded-[12px] gap-[10px]  mt-2">
                <input type="checkbox" checked className="ml-1" />
                <p className="w-[370px] h-[26px] font-normal text-[18px]">
                  Scheduled tour date: 18 Sep 2023
                </p>
              </div>
              <div className="h-[24px] w-[1160px] flex items-center rounded-[12px] gap-[10px]  mt-2">
                <input type="checkbox" checked className="ml-1" />
                <p className="w-[370px] h-[26px] font-normal text-[18px] ">
                  Phone number: +2347060643385{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FOURTH SECTION ADD ONS */}
        <div className="w-[1240px] h-[254px] rounded-[20px] p-[40px] gap-[40px] shadow-md mt-[30px]">
          <div className="w-[1160px] h-[174px] gap-[20px]">
            <p className="w-[1160px] h-[36px] font-semibold text-[28px]">
              Add-ons
            </p>
            <div className="w-[1160px] h-[26px] rounded-[12px] gap-[10px] mt-[20px]">
              <div className="h-[26px] w-[1160px] flex items-center rounded-[12px] justify-between gap-[20px]">
                <div className="h-[24px] w-[570px] flex items-center rounded-[12px] gap-[10px] ">
                  <input type="checkbox" checked className="ml-1" />
                  <p className="w-[370px] h-[26px] font-normal text-[18px]">
                    Premium upgrade
                  </p>
                </div>
                <div className="h-[24px] w-[570px] flex items-center rounded-[12px] gap-[10px]  mt-2">
                  <input type="checkbox" checked className="ml-1" />
                  <p className="w-[370px] h-[26px] font-normal text-[18px]">
                    Premium listing on Right move
                  </p>
                </div>
              </div>
              <div className="h-[26px] w-[1160px] flex items-center rounded-[12px] justify-between gap-[20px]">
                <div className="h-[24px] w-[570px] flex items-center rounded-[12px] gap-[10px] ">
                  <input type="checkbox" checked className="ml-1" />
                  <p className="w-[370px] h-[26px] font-normal text-[18px]">
                    Premium listing on Zoopla
                  </p>
                </div>
                <div className="h-[24px] w-[570px] flex items-center rounded-[12px] gap-[10px]  mt-2">
                  <input type="checkbox" checked className="ml-1" />
                  <p className="w-[370px] h-[26px] font-normal text-[18px]">
                    Energy Performance Certificate
                  </p>
                </div>
              </div>
              <div className="h-[24px] w-[1160px] flex items-center rounded-[12px] gap-[10px]  mt-2">
                <input type="checkbox" checked className="ml-1" />
                <p className="w-[370px] h-[26px] font-normal text-[18px] ">
                  Gas Performance Certificate
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FIFTH SECTION TERMS AND CONDITIONS */}
        <div className="w-[1240px] h-[312px] rounded-xl p-[40px] gap-[16px] shadow-md">
          <div className="w-[1160px] h-[232px] gap-[40px]">
            <div className="w-[1160px] h-[134px] gap-[20px]">
              <p className="w-[1160px] h-[36px] font-semibold text-[28px]">
                Terms And Conditions
              </p>
              <div className="mt-2 w-[1160px] h-[78px] gap-[14px] flex items-center">
                <div className="w-[24px] h-[24px]">
                  <input type="checkbox" checked />
                </div>
                <div className="w-[1122px] h-[78px] pt-3">
                  I hereby confirm that I, as the landlord of this property, do
                  not impose any administrative fees on tenants. Additionally, I
                  assert my rightful authority to offer the property for sale.
                  Furthermore, I willingly agree to abide by the{" "}
                  <Link to="/termsofuse">Terms and Conditions</Link> as well as
                  the <Link to="privacypolicy">Privacy Policy</Link> of Linked
                  Bricks
                </div>
              </div>
            </div>
            <div className="w-[1160px] h-[50px] gap-[8px] mt-[40px] flex justify-end mb-[150px]">
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
        </div>
      </div>
    </>
  );
};

export default Preview;
