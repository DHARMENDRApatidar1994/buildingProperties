// import React from 'react'
// import { location } from '../../assets/svg';

// const Input = () => {
//     return (
//       <>
//         <input className="w-[1160px] h-[60px] rounded-xl border py-3 px-4 gap-[10px] border-[#FFEBB0] focus outline-none relative" />
//         <div className="w-[1160px] h-[26px] gap-[10px] ">
//           <div className="h-[24px] w-[24px]">
//             <div className="w-[17px] h-[19px] top-[2.5px] left-[3.5px] absolute">
//               {location}
//             </div>
//           </div>
//         </div>
//       </>
//     );
// }

// export default Input

import React from "react";

const Input = ({ extrastyle, placeholder, type, ...otherprops }) => {
  return (
    <div className="mr-[10px] ">
      <input
        placeholder={placeholder}
        type={type}
        className={`w-[1160px] h-[50px] rounded-xl py-3 px-4  text-[18px] font-normal shadow-sm  placeholder:text-[#A6A7A8]  focus outline-none  sm:text-sm sm:leading-6 border border-[#FFEBB0] ${extrastyle}`}
        {...otherprops}
      />
    </div>
  );
};

export default Input;
