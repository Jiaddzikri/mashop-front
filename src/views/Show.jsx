"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { register } from "swiper/element";
import ProductImage from "../components/Product-Detail/ProductImage";
import ProductDescription from "../components/Product-Detail/ProductDescription";
import ProductAction from "../components/Product-Detail/ProductAction";
import { Products } from "../constant/Products";

register();

const Show = () => {
  const {seller, product} = useParams();
  const _product = Products[product];
  return (
    <div className="relative overflow-x-hidden xl:overflow-x-visible grid grid-cols-3 lg:mt-28 mt-24 justify-center gap-10 lg:px-8 xl:px-36">
      <ProductImage thumbnail={_product.thumbnail} images={_product.images} />
      <ProductDescription name={_product.name} price={_product.price} description={_product.description} store={_product.store} store_image={_product.store_image} />
      <ProductAction slug={product} price={_product.price} />
    </div>
  );
};
export default Show;
