"use client";

import { useEffect, useState } from "react";
import { isRouteErrorResponse } from "react-router-dom";

const ImageInput = ({ setForm, errors }) => {
  const [isImagesErrroExist, setImagesErrorExist] = useState({
    thumbnail: false,
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
  });

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    setForm((prev) => {
      return { ...prev, [name]: files[0] };
    });
  };

  useEffect(() => {
    setImagesErrorExist((prev) => ({
      ...prev,
      thumbnail: errors.thumbnail.length > 0,
      first: errors.first.length > 0,
      second: errors.second.length > 0,
      third: errors.third.length > 0,
      fourth: errors.fourth.length > 0,
      fifth: errors.fifth.length > 0,
    }));
  }, [errors]);
  

  return (
    <div className={`flex gap-3 items-center flex-wrap justify-start w-full`}>
      <label
        htmlFor="thumbnail"
        className={`flex flex-col items-center justify-center w-full md:w-[calc(98%/2)] xl:w-[calc(96%/4)] h-64 border-2 ${
          isImagesErrroExist.thumbnail ? "border-red-500" : "border-gray-300"
        } border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500`}
      >
        <div
          className={`flex flex-col items-center justify-center pt-5 pb-6 ${
            isImagesErrroExist.thumbnail ? "text-red-500" : "text-gray-500"
          }`}
        >
          <svg
            className={`w-8 h-8 mb-4`}
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
          <p className={`text-sm`}>
            <span className={`font-semibold`}>Click to upload</span> or drag and
            drop
          </p>
          <p className={`my-2 font-bold text-xs`}>Thumbnail</p>
          <p className={`text-xs`}>SVG, PNG, JPG or GIF (MAX. 400x400px)</p>
        </div>
        <input
          onChange={handleImageChange}
          name="thumbnail"
          id="thumbnail"
          type="file"
          className={`hidden`}
        />
        {isImagesErrroExist.thumbnail ? (
          <div className="text-[.7rem] text-red-500">
            <ul>
              {errors.thumbnail.map((error, index) => (
                <li key={index}>Error : {error}</li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}
      </label>
      <label
        htmlFor="first"
        className={`flex flex-col items-center justify-center w-full md:w-[calc(98%/2)] xl:w-[calc(96%/4)] h-64 border-2 ${
          isImagesErrroExist.first ? "border-red-500" : "border-gray-300"
        } border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500`}
      >
        <div
          className={`flex flex-col items-center justify-center pt-5 pb-6 ${
            isImagesErrroExist.first ? "text-red-500" : "text-gray-500"
          }`}
        >
          <svg
            className={`w-8 h-8 mb-4`}
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
          <p className={`mb-2 text-sm`}>
            <span className={`font-semibold`}>Click to upload</span> or drag and
            drop
          </p>
          <p className={`text-xs`}>SVG, PNG, JPG or GIF (MAX. 400x400px)</p>
        </div>
        <input
          onChange={handleImageChange}
          name="first"
          id="first"
          type="file"
          className={`hidden`}
        />
        {isImagesErrroExist.first ? (
          <div className="text-[.7rem] text-red-500">
            <ul>
              {errors.first.map((error, index) => (
                <li key={index}>Error : {error}</li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}
      </label>
      <label
        htmlFor="second"
        className={`flex flex-col items-center justify-center w-full md:w-[calc(98%/2)] xl:w-[calc(96%/4)] h-64 border-2 ${
          isImagesErrroExist.second ? "border-red-500" : "border-gray-300"
        } border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500`}
      >
        <div
          className={`flex flex-col items-center justify-center pt-5 pb-6 ${
            isImagesErrroExist.second ? "text-red-500" : "text-gray-500"
          }`}
        >
          <svg
            className={`w-8 h-8 mb-4`}
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
          <p className={`mb-2 text-sm`}>
            <span className={`font-semibold`}>Click to upload</span> or drag and
            drop
          </p>
          <p className={`text-xs`}>SVG, PNG, JPG or GIF (MAX. 400x400px)</p>
        </div>
        <input
          onChange={handleImageChange}
          name="second"
          id="second"
          type="file"
          className={`hidden`}
        />
        {isImagesErrroExist.second ? (
          <div className="text-[.7rem] text-red-500">
            <ul>
              {errors.second.map((error, index) => (
                <li key={index}>Error : {error}</li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}
      </label>
      <label
        htmlFor="third"
        className={`flex flex-col items-center justify-center w-full md:w-[calc(98%/2)] xl:w-[calc(96%/4)] h-64 border-2 ${
          isImagesErrroExist.third ? "border-red-500" : "border-gray-300"
        } border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500`}
      >
        <div
          className={`flex flex-col items-center justify-center pt-5 pb-6 ${
            isImagesErrroExist.third ? "text-red-500" : "text-gray-500"
          }`}
        >
          <svg
            className={`w-8 h-8 mb-4`}
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
          <p className={`mb-2 text-sm`}>
            <span className={`font-semibold`}>Click to upload</span> or drag and
            drop
          </p>
          <p className={`text-xs`}>SVG, PNG, JPG or GIF (MAX. 400x400px)</p>
        </div>
        <input
          onChange={handleImageChange}
          name="third"
          id="third"
          type="file"
          className={`hidden`}
        />
        {isImagesErrroExist.third > 0 ? (
          <div className="text-[.7rem] text-red-500">
            <ul>
              {errors.third.map((error, index) => (
                <li key={index}>Error : {error}</li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}
      </label>
      <label
        htmlFor="fourth"
        className={`flex flex-col items-center justify-center w-full md:w-[calc(98%/2)] xl:w-[calc(96%/4)] h-64 border-2 ${
          isImagesErrroExist.fourth ? "border-red-500" : "border-gray-300"
        } border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500`}
      >
        <div
          className={`flex flex-col items-center justify-center pt-5 pb-6 ${
            isImagesErrroExist.fourth  ? "text-red-500" : "text-gray-500"
          }`}
        >
          <svg
            className={`w-8 h-8 mb-4`}
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
          <p className={`mb-2 text-sm`}>
            <span className={`font-semibold`}>Click to upload</span> or drag and
            drop
          </p>
          <p className={`text-xs`}>SVG, PNG, JPG or GIF (MAX. 400x400px)</p>
        </div>
        <input
          onChange={handleImageChange}
          name="fourth"
          id="fourth"
          type="file"
          className={`hidden`}
        />
        {isImagesErrroExist.fourth ? (
          <div className="text-[.7rem] text-red-500">
            <ul>
              {errors.fourth.map((error, index) => (
                <li key={index}>Error : {error}</li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}
      </label>
      <label
        htmlFor="fifth"
        className={`flex flex-col items-center justify-center w-full md:w-[calc(98%/2)] xl:w-[calc(96%/4)] h-64 border-2 ${
          isImagesErrroExist.fifth ? "border-red-500" : "border-gray-300"
        } border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500`}
      >
        <div
          className={`flex flex-col items-center justify-center pt-5 pb-6 ${
           isImagesErrroExist.fifth > 0 ? "text-red-500" : "text-gray-500"
          }`}
        >
          <svg
            className={`w-8 h-8 mb-4`}
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

          <p className={`mb-2 text-sm`}>
            <span className={`font-semibold`}>Click to upload</span> or drag and
            drop
          </p>
          <p className={`text-xs`}>SVG, PNG, JPG or GIF (MAX. 400x400px)</p>
        </div>
        <input
          onChange={handleImageChange}
          name="fifth"
          id="fifth"
          type="file"
          className={`hidden`}
        />
        {isImagesErrroExist.fifth ? (
          <div className="text-[.7rem] text-red-500">
            <ul>
              {errors.fifth.map((error, index) => (
                <li key={index}>Error : {error}</li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}
      </label>
    </div>
  );
};
export default ImageInput;
