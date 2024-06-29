"use client";

import { useState } from "react";

const ProductDescription = () => {
  const [is_desc_expand, set_desc_expand] = useState(false);
  return (
    <div className="col-span-3 lg:col-span-2 xl:col-span-1 mx-auto px-3 lg:px-0">
      <div className="flex flex-col">
        <h1 className="order-2 lg:order-1 text-md lg:text-xl font-semibold mt-3 sm:mt-0">
          Lenovo Legion Slim 5 16IRH8 82YA008KID Gaming Notebook - Storm Grey (
          i7-13700H / 2x 8GB (16GB) / 512GB SSD / RTX4060 / 16" WQXGA IPS /
          Win11 / OHS )
        </h1>
        <div className="order-3 xl:order-2 mt-2 flex items-center text-sm text-gray-500">
          <span>
            <svg
              className="w-4"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 47.94 47.94"
              xmlSpace="preserve"
            >
              <path
                style={{ fill: "#ED8A19" }}
                d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
	C22.602,0.567,25.338,0.567,26.285,2.486z"
              />
            </svg>
          </span>
          <span className="ml-1">4.9</span>
          <span className="mx-1">|</span>
          <span>Terjual 250+</span>
        </div>
        <div className="order-1 xl:order-3">
          <h3 className="text-3xl font-semibold mt-0 xl:mt-2">Rp32.000.000</h3>
        </div>
      </div>
      <div className="mt-10 ">
        <div className="relative text-center flex gap-5 border-b-[1px] border-gray-300 pb-3">
          <a href="#" className="w-24">
            Deskripsi
          </a>
          <span className="absolute left-0 bottom-[-2px] w-24 h-1 bg-blue-500"></span>
        </div>
        <div
          className={`mt-4 ${
            is_desc_expand ? "" : "line-clamp-[8]"
          } text-sm h-max overflow-hidden`}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            quod repellat voluptatum reiciendis temporibus, beatae recusandae
            facilis? Officia ducimus iusto, ipsum eius natus ipsa quas magnam
            quod non id quaerat laborum quidem. Cupiditate, corrupti? Rem,
            accusamus? Aspernatur aliquam repellendus quidem illum tenetur
            dolorum, praesentium unde possimus consectetur odit perspiciatis ex!
            Cupiditate perferendis quas adipisci labore omnis ex odio minima sed
            atque nostrum. Soluta possimus labore quasi qui at consectetur
            perferendis facere corporis cupiditate! Labore sunt eveniet maiores
            nisi. Illum possimus assumenda id rerum fugit nesciunt obcaecati
            excepturi optio officia placeat? Velit, repellendus rem! Dicta,
            debitis iste sed a delectus eos?
          </p>
        </div>
        <button
          type="button"
          className="font-semibold text-blue-500"
          onClick={() => set_desc_expand((prev) => !prev)}
        >
          {is_desc_expand ? "lihat lebih sedikit" : "lihat selengkapnya"}
        </button>
      </div>
      <div className="mt-4 border border-gray-300 rounded-xl py-2 px-3">
        <div className="flex gap-3 items-center relative">
          <img
            className="w-14 rounded-full border border-gray-300"
            src="/images/product-1.webp"
            alt="seller-picture"
          />
          <div className="flex flex-col items-start">
            <h2 className="text-md font-semibold">Jiadstore</h2>
            <span className="text-sm text-gray-500">Online 7 jam lalu</span>
          </div>
          <button className="absolute right-3 font-semibold text-blue-500 text-sm mt-1">
            +ikuti
          </button>
        </div>
        <div className="flex justify-center text-sm gap-2 mt-3 text-gray-500">
          <svg
            className="w-4"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 47.94 47.94"
            xmlSpace="preserve"
          >
            <path
              style={{ fill: "#ED8A19" }}
              d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
	C22.602,0.567,25.338,0.567,26.285,2.486z"
            />
          </svg>
          <p>
            Rating Seller :{" "}
            <span className="text-blue-500 font-semibold">99%</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProductDescription;
