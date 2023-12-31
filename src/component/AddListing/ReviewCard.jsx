import React from "react";
import avatarImg1 from "../../assets/Images/AddListing/avatar.png";

const ReviewCard = () => {
  return (
    <>
      <div class="w-[358px] h-[216px] rounded-xl p-4 max-w-sm bg-white gap-4">
        <div className="h-[184px] w-[326px] gap-2.5">
          <div className="h-[40px] gap-2.5 gap-y-2.5 flex">
            <img
              className="w-[40px] h-[40px] rounded-full"
              src={avatarImg1}
              alt="Rounded avatar"
            />
            <div>
              <p className="font-semibold text-sm">Guy Hawkins (Landlord)</p>
              <p className="font-light text-sm">Jun 21, 2021</p>
            </div>
          </div>
          <div className="mt-4 w-[326px] h-[72px] text-left text-base">
            <p className="font-light text-base">
              Our property sale was Professionally handled by Linked Bricks
              throughout the entire process...
            </p>
          </div>
          <div className="w-[326px] h-[40px] flex justify-between mt-4">
            {/* svg */}
            <div className="flex items-center">
              <svg
                width="128"
                height="24"
                viewBox="0 0 128 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.3715 8.88107L14.488 9.11728L14.7486 9.15488L19.9851 9.91014L16.2008 13.6021L16.013 13.7853L16.0571 14.044L16.9469 19.2655L12.2631 16.7976L12.03 16.6748L11.7969 16.7976L7.11482 19.2646L8.01276 14.0448L8.05739 13.7853L7.86877 13.6017L4.0763 9.90994L9.31138 9.15488L9.57204 9.11728L9.68847 8.88107L12.03 4.13087L14.3715 8.88107Z"
                  fill="#43A048"
                  stroke="#43A048"
                />
                <path
                  d="M40.3715 8.88107L40.488 9.11728L40.7486 9.15488L45.9851 9.91014L42.2008 13.6021L42.013 13.7853L42.0571 14.044L42.9469 19.2655L38.2631 16.7976L38.03 16.6748L37.7969 16.7976L33.1148 19.2646L34.0128 14.0448L34.0574 13.7853L33.8688 13.6017L30.0763 9.90994L35.3114 9.15488L35.572 9.11728L35.6885 8.88107L38.03 4.13087L40.3715 8.88107Z"
                  fill="#43A048"
                  stroke="#43A048"
                />
                <path
                  d="M66.3715 8.88107L66.488 9.11728L66.7486 9.15488L71.9851 9.91014L68.2008 13.6021L68.013 13.7853L68.0571 14.044L68.9469 19.2655L64.2631 16.7976L64.03 16.6748L63.7969 16.7976L59.1148 19.2646L60.0128 14.0448L60.0574 13.7853L59.8688 13.6017L56.0763 9.90994L61.3114 9.15488L61.572 9.11728L61.6885 8.88107L64.03 4.13087L66.3715 8.88107Z"
                  fill="#43A048"
                  stroke="#43A048"
                />
                <path
                  d="M92.3715 8.88107L92.488 9.11728L92.7486 9.15488L97.9851 9.91014L94.2008 13.6021L94.013 13.7853L94.0571 14.044L94.9469 19.2655L90.2631 16.7976L90.03 16.6748L89.7969 16.7976L85.1148 19.2646L86.0128 14.0448L86.0574 13.7853L85.8688 13.6017L82.0763 9.90994L87.3114 9.15488L87.572 9.11728L87.6885 8.88107L90.03 4.13087L92.3715 8.88107Z"
                  fill="#43A048"
                  stroke="#43A048"
                />
                <path
                  d="M118.372 8.88107L118.488 9.11728L118.749 9.15488L123.985 9.91014L120.201 13.6021L120.013 13.7853L120.057 14.044L120.947 19.2655L116.263 16.7976L116.03 16.6748L115.797 16.7976L111.115 19.2646L112.013 14.0448L112.057 13.7853L111.869 13.6017L108.076 9.90994L113.311 9.15488L113.572 9.11728L113.688 8.88107L116.03 4.13087L118.372 8.88107Z"
                  fill="#43A048"
                  stroke="#43A048"
                />
              </svg>
            </div>
            {/* svg */}

            <div>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="19.5" stroke="#0D0E0F" />
                <path
                  d="M24.7915 15V20C24.7915 20.345 24.5115 20.625 24.1665 20.625C23.8215 20.625 23.5415 20.345 23.5415 20V16.5092L15.4415 24.6092C15.3198 24.7308 15.1598 24.7925 14.9998 24.7925C14.8398 24.7925 14.6798 24.7317 14.5581 24.6092C14.314 24.365 14.314 23.9691 14.5581 23.725L22.6581 15.625H19.1665C18.8215 15.625 18.5415 15.345 18.5415 15C18.5415 14.655 18.8215 14.375 19.1665 14.375H24.1665C24.2481 14.375 24.3291 14.3918 24.4057 14.4234C24.5582 14.4868 24.6799 14.6084 24.7441 14.7618C24.7749 14.8376 24.7915 14.9183 24.7915 15Z"
                  fill="#0D0E0F"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
