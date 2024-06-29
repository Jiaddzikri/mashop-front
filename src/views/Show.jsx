"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { register } from "swiper/element";
import ProductImage from "../components/Product-Detail/ProductImage";
import ProductDescription from "../components/Product-Detail/ProductDescription";
import ProductAction from "../components/Product-Detail/ProductAction";

register();

const Show = () => {
  const params = useParams();

  return (
    <div className="relative overflow-x-hidden xl:overflow-x-visible grid grid-cols-3 lg:mt-28 mt-24 justify-center gap-10 lg:px-8 xl:px-36">
      <ProductImage />
      <ProductDescription />
      <ProductAction />
    </div>
  );
};
export default Show;
