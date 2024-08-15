"use client"

import { useState } from "react";
import ProductCard from "../cards/ProductCard";
import { Products } from "../../constant/Products";

const ProductSearch = () => {
  const [filter_button_expand, set_filter_button_expand] = useState(false);

  return (
    <div className="mt-8">
      <div className="w-full 2xl:px-8 xl:border xl:border-gray-300 rounded-lg">
        <div className="xl:px-4 my-5 lg:flex lg:justify-between lg:items-center">
          <div className="px-2 2xl:px-0">
            <span className="text-sm text-gray-500">Hasil untuk pencarian <a href="" className="text-blue-500 font-[500]">Iphone</a> : {Products.length} hasil.</span>
          </div>
          <div onClick={(() => set_filter_button_expand((prev) => !prev))} className="relative hidden lg:flex lg:justify-start lg:gap-3 lg:items-center w-[250px] bg-gray-100 py-3 px-6 rounded-lg hover:bg-gray-200 transition cursor-pointer">
            <svg
              className="fill-current w-6 col-span-2 row-span-4 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 490 490"
              xmlSpace="preserve"
            >
              <g>
                <polygon
                  points="85.877,154.014 85.877,428.309 131.706,428.309 131.706,154.014 180.497,221.213 217.584,194.27 108.792,44.46 
		0,194.27 37.087,221.213 	"
                />
                <polygon
                  points="404.13,335.988 404.13,61.691 358.301,61.691 358.301,335.99 309.503,268.787 272.416,295.73 381.216,445.54 
		490,295.715 452.913,268.802 	"
                />
              </g>
            </svg>
            <div className="flex flex-col">
              <span className="text-[14px] text-blue-500">Urutkan</span>
              <span className="font-[500]">Relevansi</span>
            </div>
            <div className="absolute right-5 top-[35%]">
              <svg
                className={`fill-current w-6 transition`}
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z" />
              </svg>
            </div>
            {/* dropdown */}
            <div className={`${filter_button_expand ? "block" : "hidden"} absolute top-20 left-0 w-full border border-gray-300 bg-white px-6 py-5 z-20 shadow-lg rounded-lg`}>
              <ul className="flex flex-col">
                <li className="border-b border-t border-gray-300">
                  <button type="button" className="w-full py-2 px-4 my-1 hover:bg-gray-200 rounded-lg text-start">Relevansi</button>
                </li>
                <li className="border-b border-t border-gray-300">
                  <button type="button" className="w-full py-2 px-4 my-1 hover:bg-gray-200 rounded-lg text-start">Termahal</button>
                </li>
                <li className="border-b border-t border-gray-300">
                  <button type="button" className="w-full py-2 px-4 my-1 hover:bg-gray-200 rounded-lg text-start">Termurah</button>
                </li>
                <li className="border-b border-t border-gray-300">
                  <button type="button" className="w-full py-2 px-4 my-1 hover:bg-gray-200 rounded-lg text-start">Terpopuler</button>
                </li>
                <li className="border-b border-t border-gray-300">
                  <button type="button" className="w-full py-2 px-4 my-1 hover:bg-gray-200 rounded-lg text-start">Termurah</button>
                </li>
              </ul>
            </div>

            {/* end dropdown */}
          </div>
        </div>
        <div className="grid gap-2 lg:gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:px-4">
          {Products.map((product, index) => (
            <ProductCard product={product} url={`${product.store}/${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductSearch;
