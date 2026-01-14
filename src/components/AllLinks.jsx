import Ancers from "./Ancers";

const AllLinks = () => {
  let CustomerCare = [
    "Help Center",
    "How to Buy",
    "Corporate & Bulk Purchasing",
    "Returns & Refunds",
    "Daraz Shop",
    "Contact Us",
    "Purchase Protection",
    "Daraz Pick up Points",
  ];
  let Daraz = [
    "About Us",
    "Digital Payments",
    "Daraz Donates",
    "Daraz Blog",
    "Terms & Conditions",
    "Privacy Policy",
    "NTN Number : 4012118-6",
    "STRN Number : 1700401211818",
    "Online Shopping App",
    "Online Grocery Shopping",
    "Daraz Exclusive",
    "Daraz University",
    "Sell on Daraz",
    "Join Daraz Affiliate Program",
  ];

  return (
    <>
      <div className="flex w-297 py-5 justify-between ">
        <div className="flex justify-between w-148.5  ">
          <div>
            <p className="text-[16px] text-[#0f136d] h-8.75 flex items-center justify-start">
              Customer Care
            </p>
            {CustomerCare.map((link, index) => (
              <Ancers key={index} message={link} />
            ))}
          </div>
          <div>
            <p className="text-[16px] text-[#0f136d] h-8.75 flex items-center justify-start">
              Daraz
            </p>
            {Daraz.map((link, index) => (
              <Ancers key={index} message={link} />
            ))}
          </div>
        </div>
        <div className="w-148.5 flex">
          <div className="flex">
            <img
              src="https://img.lazcdn.com/us/domino/e07f9602-da7e-4d31-9c4f-df69a2e95325_PK-60-60.png"
              alt="Logo"
              className="w-10.5 h-10.5"
            />
            <div className="px-3.75">
              <p className="text-[#f36f36] text-[16px]">Happy Shopping</p>
              <p className="text-[#0f136d] text-[14px]">Download App</p>
            </div>
          </div>
          <div className="flex flex-col items-center w-72.5">
            <div className="grid grid-cols-2">
              <img
                src="https://img.lazcdn.com/us/domino/2db6633b-c83c-48b7-9f7d-1262ee87cc80_PK-126-42.png"
                alt="App Store"
                className="mr-3 mb-3"
              />
              <img
                src="https://img.lazcdn.com/us/domino/4812f06f-072d-45be-a930-640edf4caeee_PK-126-42.png"
                alt="Play Store"
              />
              <img
                src="https://img.lazcdn.com/us/domino/7d216fe8-1bac-4ac9-81d3-072a9fbf32fc_PK-126-42.png"
                alt="App Gallery"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AllLinks;
