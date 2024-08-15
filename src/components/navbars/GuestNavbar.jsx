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
        <span className="ml-12">
          <button>
            <svg
            className="w-8"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                stroke="#1C274C"
                strokeWidth="1.5"
              />
              <path
                d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                stroke="#1C274C"
                strokeWidth="1.5"
              />
              <path
                d="M2 3L2.26121 3.09184C3.5628 3.54945 4.2136 3.77826 4.58584 4.32298C4.95808 4.86771 4.95808 5.59126 4.95808 7.03836V9.76C4.95808 12.7016 5.02132 13.6723 5.88772 14.5862C6.75412 15.5 8.14857 15.5 10.9375 15.5H12M16.2404 15.5C17.8014 15.5 18.5819 15.5 19.1336 15.0504C19.6853 14.6008 19.8429 13.8364 20.158 12.3075L20.6578 9.88275C21.0049 8.14369 21.1784 7.27417 20.7345 6.69708C20.2906 6.12 18.7738 6.12 17.0888 6.12H11.0235M4.95808 6.12H7"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </span>
        <span>|</span>
        <div className="flex gap-4 text-sm">
          <a href="/users/login">
            <button className="flex items-center w-24 justify-center border-[3px] border-blue-500 rounded-2xl bg-transparent text-blue-500 px-6 py-1">
              Masuk
            </button>
          </a>
          <a href="/users/signin">
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
