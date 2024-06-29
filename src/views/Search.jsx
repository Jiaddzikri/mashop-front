"use client";

import Aside from "../components/Search/Aside";
import Filter from "../components/Search/Filter";
import ProductSearch from "../components/Search/ProductSearch";

const Search = () => {
  return (
    <div className="relative overflow-x-hidden px-2 xl:px-4 mt-28 flex lg:gap-3 xl:gap-5 mb-12">
      <Aside />
      <div className="relative w-full">
        <Filter />
        <ProductSearch />
      </div>
    </div>
  );
};
export default Search;
