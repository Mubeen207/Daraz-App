import React from "react";

import logo from "../assets/DarazLogo.png";
import search from "../assets/SEARCH.png";
import Login from "./auth/Login";
const Header = () => {
  const [showLogin, setShowLogin] = React.useState(false);
const [animate, setAnimate] = React.useState(false);

const openLogin = () => {
  setShowLogin(true);
  setTimeout(() => setAnimate(true), 10); 
};

const closeLogin = () => {
  setAnimate(false); 
  setTimeout(() => setShowLogin(false), 1000); 
};


  return (
    <>
      <div className="h-[118.8px] bg-[#f85606] w-full text-white ">
        <div className="flex justify-end text-[12px] items-center h-6.25 px-16">
          <span className="px-4 cursor-pointer hover:text-[#FFE1D2]">
            SAVE MORE ON APP
          </span>
          <span className="px-4 cursor-pointer hover:text-[#FFE1D2]">
            SELL ON DARAZ
          </span>
          <span className="px-4 cursor-pointer hover:text-[#FFE1D2]">
            HELP & SUPPORT
          </span>
          <span
            className="px-4 cursor-pointer hover:text-[#FFE1D2]"
            onClick={openLogin}
          >
            LOGIN
          </span>
          <span className="px-4 cursor-pointer hover:text-[#FFE1D2]">
            SIGN UP
          </span>
          <span className="px-4 cursor-pointer hover:text-[#FFE1D2]">
            زبان تبدیل کریں
          </span>
        </div>
        <div className="flex justify-center pt-4">
          <div className="flex items-end w-295">
            <div className="w-50">
              <img
                src={logo}
                alt="Daraz Logo"
                className="w-31.75 h-10 cursor-pointer"
              />
            </div>
            <div className="flex bg-white h-11.25 w-175 rounded-xs overflow-hidden">
              <input
                type="text"
                placeholder="Search in Daraz"
                className="flex-1 px-4 text-[14px] text-gray-700 outline-none"
              />

              <button className="w-12.5 bg-[#FFE1D2] flex items-center justify-center cursor-pointer">
                <img src={search} alt="Search" className="w-5.5 h-5.5" />
              </button>
            </div>

            <div className="pl-6 pb-1.5 cursor-pointer">
              <svg
                width="30"
                height="30"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.51345 5H1.33325V3H6.15306L7.21972 8.33333H30.5315L27.5012 25H8.51345L4.51345 5ZM7.61972 10.3333L10.1531 23H25.832L28.135 10.3333H7.61972Z"
                  fill="white"
                />
                <path
                  d="M12 28C12 28.7364 11.403 29.3333 10.6667 29.3333C9.93033 29.3333 9.33333 28.7364 9.33333 28C9.33333 27.2636 9.93033 26.6667 10.6667 26.6667C11.403 26.6667 12 27.2636 12 28Z"
                  fill="white"
                />
                <path
                  d="M25.3333 29.3333C26.0696 29.3333 26.6666 28.7364 26.6666 28C26.6666 27.2636 26.0696 26.6667 25.3333 26.6667C24.5969 26.6667 23.9999 27.2636 23.9999 28C23.9999 28.7364 24.5969 29.3333 25.3333 29.3333Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {showLogin && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    <div
      onClick={closeLogin}
      className={`absolute inset-0 bg-black/40 transition-opacity duration-1000 ${animate ? 'opacity-100' : 'opacity-0'}`}
    ></div>
    <div
      className={`bg-white p-6 rounded-lg shadow-lg z-10 transform transition-all duration-200 
                  ${animate ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
    >
      <Login setShowLogin={closeLogin} />
    </div>
  </div>
)}

    </>
  );
};

export default Header;
