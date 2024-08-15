"use client"

import { useRef, useState } from "react";

const Signin = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const fullname = useRef(null);
  const phone_or_email = useRef(null);
  const password = useRef(null);

  const submit = async () => {

  }

  return (
    <div className="container flex justify-center items-center gap-12">
      <img className="w-[35rem] hidden xl:block" src="/images/register.svg" alt="" />
      <div className="w-[80%] md:w-[400px] mt-4 md:px-0 md:mt-4 flex flex-col">
        <h2 className="text-3xl font-semibold text-blue-500">Register</h2>
        <input
          className="mt-8 px-6 py-4 bg-gray-100 border-none focus:outline-none focus:outline-blue-500 rounded-md"
          type="text"
          placeholder="Full Name"
        />

        <span className="text-pink-700 text-sm mt-1 italic">Email Tidak Valid</span>
        <input
          className="mt-4 px-6 py-4 bg-gray-100 border-none focus:outline-none focus:outline-blue-500 rounded-md"
          type="text"
          placeholder="email/phone number"
        />
        <span className="text-pink-700 text-sm mt-1 italic">Email Tidak Valid</span>
        <div className="md:w-[400px] w-full h-24 relative">
          <input
            className="absolute left-0 w-full mt-4 px-6 py-4 bg-gray-100 border-none focus:outline-none focus:outline-blue-500 rounded-md"
            type={`${isPasswordHidden ? "password" : "text"}`}
            placeholder="password"
          />
          <button onClick={(() => setIsPasswordHidden((prev) =>  !prev))} className="absolute top-8 right-10 w-4">
            {isPasswordHidden ? (
              <svg
                className="w-7"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="style=stroke">
                  <g id="eye-close">
                    <path
                      id="vector (Stroke)"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.2827 9.27342C4.69287 5.94267 8.19606 3.96997 12 3.96997C13.3515 3.96997 14.6695 4.21968 15.9154 4.69366C16.3026 4.84093 16.497 5.27417 16.3497 5.66131C16.2025 6.04846 15.7692 6.24292 15.3821 6.09564C14.3024 5.68491 13.1649 5.46997 12 5.46997C8.74406 5.46997 5.66741 7.15436 3.49759 10.1532L3.49687 10.1542C3.15894 10.6197 2.96497 11.2866 2.96497 11.995C2.96497 12.7033 3.15894 13.3703 3.49687 13.8357L3.49759 13.8367C3.92863 14.4325 4.3957 14.9764 4.89269 15.4654C5.18793 15.7559 5.19175 16.2308 4.90122 16.526C4.61069 16.8213 4.13584 16.8251 3.8406 16.5346C3.28219 15.9851 2.76085 15.3774 2.28234 14.716C1.72077 13.942 1.46497 12.9478 1.46497 11.995C1.46497 11.0419 1.72088 10.0475 2.2827 9.27342ZM18.7729 7.18838C19.0534 6.88361 19.5279 6.86393 19.8327 7.14444C20.5154 7.77278 21.1469 8.48525 21.7176 9.27392C22.2792 10.0479 22.535 11.0421 22.535 11.995C22.535 12.948 22.279 13.9424 21.7172 14.7165C19.3071 18.0473 15.8039 20.02 12 20.02C10.5114 20.02 9.06377 19.717 7.70845 19.1455C7.32679 18.9846 7.14786 18.5447 7.30881 18.163C7.46976 17.7813 7.90964 17.6024 8.2913 17.7634C9.46746 18.2594 10.7172 18.52 12 18.52C15.2559 18.52 18.3325 16.8356 20.5023 13.8367L20.5031 13.8357C20.841 13.3703 21.035 12.7033 21.035 11.995C21.035 11.2866 20.841 10.6197 20.5031 10.1542L20.5023 10.1532C19.9883 9.44277 19.423 8.80602 18.8169 8.24813C18.5121 7.96762 18.4924 7.49316 18.7729 7.18838Z"
                      fill="#000000"
                    />
                    <path
                      id="vector (Stroke)_2"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 9.75C10.755 9.75 9.75 10.755 9.75 12C9.75 12.5484 9.94405 13.0481 10.2674 13.4375C10.532 13.7562 10.4881 14.229 10.1694 14.4936C9.85076 14.7582 9.37792 14.7144 9.11332 14.3957C8.57407 13.7462 8.25 12.9102 8.25 12C8.25 9.92657 9.92657 8.25 12 8.25C13.0215 8.25 13.9486 8.658 14.6243 9.31951C14.9203 9.60929 14.9253 10.0841 14.6355 10.3801C14.3457 10.6761 13.8709 10.6811 13.5749 10.3913C13.1691 9.99399 12.6147 9.75 12 9.75ZM15 11.25C15.4142 11.25 15.75 11.5858 15.75 12C15.75 14.0734 14.0734 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15C11.25 14.5858 11.5858 14.25 12 14.25C13.245 14.25 14.25 13.245 14.25 12C14.25 11.5858 14.5858 11.25 15 11.25Z"
                      fill="#000000"
                    />
                    <path
                      id="vector (Stroke)_3"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22.5533 2.19366C22.8329 2.49926 22.8119 2.97366 22.5063 3.25328L2.5063 21.5533C2.2007 21.8329 1.7263 21.8118 1.44668 21.5062C1.16706 21.2006 1.18812 20.7262 1.49371 20.4466L21.4937 2.14663C21.7993 1.86701 22.2737 1.88807 22.5533 2.19366Z"
                      fill="#000000"
                    />
                  </g>
                </g>
              </svg>
            ) : (
              <svg
              className="w-7"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="style=linear">
                  <g id="eye-open">
                    <path
                      id="vector"
                      d="M15 12C15 13.6592 13.6592 15 12 15C10.3408 15 9 13.6592 9 12C9 10.3408 10.3408 9 12 9C13.6592 9 15 10.3408 15 12Z"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="vector_2"
                      d="M12 19.27C15.53 19.27 18.82 17.4413 21.11 14.2764C22.01 13.0368 22.01 10.9532 21.11 9.71356C18.82 6.54861 15.53 4.71997 12 4.71997C8.46997 4.71997 5.17997 6.54861 2.88997 9.71356C1.98997 10.9532 1.98997 13.0368 2.88997 14.2764C5.17997 17.4413 8.46997 19.27 12 19.27Z"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </svg>
            )}
          </button>
          <span className="absolute text-sm top-20 italic text-pink-700">Password Salah</span>
        </div>
        <div className="flex gap-1 lg:gap-3 mt-3">
          <input className="scale-150" type="checkbox"/>
          <p className="text-sm text-center">
            Dengan mencentang ini, kamu bersedia menyetujui{" "}
            <a href="" className="font-semibold text-blue-500">
              Syarat & ketentuan Kami
            </a>
          </p>
        </div>
        <button onClick={submit} className="mt-6 w-32 mx-auto text-white font-semibold bg-blue-500 py-3 rounded-full hover:bg-blue-600 delay-75 transition">Daftar</button>
        <span className="text-center text-gray-500 mt-3">Sudah punya akun? <a href="/users/login" className="font-semibold text-blue-500">Masuk</a></span>
      </div>
    </div>
  );
};
export default Signin;
