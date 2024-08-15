import { useParams } from "react-router-dom";
import { Products } from "../../constant/Products";

const Information = ({_product}) => {
  return (
    <div className="col-span-3 md:col-span-2 border border-gray-300 rounded-lg">
      <div className="relative flex flex-col sm:flex-row gap-5 items-center py-4 px-4">
        <div className="relative w-[150px]">
          <img
            className="w-full border border-gray-300 rounded-lg"
            src={_product.thumbnail}
            alt=""
          />
        </div>
        <div className="flex flex-col font-[500]">
          <h2 className="text-xl text-gray-700 line-clamp-2">
            {_product.name}
          </h2>
          <span className="text-sm text-gray-500">Toko : jiadstore</span>
          <span className="text-sm text-gray-500">Jumlah : 1</span>
        </div>
        <div className="mx-auto">
          <span className="font-semibold text-blue-500 text-2xl">
            {_product.price}
          </span>
        </div>
      </div>
      <div className="bg-gray-100 text-sm text-gray-500 mt-5 px-5 py-3">
        <h3 className="">Alamat : </h3>
        <div className="mt-1">
          <span className="flex gap-2">
            <svg
              className="fill-current text-gray-500 w-4"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 395.71 395.71"
              xmlSpace="preserve"
            >
              <g>
                <path
                  d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
		c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
		C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
		c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"
                />
              </g>
            </svg>
            PBR Puskopad Blok F No 2 Kec Tanjungsari, Kab Sumedang, Prov Jawa
            Barat
          </span>
        </div>
        <h3 className="mt-2">Penerima : </h3>
        <div>
          <span>Jiad Dzikri Ramadia (081224068705)</span>
        </div>
        <div className="mt-3">
          <a className="font-semibold text-blue-500" href="">
            Ganti
          </a>
        </div>
      </div>
    </div>
  );
};
export default Information;
