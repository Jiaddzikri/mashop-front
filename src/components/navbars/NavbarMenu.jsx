"use client"

const NavbarMenu = ({ is_menu_active, set_menu_active }) => {
  return (
    <div
      className={`top-0 absolute w-screen h-screen bg-white translate-y-[${
        is_menu_active ? "0" : "-100vh"
      }] transition ease-in-out delay-150`}
    >
      <div className="px-4 h-12 py-10 flex gap-3 items-center border-b-[1px] border-gray-500 justify-between">
        <h2 className="font-semibold">Menu Utama</h2>
        <div
          onClick={() => set_menu_active((prev) => !prev)}
          className="relative"
        >
          <button className="w-6 h-6 relative flex flex-col items-center justify-center gap-1 ml-4">
            <span
              className={`w-6 h-[2px] bg-gray-500 rounded-xl transition-all
                  right-0 absolute rotate-[45deg]
                `}
            ></span>
            <span
              className={`w-6 h-[2px] bg-gray-500 rounded-xl
                  right-0 absolute rotate-[-45deg]
                `}
            ></span>
            <span
              className={`w-6 h-[2px] bg-gray-500 rounded-xl
                  right-0 hidden
                `}
            ></span>
          </button>
        </div>
      </div>
      <div className="px-4 py-6 flex justify-between gap-3">
        <button className="flex w-[50%] items-center justify-center border-[3px] border-blue-500 rounded-xl bg-transparent text-blue-500 px-6 py-1">
          Masuk
        </button>
        <button className="flex w-[50%] items-center justify-center bg-blue-500 text-white rounded-xl px-6 py-1">
          Daftar
        </button>
      </div>
    </div>
  );
};
export default NavbarMenu;
