"use client";

import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { register } from "swiper/element";

register();
const Show = () => {
  const params = useParams(),
    [is_desc_expand, set_desc_expand] = useState(false),
    [count, set_count] = useState(1),
    [main_product_image_url, set_main_product_image] = useState(null);
  let stock = 5;

  const handleCountPlus = () => {
    if (count == stock) return;
    set_count((prev) => ++prev);
  };

  const handleCountMin = () => {
    if (count == 1) return;
    set_count((prev) => --prev);
  };

  const imageEnterHandler = (e) => {
    set_main_product_image((prev) => (prev = e.target.src));
  };

  return (
    <div>
      <div className="relative grid grid-cols-3 lg:mt-28 mt-24 justify-center gap-10 lg:px-8 xl:px-36">
        <div className="lg:col-span-1 col-span-3 mx-auto xl:mx-0">
          <div className="w-screen h-max lg:hidden">
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
        <div className="col-span-3 lg:col-span-2 xl:col-span-1 mx-auto px-3 lg:px-0">
          <div className="flex flex-col">
            <h1 className="order-2 lg:order-1 text-md lg:text-xl font-semibold mt-3 sm:mt-0">
              Lenovo Legion Slim 5 16IRH8 82YA008KID Gaming Notebook - Storm
              Grey ( i7-13700H / 2x 8GB (16GB) / 512GB SSD / RTX4060 / 16" WQXGA
              IPS / Win11 / OHS )
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
              <h3 className="text-3xl font-semibold mt-0 xl:mt-2">
                Rp32.000.000
              </h3>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium quod repellat voluptatum reiciendis temporibus,
                beatae recusandae facilis? Officia ducimus iusto, ipsum eius
                natus ipsa quas magnam quod non id quaerat laborum quidem.
                Cupiditate, corrupti? Rem, accusamus? Aspernatur aliquam
                repellendus quidem illum tenetur dolorum, praesentium unde
                possimus consectetur odit perspiciatis ex! Cupiditate
                perferendis quas adipisci labore omnis ex odio minima sed atque
                nostrum. Soluta possimus labore quasi qui at consectetur
                perferendis facere corporis cupiditate! Labore sunt eveniet
                maiores nisi. Illum possimus assumenda id rerum fugit nesciunt
                obcaecati excepturi optio officia placeat? Velit, repellendus
                rem! Dicta, debitis iste sed a delectus eos?
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
              <p>Rating Seller : <span className="text-blue-500 font-semibold">99%</span></p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 hidden xl:block xl:sticky xl:top-28 xl:right-32 py-4 px-3 border-[1px] border-gray-300 w-[300px] h-max rounded-xl">
          <h2>Atur Jumlah dan Catatan</h2>
          <div className="flex gap-3 mt-2 items-center py-3">
            <div className="flex items-center border-[1px] bg-white">
              <button onClick={handleCountMin} className="w-14 py-2 text-xl">
                -
              </button>
              <span>{count}</span>
              <button onClick={handleCountPlus} className="w-14 py-2 text-xl">
                +
              </button>
            </div>
            <span>Sisa Stok : {stock}</span>
          </div>
          <div className="mt-2">
            <input
              placeholder="catatan..."
              className="px-4 py-2 rounded-md border-[1px] border-slate-300 outline-none focus:shadow"
              type="text"
            />
          </div>
          <div className="flex justify-between mt-4 text-lg">
            <span>Total</span>
            <span className="font-semibold">Rp32.000.000</span>
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <button className="px-4 py-2 border border-blue-500 font-semibold text-blue-500 rounded-lg">
              Tambah Keranjang
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg">
              Beli
            </button>
          </div>
        </div>
        <div className="col-span-3 fixed xl:hidden bottom-0 bg-white shadow-sm w-full z-50">
          <div className="flex py-3 gap-2 text-sm justify-center items-center">
            <button
              type="button"
              className="w-12 h-12 border border-blue-500 rounded-full"
            >
              p
            </button>

            <button
              type="button"
              className="w-[40%] px-2 py-1 col-span-2 rounded-full border-[1px] border-blue-500 text-blue-500 h-10 "
            >
              + Keranjang
            </button>
            <button
              type="button"
              className="w-[40%] rounded-full border-[1px] bg-blue-500 text-white h-10"
            >
              Beli
            </button>
          </div>
        </div>
      </div>
      <footer className="w-full mt-12 col-span-3 border-t border-gray-300 py-5 px-4 xl:px-36 pb-20">
        <div className="flex items-center">
          <img src="/mashop-logo.png" className="w-12" alt="" />
          <p className="text-xl">MaShop</p>
        </div>
        <div className="flex gap-5 mt-8">
          <div>
            <h2 className="text-xl text-blue-500 font-[500]">Customer Care</h2>
            <ul className="mt-2 text-gray-500 text-sm">
              <li className="flex flex-col">
                <span>Telepon</span>
                <span className="font-semibold text-gray-800">
                  0812-2406-8705
                </span>
              </li>
              <li className="flex flex-col mt-3">
                <span>Email</span>
                <span className="font-semibold text-gray-800">
                  mashops.care@mashop.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Show;
