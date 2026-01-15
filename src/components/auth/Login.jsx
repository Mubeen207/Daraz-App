const Login = () => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center ">
        <div
          onClick={() => setShowLogin(false)}
          className="absolute inset-0 bg-black/40"
        ></div>

        <div className="relative z-10 w-111 h-111.25 rounded-md bg-white flex flex-col items-center ">
          <div className="flex justify-between text-[16px] text-[#858b9c] mt-6.5 px-9">
            <div className="text-center w-[185.5px] font-bold">
              <p>Password</p>
            </div>
            <div className="text-center w-[185.5px] font-bold">
              <p>Phone Number</p>
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
                placeholder="Please enter your Phone or Email"
              />
            </div>
            <div className="text-[14px] mt-1.5 flex justify-end text-[#858b9c]">
                <p>Forgot password?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
