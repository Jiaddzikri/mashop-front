const Filter = () => {
  return (
    <div>
      <div className="py-3 px-2 sm:px-8 border border-gray-300 rounded-lg">
        <div className="flex items-center flex-wrap gap-5 text-sm">
          <div className="relative w-[150px] flex">
            <span className="font-semibold text-gray-500 block w-max bg-gray-200 py-2 px-3 rounded-tl-lg rounded-bl-lg">
              Rp
            </span>
            <input
              type="text"
              className="w-[90%] py-2 px-3 bg-gray-200 rounded-tr-lg rounded-br-lg placeholder:text-gray-600 outline-none focus:shadow-sm"
              placeholder="minimum"
            />
          </div>
          <div className="relative w-[150px] flex">
            <span className="font-semibold text-gray-500 block w-max bg-gray-200 py-2 px-3 rounded-tl-lg rounded-bl-lg">
              Rp
            </span>
            <input
              type="text"
              className="w-[90%] py-2 px-3 bg-gray-200 rounded-tr-lg rounded-br-lg placeholder:text-gray-600 outline-none focus:shadow-sm"
              placeholder="maximum"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Filter;
