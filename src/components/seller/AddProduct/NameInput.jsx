"use  client";

import { useEffect, useState } from "react";

const NameInput = ({ setForm, errors }) => {
  const [isErrorExist, setErrorExisst] = useState(false);
  const productNameChangeHandler = (e) => {
    setForm(prev => ({...prev, name: e.target.value}));
  };

  useEffect(() => {
    (errors.name.length > 0) ?  setErrorExisst(true) :setErrorExisst(false);
  }, [errors]);

  return (
    <div className="relative my-6 px-2">
      <label className="block mb-2 text-sm text-gray-900 dark:text-white">
        Product Name *
      </label>
      <input
        onChange={productNameChangeHandler}
        type="text"
        className={`border ${isErrorExist ? "border-red-500" : "border-gray-300"} text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none`}
      />
      <p
        id="helper-text-explanation"
        className={`mt-2 text-[.7rem] ${isErrorExist ? "text-red-500" : "text-gray-500"} dark:text-gray-400`}
      >
        {isErrorExist ? errors.name.map(error => (
          error
        )): "" }
      </p>
    </div>
  );
};
export default NameInput;
