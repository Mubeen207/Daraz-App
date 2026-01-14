import { useEffect, useState } from "react";

const JustForYou = () => {
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
  const renderStars = (rate) => {
    const stars = [];
    const fullStars = Math.floor(rate);
    const halfStar = rate % 1 >= 0.5;
    const maxStars = 5;

    for (let i = 0; i < fullStars; i++) {
      stars.push("★");
    }
    if (halfStar) {
      stars.push("☆");
    }
    while (stars.length < maxStars) {
      stars.push("☆");
    }

    return stars.join(" ");
  };

  return (
    <>
      <div className="flex flex-col items-center p-6 w-297 h-9.5">
        <div className="text-[22px] w-full text-[#424242] flex justify-start">
          <span>Just For You</span>
        </div>
        <div className="grid grid-cols-6 w-297 gap-2">
          {product.map((product) => (
            <div
              key={product.id}
              className="shadow-[0_0_25px_rgba(0,0,0,0.08)]"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-47.25 h-47.25"
              />
              <div className="px-2 py-1">
                <p className="line-clamp-2">{product.title}</p>
                <p className="text-[18px] text-[#f57224]">
                  Rs:<span>{product.price}</span>
                </p>
                <p className="text-[#faca51]">{renderStars(product.rating.rate)}<span className="text-[#9e9e9e] text-[12px]">({product.rating.count})</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default JustForYou;
