import { useState } from "react";
import Signup from "./SignUp";
const Login = ({ setShowLogin }) => {
  const [isPassword, setIsPassword] = useState(true);
  const [isPhoneNumber, setIsPhoneNumber] = useState(false);
  const [showSignUP, setShowSignUP] = useState(false);
  let condition = (flag) => {
    if (flag) {
      setIsPassword(false);
      setIsPhoneNumber(true);
      setShowSignUP(false);
    } else {
      setIsPassword(true);
      setIsPhoneNumber(false);
    }
    if (flag === undefined) {
      setIsPassword(false);
      setIsPhoneNumber(true);
      setShowSignUP(false);
    }
  };
  let SignUpControl = () => {
    setIsPassword(false);
    setIsPhoneNumber(false);
    setShowSignUP(true);
  };
  return (
    <>
      {isPassword && (
        <div className="relative z-10 w-111 h-111.25 rounded-md bg-white flex flex-col items-center ">
          <div className="flex justify-between text-[16px] text-[#858b9c] mt-6.5 px-9">
            <div
              className="text-center w-[185.5px] font-bold cursor-pointer text-[#2e3346]
"
            >
              <p>Password</p>
            </div>
            <div
              className="text-center w-[185.5px] font-bold cursor-pointer
"
            >
              <p className="cursor-pointer" onClick={() => condition(true)}>
                Phone Number
              </p>
            </div>
          </div>
          <div className="mt-9 px-9 w-full">
            <div>
              <input
                type="text"
                className="px-4.5 h-12 text-[14px] rounded-sm w-full border-[#cbced5] border-[0.5px]"
                placeholder="Please enter your Phone or Email"
              />
            </div>
            <div className="mt-5">
              <input
                type="password"
                className="px-4.5 h-12 text-[14px] rounded-sm w-full border-[#cbced5] border-[0.5px]"
                placeholder="Please enter your password"
              />
            </div>
            <div className="text-[14px] mt-1.5 flex justify-end text-[#858b9c] font-bold">
              <p>Forgot password?</p>
            </div>
            <button className="w-full bg-[#f57224] text-white py-2 rounded-sm font-bold text-[16px] mt-5">
              LOGIN
            </button>
          </div>
          <p className="mt-3 text-[14px] text-center text-[#858b9c]">
            Don't have an account?{" "}
            <span
              className="text-[#1e71ff] cursor-pointer hover:underline"
              onClick={() => SignUpControl()}
            >
              {" "}
              Sign up
            </span>
          </p>

          <div className="text-[14px] text-center text-[#858b9c] mt-10">
            <p>Or, login with</p>
          </div>
          <div className="flex mt-4.5 mb-6">
            <div className="flex items-center mr-7.5">
              <img
                src="https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s48-fcrop64=1,00000000ffffffff-rw"
                alt="google-logo"
                className="w-5.5 h-5.5"
              />
              <p className="ml-1.5 text-[14px] text-center text-[#858b9c]">
                Google
              </p>
            </div>
            <div className="flex items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="facebook"
                className="w-5.5 h-5.5 rounded-full"
              />
              <p className="ml-1.5 text-[14px] text-center text-[#858b9c]">
                Facebook
              </p>
            </div>
          </div>
          <div
            className="absolute right-5 top-5"
            onClick={setShowLogin}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 36 36"
              width="24"
              height="24"
              className="block absolute top-1 right-1 text-[#858b9c] cursor-pointer"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M28 8 L8 28 M8 8 L28 28"></path>
            </svg>
          </div>
        </div>
      )}
      {isPhoneNumber && (
        <div className="relative z-10 w-111 h-111.25 rounded-md bg-white flex flex-col items-center ">
          <div className="flex justify-between text-[16px] text-[#858b9c] mt-6.5 px-9">
            <div
              className="text-center w-[185.5px] font-bold cursor-pointer
"
              onClick={() => condition(false)}
            >
              <p>Password</p>
            </div>
            <div
              className="text-center w-[185.5px] font-bold cursor-pointer
"
            >
              <p className="cursor-pointer text-[#2e3346]">Phone Number</p>
            </div>
          </div>
          <div className="flex flex-col justify-between mt-17 px-6 w-full h-34.25">
            <div>
              <div className="flex">
                <p className="w-28 h-12 mr-2 flex justify-center items-center text-[14px] rounded-sm border-[#cbced5] border-[0.5px]">
                  🇵🇰+92
                </p>
                <input
                  type="password"
                  className="px-4.5 h-12 text-[14px] rounded-sm w-full border-[#cbced5] border-[0.5px]"
                  placeholder="Please enter your phone number"
                />
              </div>
            </div>
            <div className="absolute top-50 mt-5 w-98 h-10 bg-[#f57224] rounded-sm border border-[#f57224] flex items-center justify-start gap-2 text-white font-bold text-[16px] cursor-pointer ">
              <img
                src="https://lzd-img-global.slatic.net/g/tps/imgextra/i2/O1CN01a3DUz31SqzLbTfmQ2_!!6000000002299-2-tps-54-54.png"
                alt="whatsapp"
                className="w-6 h-6 ml-4"
              />
              <span className="ml-17">Send code via Whatsapp</span>
            </div>
          </div>
          <p className="mt-9 text-[14px] text-center text-[#858b9c]">
            Don't have an account?
            <span
              className="text-[#1e71ff] cursor-pointer hover:underline"
              onClick={() => SignUpControl()}
            >
              {" "}
              Sign up
            </span>
          </p>

          <div className="text-[14px] text-center text-[#858b9c] mt-18">
            <p>Or, login with</p>
          </div>
          <div className="flex mt-4.5 mb-6">
            <div className="flex items-center mr-7.5">
              <img
                src="https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s48-fcrop64=1,00000000ffffffff-rw"
                alt="google-logo"
                className="w-5.5 h-5.5"
              />
              <p className="ml-1.5 text-[14px] text-center text-[#858b9c]">
                Google
              </p>
            </div>
            <div className="flex items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="facebook"
                className="w-5.5 h-5.5 rounded-full"
              />
              <p className="ml-1.5 text-[14px] text-center text-[#858b9c]">
                Facebook
              </p>
            </div>
          </div>
          <div
            className="absolute right-5 top-5"
            onClick={setShowLogin}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 36 36"
              width="24"
              height="24"
              className="block absolute top-1 right-1 text-[#858b9c] cursor-pointer"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M28 8 L8 28 M8 8 L28 28"></path>
            </svg>
          </div>
        </div>
      )}
      {showSignUP && (
        <div className="fixed inset-0 z-50 flex items-center justify-center ">
          <div
            onClick={() => setShowLogin(false)}
            className="absolute inset-0 "
          ></div>
          <Signup setShowLogin={setShowLogin} fun={condition} />
        </div>
      )}
    </>
  );
};
export default Login;
