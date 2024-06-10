"use client";

import { register } from "swiper/element";
import ProductCard from "../components/cards/ProductCard";

register();

const Home = () => {
  return (
    <div className="px-3 sm:px-4 md:px-12 lg:px-36">
      <div className="relative mt-28 rounded-xl overflow-hidden">
        <swiper-container slides-per-view="1" loop="true" centered-slides="true">
          <swiper-slide>
            <img className="relative w-full h-[115px] sm:h-[250px] bg-center" src="/images/banner-1.webp" alt="" />
          </swiper-slide>

          <swiper-slide>
            <img className="relative w-full h-[115px] sm:h-[250px] bg-center" src="/images/banner-2.webp" alt="" />
          </swiper-slide>

          <swiper-slide>
            <img className="relative w-full h-[115px] sm:h-[250px] bg-center" src="/images/banner-3.webp" alt="" />
          </swiper-slide>

          <swiper-slide>
            <img className="relative w-full h-[115px] sm:h-[250px] bg-center" src="/images/banner-4.webp" alt="" />
          </swiper-slide>
        </swiper-container>
      </div> 
      <div className="mt-12"> 
        <h2 className="text-2xl">Produk Terbaru</h2>
        <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl-grid-cols-6 gap-1 sm:gap-2">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};
export default Home;
