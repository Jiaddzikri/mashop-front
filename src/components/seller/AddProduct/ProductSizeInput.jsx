"use client";

import { useEffect, useRef, useState } from "react";
import { ProductSizeCard } from "./Card";

const ProductSizeInput = ({ setForm }) => {
  const sizeRef = useRef(null);
  const additionalCostRef = useRef(null);
  const quantityRef = useRef(null);

  const [productSize, setProductSize] = useState([]);

  const addSizeHandler = () => {
    const newSizeProperties = {
      product_size: sizeRef.current.value,
      additional_cost: additionalCostRef.current.value,
      quantity: quantityRef.current.value,
    };
    setProductSize((prev) => [...prev, newSizeProperties]);
  };

  useEffect(() => {
    if (productSize.length == 0) return;

    setForm((prev) => ({ ...prev, size: productSize }));
  }, [productSize]);

  return (
    <div className="relative my-6 px-2">
      <div>
        <label className="block mt-3 mb-2 text-sm text-gray-900 dark:text-white">
          Product Size *
        </label>
        <input
          ref={sizeRef}
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
            ref={additionalCostRef}
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
            ref={quantityRef}
            type="text"
            id="quantity-input"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="999"
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
          type="button"
          className="mt-3 text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={addSizeHandler}
        >
          Add Product Size
        </button>
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        {productSize.length > 0
          ? productSize.map((size, index) => (
              <ProductSizeCard
                sizeData={size}
                sizeDatas={productSize}
                setSizeDatas={setProductSize}
                index={index}
              />
            ))
          : ""}
      </div>
    </div>
  );
};
export default ProductSizeInput;
