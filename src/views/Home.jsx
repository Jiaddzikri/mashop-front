"use client";

import { register } from "swiper/element";

register();

const Home = () => {
  return (
    <div className="px-4 md:px-12 lg:px-36">
      <div className="relative mt-32 bg-red-500">
        <swiper-container slides-per-view="1">
          <swiper-slide>
            <img className="" src="/images/banner-1.webp" alt="" />
          </swiper-slide>

          <swiper-slide>
            <img src="/images/banner-2.webp" alt="" />
          </swiper-slide>

          <swiper-slide>
            <img src="/images/banner-3.webp" alt="" />
          </swiper-slide>

          <swiper-slide>
            <img src="/images/banner-4.webp" alt="" />
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  );
};
export default Home;
