"use client";

import { useState } from "react";
import UserMenu from "./UserMenu";

const GuestNavbar = () => {
  const [is_menu_active, set_menu_active] = useState(false);

  return (
    <nav className="w-full h-12 bg-white fixed top-0 border-b border-gray-300 px-4 md:px-12 lg:px-36 py-10 z-40 flex justify-center items-center">
      <a className="hidden md:block" href="/">
        <img className="w-16" src="/mashop-logo.png" />
      </a>
      <div className="relative w-[800px] h-10 lg:ml-10">
        <input
          type="text"
          placeholder="Cari disini..."
          className="absolute w-full h-full px-4 py-2 border-[1px] border-gray-300 rounded-lg focus:outline-none focus:shadow"
        />
        <button
          type="button"
          className="absolute h-full text-sm px-2 lg:px-6 py-2 top-0 border-[1px] border-blue-500 right-0 bg-blue-500 rounded-tr-lg rounded-br-lg text-white"
        >
          Cari
        </button>
      </div>
      <div className="hidden lg:flex lg:items-center lg:gap-10 text-gray-500">
        <span className="ml-8">
          <button>logo</button>
        </span>
        <span>|</span>
        <div className="flex gap-4 text-sm">
          <a href="/accounts/login">
            <button className="flex items-center w-24 justify-center border-[3px] border-blue-500 rounded-2xl bg-transparent text-blue-500 px-6 py-1">
              Masuk
            </button>
          </a>
          <a href="/accounts/signin">
            <button className="w-24 flex items-center justify-center bg-blue-500 text-white rounded-2xl px-6 py-1 border-[3px] border-blue-500">
              Daftar
            </button>
          </a>
        </div>
      </div>
      <div
        onClick={() => set_menu_active((prev) => !prev)}
        className="block lg:hidden relative"
      >
        <button className="w-6 h-6 relative flex flex-col items-center justify-center gap-[5px] ml-4">
          <span className={`w-6 h-[2px] bg-gray-500 rounded-xl`}></span>
          <span className={`w-6 h-[2px] bg-gray-500 rounded-xl`}></span>
          <span className={`w-6 h-[2px] bg-gray-500 rounded-xl`}></span>
        </button>
      </div>
      <UserMenu
        is_menu_active={is_menu_active}
        set_menu_active={set_menu_active}
      />
    </nav>
  );
};
export default GuestNavbar;
