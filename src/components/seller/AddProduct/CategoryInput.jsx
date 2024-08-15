"use client";

import { useCallback, useEffect, useState } from "react";

const CategoryInput = ({ setForm, errors }) => {
  const [searchCategory, setSearchCategory] = useState({ keyword: null });
  const [categories, setCategories] = useState([]);
  const [isCategoryErrorExist, setCategoryErrorExsist] = useState(false);
  const [isSubCategoryErrorExist, setSubCategoryErrorExsist] = useState(false);
  const [isSubSubCategoryErrorExist, setSubSubCategoryErrorExsist] = useState(false);

  const categoryKeywordInput = (e) => {
    setSearchCategory((prev) => ({ prev, keyword: e.target.value }));
  };

  const requestCategorHandler = useCallback(async () => {}, [
    searchCategory.keyword,
  ]);

  useEffect(() => {
    const {category, sub_category, sub_sub_category} =  errors;

    category.length > 0 ? setCategoryErrorExsist(true) : setCategoryErrorExsist(false);
    sub_category.length > 0 ? setSubCategoryErrorExsist(true) : setSubCategoryErrorExsist(false);
    sub_sub_category.length > 0 ? setSubSubCategoryErrorExsist(true) : setSubSubCategoryErrorExsist(false);

  },[errors]);

  useEffect(() => {
    if (searchCategory.keyword == null || searchCategory.keyword == "") return;
    const timer = setTimeout(() => requestCategorHandler(), 1000);
    return () => clearTimeout(timer);
  }, [requestCategorHandler]);

  return (
    <div className="relative my-6 px-2">
      <label className="block mb-2 text-sm text-gray-900 dark:text-white">
        Product Categories *
      </label>
      <input
        onChange={categoryKeywordInput}
        type="text"
        className={`border ${
          isCategoryErrorExist ||
          isSubCategoryErrorExist ||
          isSubSubCategoryErrorExist 
            ? "border-red-500 text-red-500"
            : "border-gray-300 text-gray-900"
        } text-sm rounded-lg block w-full p-2.5 outline-none`}
      />
      <div className="relative mt-22">
        <select
          id="countries"
          className="bg-white outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option defaultValue={""}>Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>

        <p
          id="helper-text-explanation"
          className={`mt-2  ${
            isCategoryErrorExist ||
            isSubCategoryErrorExist ||
            isSubSubCategoryErrorExist
              ? "text-red-500"
              : "text-gray-900"
          } text-[0.7rem] text-gray-500 dark:text-gray-400`}
        >
          {isCategoryErrorExist ? errors.category.map(error => (error)) : ""}
          <br />
          {isSubCategoryErrorExist ? errors.sub_category.map(error => (error)) : ""}
          <br />
          {isSubSubCategoryErrorExist ? errors.sub_sub_category.map(error => (error)) : ""}
        </p>
      </div>
    </div>
  );
};
export default CategoryInput;
