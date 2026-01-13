import { useEffect, useRef, useState } from "react";
import SliderImage1 from "../../assets/SliderImage1.avif";
import SliderImage2 from "../../assets/SliderImage2.avif";
import SliderImage3 from "../../assets/SliderImage3.avif";
import SliderImage4 from "../../assets/SliderImage4.avif";
import SliderImage5 from "../../assets/SliderImage5.avif";
import SliderImage6 from "../../assets/SliderImage6.avif";
import SliderImage7 from "../../assets/SliderImage7.avif";
import SliderImage8 from "../../assets/SliderImage8.avif";
import SliderImage9 from "../../assets/SliderImage9.avif";
import SliderImage10 from "../../assets/SliderImage10.avif";
import SliderImage11 from "../../assets/SliderImage11.avif";
import SliderImage12 from "../../assets/SliderImage12.avif";
import SliderImage13 from "../../assets/SliderImage13.avif";
import SliderImage14 from "../../assets/SliderImage14.avif";
import SliderImage15 from "../../assets/SliderImage15.avif";
import Side from "../../assets/SIDE.png";
import arrow from "../../assets/arrow.png";

const FirstPage = () => {
  const [count, setCount] = useState(0);
  const [paused, setPaused] = useState(false);
  const sliderRef = useRef(null);
  const [product, setProduct] = useState([]);

  const sliderImages = [
    SliderImage1,
    SliderImage2,
    SliderImage3,
    SliderImage4,
    SliderImage5,
    SliderImage6,
    SliderImage7,
    SliderImage8,
    SliderImage9,
    SliderImage10,
    SliderImage11,
    SliderImage12,
    SliderImage13,
    SliderImage14,
    SliderImage15,
  ];

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCount((prev) => (prev + 1) % sliderImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [paused]);

  const nextSlide = () => {
    setCount((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCount((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };
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
      <div className="flex flex-col items-center">
        <div>
          {/* ye slider wale ha */}
          <div
            ref={sliderRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative group flex items-center justify-center w-247 h-86"
          >
            <img
              src={sliderImages[count]}
              alt={`slider-${count + 1}`}
              className="w-full h-full object-cover"
            />
            <img
              src={arrow}
              alt="next"
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer opacity-0 group-hover:opacity-100 w-6 h-7.5"
            />

            <img
              src={arrow}
              alt="prev"
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 rotate-180 cursor-pointer opacity-0 group-hover:opacity-100 w-6 h-7.5"
            />
            <img src={Side} alt="side_image" className="w-50 h-86" />
          </div>
        </div>
      </div>
      <div
        className="w-ful flex flex-col items-center pt-6 
"
      >
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
      </div>
      {
        product.map((product)=>
        <div key={product.id}>{product.title}
        <img src={product.image} alt={product.title} />
        </div>
        )
      }
    </>
  );
};

export default FirstPage;
