const Footer = () => {
  return (
    <footer className="w-fullbg-white border-t border-gray-300 py-5 px-4 xl:px-36 pb-20">
      <div className="flex items-center">
        <img src="/mashop-logo.png" className="w-12" alt="" />
        <p className="text-xl">MaShop</p>
      </div>
      <div className="flex gap-5 mt-8">
        <div>
          <h2 className="text-xl text-blue-500 font-[500]">Customer Care</h2>
          <ul className="mt-2 text-gray-500 text-sm">
            <li className="flex flex-col">
              <span>Telepon</span>
              <span className="font-semibold text-gray-800">
                0812-2406-8705
              </span>
            </li>
            <li className="flex flex-col mt-3">
              <span>Email</span>
              <span className="font-semibold text-gray-800">
                mashops.care@mashop.com
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
