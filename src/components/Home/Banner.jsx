"use client"

import { register } from "swiper/element";


register();
const Banner = () => {
  return (
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
  )

}
export default Banner;