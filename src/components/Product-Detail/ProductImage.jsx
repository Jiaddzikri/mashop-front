"use client";

import { useState } from "react";
import { register } from "swiper/element";

register();
const ProductImage = () => {
  const [main_product_image_url, set_main_product_image] = useState(null);
  const imageEnterHandler = (e) => {
    set_main_product_image((prev) => (prev = e.target.src));
  };
  return (
    <div className="lg:col-span-1 col-span-3 mx-auto xl:mx-0">
      <div className="w-screen h-max lg:hidden mr-8">
        {/* <1280 view */}
        <swiper-container slides-per-view="1" space-between="5">
          <swiper-slide>
            <img
              className="w-[95%] mx-auto border border-gray-500"
              src="/images/product-1.webp"
              alt="product"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              className="w-[95%] mx-auto border border-gray-500"
              src="/images/product-2.webp"
              alt="product"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              className="w-[95%] mx-auto border border-gray-500"
              src="/images/product-1.webp"
              alt="product"
            />
          </swiper-slide>
        </swiper-container>
        {/* end of <1280 view */}
      </div>
      {/* for >1280px view */}
      <img
        className="hidden lg:block w-80 border-[1px] border-gray-500 rounded-xl"
        src={main_product_image_url || "/images/product-1.webp"}
        alt="product"
      />
      <div className="hidden lg:block w-80 mt-4">
        <swiper-container slides-per-view="4" space-between="15">
          <swiper-slide>
            <img
              onMouseEnter={imageEnterHandler}
              className="rounded-xl border border-gray-500"
              src="/images/product-2.webp"
              alt="product"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              onMouseEnter={imageEnterHandler}
              className="rounded-xl border border-gray-500"
              src="/images/product-1.webp"
              alt="product"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              onMouseEnter={imageEnterHandler}
              className="rounded-xl border border-gray-500"
              src="/images/product-2.webp"
              alt="product"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              onMouseEnter={imageEnterHandler}
              className="rounded-xl border border-gray-500"
              src="/images/product-1.webp"
              alt="product"
            />
          </swiper-slide>
        </swiper-container>
      </div>
      {/* end of >1280px */}
    </div>
  );
};
export default ProductImage;
