"use client"

import ProductCard from "../cards/ProductCard";

const NewestProduct = () => {
  return (
      <div className="mt-12"> 
        <h2 className="text-2xl">Produk Terbaru</h2>
        <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:gap-2">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
  )

}
export default NewestProduct;