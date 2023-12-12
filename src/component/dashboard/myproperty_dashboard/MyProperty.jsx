import React from "react";
import myproperyimg from "../../../assets/Images/property/myproperty.png";
import editIcons from "../../../assets/Images/property/editIcons24.png";
import insideIcons from "../../../assets/Images/property/insideIcons24.png";
import bubleIcons from "../../../assets/Images/property/bubleIcons24.png";
import deletIcons from "../../../assets/Images/property/deletIcons24.png";

import bed24 from "../../../assets/Images/property/bed24.png";
import bathub24 from "../../../assets/Images/property/bathub24.png";
import Chairs24 from "../../../assets/Images/property/Chairs24.png";

function MyProperty(props) {
  return (
    <div className="mt-[138px]">
      <div className=" h-[36px] mb-[20px]">
        <div class="container">
          <div class="row">
            <div class="col">
              <div className="  text-[26px] font-semibold ">My properties</div>
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
      <div className=" h-[824px] ">
        <div className=" h-[26px] ">
          <div class="container">
            <div class="row">
              <div class="col">
                <p className="text-start text-[18px] font-semibold">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 float-left mt-[3px]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                  Active
                </p>
              </div>
              <div class="col">
                <p className=" text-[18px] font-semibold text-[#098895] text-end">
                  3 Properties
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-[246px]">
          <div class="container ">
            <div class="row">
              <div class="col">
                <img
                  src={myproperyimg}
                  alt=""
                  className="w-[505px] h-[246px] float-left"
                />
              </div>
              <div class="col">
                <div className="my-[20px]  h-[44px]">
                  <div class="container ">
                    <div class="row">
                      <div class="col">
                        <h2 className="text-[36px] font-semibold ">£4,250</h2>
                      </div>
                      <div class="col">
                        <div class="container ">
                          <div class="row">
                            <div class="col">
                              <div className="">
                                <img
                                  src={editIcons}
                                  alt=""
                                  className="w-[24px] h-[24px] float-left mx-[4px] mt-[8px]"
                                />
                              </div>
                            </div>
                            <div class="col">
                              <div className=" ">
                                <img
                                  src={insideIcons}
                                  alt=""
                                  className="w-[24px] h-[24px] float-left mx-[4px] mt-[8px]"
                                />
                              </div>
                            </div>
                            <div class="col">
                              <div className=" ">
                                <img
                                  src={bubleIcons}
                                  alt=""
                                  className="w-[24px] h-[24px] float-left mx-[4px] mt-[8px]"
                                />
                              </div>
                            </div>
                            <div class="col">
                              <div className=" ">
                                <img
                                  src={deletIcons}
                                  alt=""
                                  className="w-[24px] h-[24px] float-left mx-[4px] mt-[8px]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" h-[66px]">
                  <div class="container ">
                    <div class="row">
                      <div className=" h-[36px]">
                        <h2 className="text-[26px] font-semibold text-[#135966]">
                          Semi detached house
                        </h2>
                      </div>
                      <div className="mt-[4px] h-[26px]">
                        <h2 className="text-[18px] font-normal ">
                          Semi detached house
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-[20px] h-[56px]">
                  <div class="container ">
                    <div class="row">
                      <div class="col ">
                        <div className=" text-start">
                          <img
                            src={bed24}
                            alt=""
                            className="w-[24px] h-[24px] float-left mx-[4px] mt-[8px]"
                          />
                          <span className="text-[14px] font-normal">
                            3 beds
                          </span>
                        </div>
                      </div>
                      <div class="col ">
                        <div className="text-start ">
                          <img
                            src={bathub24}
                            alt=""
                            className="w-[24px] h-[24px] float-left mx-[4px] mt-[8px]"
                          />
                          <span className="text-[14px] font-normal ">
                            2 baths
                          </span>
                        </div>
                      </div>
                      <div class="col ">
                        <div className="text-start">
                          <img
                            src={Chairs24}
                            alt=""
                            className="w-[24px] h-[24px] float-left mx-[4px] mt-[8px] "
                          />
                          <span className="text-[14px] font-normal">
                            Semi-fernished
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-[20px] h-[246px]">
          <div class="container ">
            <div class="row">
              <div class="col">
                <img
                  src={myproperyimg}
                  alt=""
                  className="w-[505px] h-[246px] float-left"
                />
              </div>
              <div class="col">
                <div className="my-[20px]  h-[44px]">
                  <div class="container ">
                    <div class="row">
                      <div class="col">
                        <h2 className="text-[36px] font-semibold ">£4,250</h2>
                      </div>
                      <div class="col">
                        <div class="container ">
                          <div class="row">
                            <div class="col">
                              <div className="">
                                <img
                                  src={editIcons}
                                  alt=""
                                  className="w-[24px] h-[24px] float-left mx-[4px] mt-[8px]"
                                />
                              </div>
                            </div>
                            <div class="col">
                              <div className=" ">
                                <img
                                  src={insideIcons}
                                  alt=""
                                  className="w-[24px] h-[24px] float-left mx-[4px] mt-[8px]"
                                />
                              </div>
                            </div>
                            <div class="col">
                              <div className=" ">
                                <img
                                  src={bubleIcons}
                                  alt=""
                                  className="w-[24px] h-[24px] float-left mx-[4px] mt-[8px]"
                                />
                              </div>
                            </div>
                            <div class="col">
                              <div className=" ">
                                <img
                                  src={deletIcons}
                                  alt=""
                                  className="w-[24px] h-[24px] float-left mx-[4px] mt-[8px]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" h-[66px]">
                  <div class="container ">
                    <div class="row">
                      <div className=" h-[36px]">
                        <h2 className="text-[26px] font-semibold text-[#135966]">
                          Semi detached house
                        </h2>
                      </div>
                      <div className="mt-[4px] h-[26px]">
                        <h2 className="text-[18px] font-normal ">
                          Semi detached house
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-[20px] h-[56px]">
                  <div class="container ">
                    <div class="row">
                      <div class="col ">
                        <div className=" text-start">
                          <img
                            src={bed24}
                            alt=""
                            className="w-[24px] h-[24px] float-left mx-[4px] mt-[8px]"
                          />
                          <span className="text-[14px] font-normal">
                            3 beds
                          </span>
                        </div>
                      </div>
                      <div class="col ">
                        <div className="text-start ">
                          <img
                            src={bathub24}
                            alt=""
                            className="w-[24px] h-[24px] float-left mx-[4px] mt-[8px]"
                          />
                          <span className="text-[14px] font-normal ">
                            2 baths
                          </span>
                        </div>
                      </div>
                      <div class="col ">
                        <div className="text-start">
                          <img
                            src={Chairs24}
                            alt=""
                            className="w-[24px] h-[24px] float-left mx-[4px] mt-[8px] "
                          />
                          <span className="text-[14px] font-normal">
                            Semi-fernished
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-[246px]">
          <div class="container ">
            <div class="row">
              <div class="col">
                <img
                  src={myproperyimg}
                  alt=""
                  className="w-[505px] h-[246px] float-left"
                />
              </div>
              <div class="col">
                <div className="my-[20px]  h-[44px]">
                  <div class="container ">
                    <div class="row">
                      <div class="col">
                        <h2 className="text-[36px] font-semibold ">£4,250</h2>
                      </div>
                      <div class="col">
                        <div class="container ">
                          <div class="row">
                            <div class="col">
                              <div className="">
                                <img
                                  src={editIcons}
                                  alt=""
                                  className="w-[24px] h-[24px] float-left mx-[4px] mt-[8px]"
                                />
                              </div>
                            </div>
                            <div class="col">
                              <div className=" ">
                                <img
                                  src={insideIcons}
                                  alt=""
                                  className="w-[24px] h-[24px] float-left mx-[4px] mt-[8px]"
                                />
                              </div>
                            </div>
                            <div class="col">
                              <div className=" ">
                                <img
                                  src={bubleIcons}
                                  alt=""
                                  className="w-[24px] h-[24px] float-left mx-[4px] mt-[8px]"
                                />
                              </div>
                            </div>
                            <div class="col">
                              <div className=" ">
                                <img
                                  src={deletIcons}
                                  alt=""
                                  className="w-[24px] h-[24px] float-left mx-[4px] mt-[8px]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" h-[66px]">
                  <div class="container ">
                    <div class="row">
                      <div className=" h-[36px]">
                        <h2 className="text-[26px] font-semibold text-[#135966]">
                          Semi detached house
                        </h2>
                      </div>
                      <div className="mt-[4px] h-[26px]">
                        <h2 className="text-[18px] font-normal ">
                          Semi detached house
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-[20px] h-[56px]">
                  <div class="container ">
                    <div class="row">
                      <div class="col ">
                        <div className=" text-start">
                          <img
                            src={bed24}
                            alt=""
                            className="w-[24px] h-[24px] float-left mx-[4px] mt-[8px]"
                          />
                          <span className="text-[14px] font-normal">
                            3 beds
                          </span>
                        </div>
                      </div>
                      <div class="col ">
                        <div className="text-start ">
                          <img
                            src={bathub24}
                            alt=""
                            className="w-[24px] h-[24px] float-left mx-[4px] mt-[8px]"
                          />
                          <span className="text-[14px] font-normal ">
                            2 baths
                          </span>
                        </div>
                      </div>
                      <div class="col ">
                        <div className="text-start">
                          <img
                            src={Chairs24}
                            alt=""
                            className="w-[24px] h-[24px] float-left mx-[4px] mt-[8px] "
                          />
                          <span className="text-[14px] font-normal">
                            Semi-fernished
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProperty;
