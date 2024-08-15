"use client";

import React from "react";

export const ProductBundlingCard = React.memo(
  ({ bundlings, bundling, index, setBundlings }) => {
    const deleteColorDataHandler = () => {
      const updatedItems = bundlings.filter((data, key) => key != index);
      setBundlings(updatedItems);
    };
    return (
      <div className="px-5 py-2 border border-gray-300 rounded-lg flex gap-3 items-center">
        <img
          src={`${URL.createObjectURL(bundling.color_image)}`}
          alt="product-color"
          className="w-12"
        />
        <div className="text-sm">
          <p>{bundling.name}</p>
          <p className="text-[0.8rem] text-gray-500">
            Additional Cost : Rp{bundling.additional_cost}
          </p>
          <p className="text-[0.8rem] text-gray-500">
            Quantity: {bundling.quantity}
          </p>
        </div>
        <button
          onClick={deleteColorDataHandler}
          className="hover:bg-gray-200 ml-4 p-1 rounded-sm"
        >
          <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
            <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z"></path>
          </svg>
        </button>
      </div>
    );
  }
);

export const ProductSizeCard = ({ sizeData, sizeDatas, setSizeDatas, index }) => {
  const deleteSizeHandler = () => {
      const updatedItems = sizeDatas.filter((data, key) => key != index);
      setSizeDatas(updatedItems);
  }
  return (
    <div className="px-5 py-2 border border-gray-300 rounded-lg flex gap-3 items-center">
      <div className="text-[0.8rem] text-gray-500">
        <p>Product Size : <span className="font-semibold">{sizeData.product_size}</span></p>
        <p>
          Additional Cost : <span className="font-semibold">Rp{sizeData.additional_cost}</span>
        </p>
        <p>
          Quantity: <span className="font-semibold">{sizeData.quantity}</span>
        </p>
      </div>
      <button
        onClick={deleteSizeHandler}
        className="hover:bg-gray-200 ml-4 p-1 rounded-sm"
      >
        <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
          <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z"></path>
        </svg>
      </button>
    </div>
  );
};

export const ProductSpesificationCard = ({ spesificationData, spesificationDatas, setSpesificationDatas, index }) => {
  const deleteSpesificationHandler = () => {
      const updatedItems = spesificationDatas.filter((data, key) => key != index);
      setSpesificationDatas(updatedItems);
  }
  return (
    <div className="px-5 py-2 border border-gray-300 rounded-lg flex gap-3 items-center">
      <div className="text-[0.8rem] text-gray-500">
        <p>Product Spesification : <span className="font-semibold">{spesificationData.spesification}</span></p>
        <p>
          Additional Cost : <span className="font-semibold">Rp{spesificationData.additional_cost}</span>
        </p>
        <p>
          Quantity: <span className="font-semibold">{spesificationData.quantity}</span>
        </p>
      </div>
      <button
        onClick={deleteSpesificationHandler}
        className="hover:bg-gray-200 ml-4 p-1 rounded-sm"
      >
        <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
          <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z"></path>
        </svg>
      </button>
    </div>
  );
};
