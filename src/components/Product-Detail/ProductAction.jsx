"use client";

import { useEffect, useState } from "react";

const ProductAction = () => {
  const [is_buy_container_active, set_buy_container_active] = useState(false),
    [count, set_count] = useState(1);
  let stock = 5;

  const handleCountPlus = () => {
    if (count == stock) return;
    set_count((prev) => ++prev);
  };

  const handleCountMin = () => {
    if (count == 1) return;
    set_count((prev) => --prev);
  };

  useEffect(() => {
    is_buy_container_active
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [is_buy_container_active]);

  return (
    <div>
      <div className="xl:col-span-1 hidden xl:block xl:sticky xl:top-28 ml-12 py-4 px-3 border-[1px] border-gray-300 w-[300px] h-max rounded-xl">
        <h2 className="font-semibold">Atur Jumlah dan Catatan</h2>
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
            onClick={() => set_buy_container_active((prev) => !prev)}
            type="button"
            className="w-[40%] rounded-full border-[1px] bg-blue-500 text-white h-10"
          >
            Beli
          </button>
        </div>
        <div
          className={`fixed ${is_buy_container_active ? "top-[100vh] translate-y-[-100vh]" : ""}  w-screen h-screen z-40 bg-[#0000005c] transition delay-150`}
        >
          <div className="relative w-full h-full">
            <div className={`absolute translate-x-[${
            is_buy_container_active ? "0" : "100%"
          }] w-full bottom-0 bg-white rounded-tl-2xl rounded-tr-2xl p-5 pb-12`}>
              <div className="block lg:hidden relative">
                <button
                  onClick={() => set_buy_container_active((prev) => !prev)}
                  className="w-6 h-6 relative flex flex-col items-center justify-center gap-[5px]"
                >
                  <span
                    className={`absolute w-6 h-[2px] bg-gray-500 rounded-xl rotate-[45deg]`}
                  ></span>
                  <span
                    className={`absolute w-6 h-[2px] bg-gray-500 rounded-xl rotate-[-45deg]`}
                  ></span>
                </button>
              </div>
              <div className="mt-12 flex gap-3 items-center">
                <img
                  src="/images/product-1.webp"
                  className="w-32 rounded-xl border border-gray-500"
                  alt=""
                />
                <div className="flex flex-col">
                  <span className="font-semibold">Rp32.000.000</span>
                  <span className="text-sm text-gray-500">Stok : 5</span>
                </div>
              </div>
              <div>
                <div className="w-max flex items-center border-[1px] border-gray-300 bg-white mt-4 rounded-xl">
                  <button
                    onClick={handleCountMin}
                    className="w-14 py-2 text-xl"
                  >
                    -
                  </button>
                  <span>{count}</span>
                  <button
                    onClick={handleCountPlus}
                    className="w-14 py-2 text-xl"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:shadow-sm"
                  placeholder="tulis catatan disini..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductAction;
