import { useEffect, useState } from "react";

const PriceInput = ({ setForm, errors }) => {
  const moneyFormat = new Intl.NumberFormat();
  const [price, setPrice] = useState(0);
  const priceInputHandler = (e) => {
    setPrice((prev) => (prev = e.target.value));
  };
  const [isPriceErrorExist, setPriceErrorExist] = useState(false);

  useEffect(() => {
    setPriceErrorExist(errors.price.length > 0);
  }, [errors]);

  useEffect(() => {
    if (price == 0) return;
    const timer = setTimeout(() => {
      setForm((prev) => ({ ...prev, price: price }));
    }, 1000);
    return () => clearTimeout(timer);
  }, [price]);
  return (
    <div className="relative my-6 px-2">
      <label className="block mb-2 text-sm text-gray-900 dark:text-white">
        Harga* (Rp{moneyFormat.format(price)})
      </label>
      <div className="relative">
        <input
          onChange={priceInputHandler}
          type="number"
          className={`w-[30%] border ${
            isPriceErrorExist
              ? "border-red-500 text-red-500"
              : "border-gray-300  text-gray-900"
          } text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          placeholder="Rp0"
          required
        />
        <p
          id="helper-text-explanation"
          className={`mt-2 text-[0.7rem] ${isPriceErrorExist ? "text-red-500" : ""} dark:text-gray-400`}
        >
          {isPriceErrorExist ? errors.price.map(error => (error)) : ""}
        </p>
      </div>
    </div>
  );
};
export default PriceInput;
