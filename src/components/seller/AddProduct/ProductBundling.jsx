"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { ProductBundlingCard } from "./Card";

const ProductBundling = React.memo(({ setForm }) => {
  const _productImage = useRef(null);
  const _productSpesification = useRef(null);
  const _productColor = useRef(null);
  const _productSize = useRef(null);
  const _additionalCost = useRef(null);
  const _stock = useRef(null);

  const [_bundlings, setBundling] = useState([]);

  const addProductBundling = () => {
    const bundling = {
      color_image: _productImage.current.files[0],
      spesification: _productSpesification.current.value,
      color: _productColor.current.value,
      size: _productSize.current.value,
      additional_cost: _additionalCost.current.value,
      stock: _stock.current.value,
    };
    setBundling((prev) => [...prev, bundling]);
  };

  useEffect(() => {
    setForm((prev) => ({ ...prev, bundlings: _bundlings }));
  }, [_bundlings]);

  return (
    <div className="relative my-6 px-2">
      <h3 className="mb-3">Color Images</h3>
      <label
        htmlFor="color-image"
        className="flex flex-col items-center justify-center w-full md:w-[calc(98%/2)] xl:w-[calc(96%/4)] h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="my-2 font-bold text-xs text-gray-500 dark:text-gray-400">
            Warna Product
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 400x400px)
          </p>
        </div>
        <input
          ref={_productImage}
          id="color-image"
          type="file"
          className="hidden"
        />
      </label>
      <div>
        <label className="block mt-3 mb-2 text-sm text-gray-900 dark:text-white">
          Product Color (optional)
        </label>
        <input
          ref={_productColor}
          type="text"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
        />
        <p
          id="helper-text-explanation"
          className="mt-2 text-sm text-gray-500 dark:text-gray-400"
        >
          Error
        </p>
      </div>
      <div>
        <label className="block mt-3 mb-2 text-sm text-gray-900 dark:text-white">
          Product Speisification (optional)
        </label>
        <input
          ref={_productSpesification}
          type="text"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
        />
        <p
          id="helper-text-explanation"
          className="mt-2 text-sm text-gray-500 dark:text-gray-400"
        >
          Error
        </p>
      </div>
      <div>
        <label className="block mt-3 mb-2 text-sm text-gray-900 dark:text-white">
          Product Size (optional)
        </label>
        <input
          ref={_productSize}
          type="text"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
        />
        <p
          id="helper-text-explanation"
          className="mt-2 text-sm text-gray-500 dark:text-gray-400"
        >
          Error
        </p>
      </div>
      <div className="mt-5">
        <label className="block mb-2 text-sm text-gray-900 dark:text-white">
          Additional Cost (Rp0)
        </label>
        <div className="relative">
          <input
            ref={_additionalCost}
            type="number"
            className="w-[30%] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Rp0"
            required
          />
          <p
            id="helper-text-explanation"
            className="mt-2 text-sm text-gray-500 dark:text-gray-400"
          >
            Error
          </p>
        </div>
      </div>
      <div className="mt-5">
        <label
          htmlFor="quantity-input"
          className="block mb-2 text-sm text-gray-900 dark:text-white"
        >
          Choose quantity*
        </label>
        <div className="relative flex items-center max-w-[8rem]">
          <button
            type="button"
            id="decrement-button"
            className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
          >
            <svg
              className="w-3 h-3 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          <input
            ref={_stock}
            type="text"
            id="quantity-input"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={0}
            required
          />
          <button
            type="button"
            id="increment-button"
            className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
          >
            <svg
              className="w-3 h-3 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
        <p
          id="helper-text-explanation"
          className="mt-2 text-sm text-gray-500 dark:text-gray-400"
        >
          Error
        </p>
        <button
          onClick={addProductBundling}
          type="button"
          className="mt-3 text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Add Product Bundling
        </button>
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        {_bundlings.length > 0
          ? _bundlings.map((_bundling, index) => (
              <ProductBundlingCard
                bundlings={_bundlings}
                bundling={_bundling}
                index={index}
                setBundlings={setBundling}
              />
            ))
          : ""}
        
      </div>
    </div>
  );
});
export default ProductBundling;
