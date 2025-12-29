import logo from "../assets/DarazLogo.png";
import search from "../assets/search";
const Header = () => {
  return (
    <>
      <div className="h-[118.8px] bg-[#f85606] w-full text-white">
        <div>
          <div className="flex justify-end text-[12px] mr-91.5 items-center h-6.25">
            <span className=" px-4.25">SAVE MORE ON APP</span>
            <span className=" px-4.25">SELL ON DARAZ</span>
            <span className=" px-4.25">HELP & SUPPORT</span>
            <span className=" px-4.25">LOGIN</span>
            <span className=" px-4.25">SIGN UP</span>
            <span className=" px-4.25">زبان تبدیل کریں</span>
          </div>
          <div className="flex items-end justify-center pt-4">
            <div> 

            <div className="flex items-end pt-2.75 w-297 h-9.75">
                <div className="w-50 h-9.75">

              <img src={logo} alt="" className="w-31.75 h-10" />
                </div>
              <div className="flex w-172 h-11.25  bg-white">
                <input type="text" className=" px-4.75 py-3.25 w-172 h-11.25 text-gray-700 text-[14px]" placeholder="Search in Daraz"/>
                <a className="text-[#FFE1D2] w-11.25 h-11.25"><img src={search} alt="" /></a>
                    </div>
                <div className="w-10 h-9.5 pl-5">

                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.51345 5H1.33325V3H6.15306L7.21972 8.33333H30.5315L27.5012 25H8.51345L4.51345 5ZM7.61972 10.3333L10.1531 23H25.832L28.135 10.3333H7.61972Z"
                    fill="white"
                    ></path>
                  <path
                    d="M11.9999 28C11.9999 28.7364 11.403 29.3333 10.6666 29.3333C9.93021 29.3333 9.33325 28.7364 9.33325 28C9.33325 27.2636 9.93021 26.6667 10.6666 26.6667C11.403 26.6667 11.9999 27.2636 11.9999 28Z"
                    fill="white"
                    ></path>
                  <path
                    d="M25.3333 29.3333C26.0696 29.3333 26.6666 28.7364 26.6666 28C26.6666 27.2636 26.0696 26.6667 25.3333 26.6667C24.5969 26.6667 23.9999 27.2636 23.9999 28C23.9999 28.7364 24.5969 29.3333 25.3333 29.3333Z"
                    fill="white"
                    ></path>
                </svg>
                    </div>
            </div>
          </div>
        </div>
      </div>
                    </div>
    </>
  );
};

export default Header;
