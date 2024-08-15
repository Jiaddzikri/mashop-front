import { useEffect, useState } from "react";
import { isRouteErrorResponse } from "react-router-dom";

const QuantityInput = ({ setForm, errors }) => {
  const [quantity, setQuantity] = useState(0);
  const [isQuantityErrorExist, setQuantityErrorExist] = useState(false);

  useEffect(() => {
    if (quantity == 0) return;
    const timer = setTimeout(
      () => setForm((prev) => ({ ...prev, quantity: quantity })),
      1000
    );
    return () => clearTimeout(timer);
  }, [quantity]);

  useEffect(() => {
    errors.quantity.length > 0
      ? setQuantityErrorExist(true)
      : setQuantityErrorExist(false);
  }, [errors]);

  return (
    <div className="relative my-6 px-2">
      <label
        htmlFor="quantity-input"
        className="block mb-2 text-sm text-gray-900 dark:text-white"
      >
        Choose quantity*
      </label>
      <div className="relative flex items-center max-w-[8rem]">
        <button
          onClick={() => {
            quantity == 0 ? setQuantity(0) : setQuantity((prev) => --prev);
          }}
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
          onChange={(e) => setQuantity((prev) => parseInt(e.target.value))}
          type="text"
          id="quantity-input"
          aria-describedby="helper-text-explanation"
          className={`${
            isQuantityErrorExist ? "border-red-500" : "border-gray-300"
          }  h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          placeholder="0"
          required
          value={quantity}
        />
        <button
          onClick={() => setQuantity((prev) => ++prev)}
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
        className={`mt-2 ${
          isQuantityErrorExist ? "text-red-500" : "text-gray-300"
        } text-[0.7rem]`}
      >
        {isQuantityErrorExist ? errors.quantity.map((error) => error) : ""}
      </p>
    </div>
  );
};
export default QuantityInput;
