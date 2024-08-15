"use client";

import { useState } from "react";
import CategoryInput from "../../../components/seller/AddProduct/CategoryInput";
import DescriptionInput from "../../../components/seller/AddProduct/DescriptionInput";
import ImageInput from "../../../components/seller/AddProduct/ImageInput";
import NameInput from "../../../components/seller/AddProduct/NameInput";
import PriceInput from "../../../components/seller/AddProduct/PriceInput";
import QuantityInput from "../../../components/seller/AddProduct/QuantityInput";
import ProductBundling from "../../../components/seller/AddProduct/ProductBundling";
import { postProduct } from "../../../server/Server";
import { formData } from "../../../utils/FormData";

const AddProduct = () => {
  const [isProductAddLoading, setProductAddLoading] = useState(false);
  const [form, setForm] = useState({
    thumbnail: null,
    first: null,
    second: null,
    third: null,
    fourth: null,
    fifth: null,
    name: null,
    category: null,
    sub_category: null,
    sub_sub_category: null,
    price: null,
    quantity: null,
    description: null,
    bundlings: [],
  });
  const [addProductErrors, setAddProductErrors] = useState({
    thumbnail : [],
    first : [], 
    second : [],
    third : [],
    fourth: [],
    fifth : [],
    name : [],
    price : [],
    description : [],
    category : [],
    sub_category : [],
    sub_sub_category :  [], 
    quantity : [],
    bundlings : []

  });


  const addProductHandler = async (e) => {
    e.preventDefault();
    try {
      setProductAddLoading(true);
      const response = await postProduct(formData(form), null);
    } catch (error) {
      const parse = JSON.parse(error.message);
      const errors = parse.message;
      console.log(errors);
      setAddProductErrors((prev) => {
        return {
          ...prev,
          thumbnail : errors.thumbnail || [],
          first : errors.first || [],
          second : errors.second || [],
          third : errors.third || [],
          fourth : errors.fourth || [],
          fifth : errors.fifth || [],
          name : errors.name || [],
          price: errors.price || [],
          description : errors.description || [],
          category : errors.category || [],
          sub_category : errors.sub_category || [],
          sub_sub_category : errors.sub_sub_category || [],
          quantity : errors.quantity || []  
        };
      });


    } finally {
      setProductAddLoading(false);
    }
  };
  return (
    <div className="py-3 px-0 md:px-5">
      <h1 className="text-2xl my-2">Add Product</h1>
      <div className="relative mt-5 bg-gray-50 px-5 py-4 rounded-xl">
        <h2 className="mb-3 ml-2">Product Images</h2>
        <ImageInput setForm={setForm} errors={{
          thumbnail : addProductErrors.thumbnail,
          first : addProductErrors.first,
          second : addProductErrors.second,
          third :addProductErrors.third,
          fourth : addProductErrors.fourth,
          fifth : addProductErrors.fifth
        }} />
      </div>
      <div className="relative mt-5 bg-gray-50 px-5 py-4 rounded-xl">
        <h2 className="mt-3 ml-2">Product Details</h2>
        <CategoryInput setForm={setForm} errors={{
          category: addProductErrors.category,
          sub_category :addProductErrors.sub_category,
          sub_sub_category: addProductErrors.sub_sub_category
        }} />
        <NameInput setForm={setForm} errors={{
          name: addProductErrors.name
        }} />
        <PriceInput setForm={setForm} errors={{
          price: addProductErrors.price
        }} />
        <QuantityInput setForm={setForm} errors={{
          quantity  : addProductErrors.quantity
        }} />
        <DescriptionInput setForm={setForm} errors={{
          description : addProductErrors.description
        }} />
      </div>
      <div className="relative mt-5 bg-gray-50 px-5 py-4 rounded-xl">
        <h2 className="mt-3 ml-2">Product Bundling</h2>
        <ProductBundling setForm={setForm} errors={{
          bundlings: addProductErrors.bundlings
        }} />
      </div>
      <button
        onClick={addProductHandler}
        type="button"
        className=" mt-5 text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        disabled={isProductAddLoading ? true : false}
      >
        Add Product
      </button>
    </div>
  );
};
export default AddProduct;
