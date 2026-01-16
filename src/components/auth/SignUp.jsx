const SignUp = ({setShowLogin , fun}) => {
  return (
    <>
      <div className="relative z-10 w-111 h-111.25 rounded-md bg-white flex flex-col items-center ">
        <div className="flex justify-between text-[16px] text-[#858b9c] mt-6.5 px-9">
          <div className="text-center w-[185.5px] text-[#2e3346]">Sign up</div>
        </div>
        <div className="flex flex-col mt-12 px-6 w-full h-34.25">
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
          <div className="flex items-start mt-3 text-[#858b9c]">
            <div className="w-5 h-5 border border-gray-400 rounded-sm">
              <svg
                className="w-5 h-4 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              ></svg>
            </div>
            <p className="text-[14px] ml-1.5 pr-2">
              By creating and/or using your account, you agree to our
              <span className="text-[#1e71ff]"> Terms of Use </span> and{" "}
              <span> Privacy Policy.</span>
            </p>
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
          Already have an account?
          <span className="text-[#1e71ff] cursor-pointer hover:underline" onClick={fun}> Log in Now</span>
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
        <div className="absolute right-5 top-5" onClick={()=> setShowLogin(false)}>
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
    </>
  );
};
export default SignUp;
