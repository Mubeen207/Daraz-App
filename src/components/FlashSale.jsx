import { useEffect, useState } from "react";
const FlashSale = () => {
  const [product, setProduct] = useState([]);
  const fetchProducts = async () => {
    try {
      let response = await fetch("https://fakestoreapi.com/products");
      if (!response) console.log("Faild to Fatch Products");
      let data = await response.json();
      setProduct(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <div className="w-ful flex flex-col items-center pt-6 ">
        <div className="w-297 shadow-[0_0_25px_rgba(0,0,0,0.08)]">
          <p className="text-[22px]">Flash Sale</p>
        </div>
        <div className="w-297 h-[61.33px] flex justify-between items-center mb-[2.5] shadow-[0_0_25px_rgba(0,0,0,0.08)]">
          <div className=" w-[105.13px] h-15 flex justify-end items-center">
            <p className="text-[#f57224] flex">On Sale Now</p>
          </div>
          <div className="px-2.5 border mr-2.75 h-[37.67px] flex items-center justify-center text-[#f57224]">
            SHOP ALL PRODUCTS
          </div>
        </div>

        <div className="flex">
          {product.map((product) => {
            if (product.id < 7) {
              return (
                <div className="min-h-72.5 w-47 ml-3 shadow-[0_0_25px_rgba(0,0,0,0.08)]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-47 h-47"
                  />
                  <div className="mt-1 mx-2">
                    <p className="text-[14px] line-clamp-2">{product.title}</p>
                    <p className="text-[#f57224] text-[18px]">
                      Rs:<span>{product.price}</span>
                    </p>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
};
export default FlashSale;
