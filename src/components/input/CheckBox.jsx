"use client ";
const CheckBox = ({ text, name, value, event }) => {
  return (
    <div className="flex items-center mt-2">
      <input
        onClick={event}
        type="checkbox"
        id={`checked-${text}`}
        name={name}
        value={value}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor={`checked-${text}`}
        className="ms-2 text-sm text-gray-500 dark:text-gray-300"
      >
        {text}
      </label>
    </div>
  );
};
export default CheckBox;
