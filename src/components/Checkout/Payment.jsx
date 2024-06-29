const Payment = () => {
  return (
    <div className="h-max col-span-3 md:col-span-1 rounded-lg px-5 py-3 border border-gray-300 text-gray-500">
      <h2 className="font-semibold text-lg">Detail Pembayaran</h2>
      <ul className="text-sm">
        <li className="flex justify-between items-center font-semibold mt-3">
          <span>Total Pembayaran</span>
          <span className="text-blue-500">Rp18.100.000</span>
        </li>
        <li className="flex justify-between items-center mt-3">
          <span>Belanja</span>
          <span>Rp18.000.000</span>
        </li>
        <li className="flex justify-between items-center mt-3">
          <span>Ongkir</span>
          <span>Rp100.000</span>
        </li>
      </ul>
      <button className="w-full bg-blue-500 rounded-lg px-3 py-2 transition hover:bg-blue-600 text-white mt-5">
        Bayar Sekarang
      </button>
    </div>
  );
};
export default Payment;
