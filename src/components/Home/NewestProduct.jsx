"use client"

import ProductCard from "../cards/ProductCard";
import { Products } from "../../constant/Products";

const NewestProduct = () => {
  return (
      <div className="mt-12"> 
        <h2 className="text-2xl">Produk Terbaru</h2>
        <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:gap-2">
         {Products.map((product, index) => (
          <ProductCard url={`${product.store}/${index}`} product={product} />
         ))} 
        </div>
      </div>
  )

}
export default NewestProduct;