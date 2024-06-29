"use client";

import { useState } from "react";

const FilterDropdown = ({children, text}) => {
  const [is_expand, set_is_expand] = useState(true);
  return (
    <div className="w-full">
      <div onClick={(() => set_is_expand((prev) => !prev))} className="flex justify-between items-center cursor-pointer">
        <span className="text-sm font-[500]">{text}</span>
        <span>
          <svg
          className={`fill-current w-6 transition ${is_expand ? "rotate-[180deg]" : ""} text-blue-500`}  
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z" />
          </svg>
          
        </span>
      </div>
      <div className={`${is_expand ? "block" : "hidden"} mt-2 text-gray-500 text-sm`}>
        {children}
      </div>
    </div>
  );
};
export default FilterDropdown;
