"use client";

import FilterDropdown from "../dropdowns/FilterDropdown";
import CheckBox from "../input/CheckBox";

const Aside = () => {
  const filterCheckBoxHandler = (e) => {
    const { value } = e.target;
  };
  return (
    <div>
      {/* Filter Container */}
      <aside className="w-[220px] border border-gray-300 rounded-lg hidden lg:flex lg:flex-col lg:gap-3 px-6 py-4">
        <FilterDropdown text="Lokasi">
          <CheckBox
            event={filterCheckBoxHandler}
            text={"DKI Jakarta"}
            value={"DKI Jakarta"}
          />
          <CheckBox
            event={filterCheckBoxHandler}
            text={"Bandung"}
            value={"Bandung"}
          />
          <CheckBox
            event={filterCheckBoxHandler}
            text={"Surabaya"}
            value={"Surabaya"}
          />
        </FilterDropdown>
        <FilterDropdown text="Harga">
          <div className="relative mt-2 box-border">
            <span className="absolute left-3 top-2 font-semibold">Rp</span>
            <input
              type="text"
              value={"12,3 jt"}
              className="w-full pl-10 py-2 bg-gray-200 rounded-lg outline-none focus:shadow-sm"
            />
          </div>
          <div className="relative mt-2">
            <span className="absolute left-3 top-2 font-semibold">Rp</span>
            <input
              type="text"
              value={"24,4 jt"}
              className="w-full pl-10 py-2 bg-gray-200 rounded-lg outline-none focus:shadow-sm"
            />
          </div>
        </FilterDropdown>
      </aside>
      {/* end of FIlter Container*/}
    </div>
  );
};
export default Aside;
