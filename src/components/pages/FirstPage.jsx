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
import arrow from "../../assets/arrow.png";

const FirstPage = () => {
  let [count, setCount] = useState(0);
  let [paused, setPaused] = useState(false);
  let [sliderDiv , setSliderDiv] = useRef(null);
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
    if (paused){
            let element
    }
    if (paused) return;
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % sliderImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [paused, sliderImages.length]);

  return (
    <>
      <div className="flex justify-center">
        {/* Slider Bana raha hon */}
        <div
        ref={arrowsRef}
          onMouseEnter={() => setPaused(true)}
          onMouseOut={() => setPaused(false)}
          className="flex justify-center items-center relative w-247 h-86"
        >
          <img
            src={sliderImages[count]}
            alt={`slider-${count + 1}`}
          />
          
            <img src={arrow} alt="arrow-right" className="absolute top-50% right-0 cursor-pointer hidden w-6 h-7.5 " />
            <img src={arrow} alt="arrow-right" className="absolute top-50% left-0 rotate-180 cursor-pointer hidden w-6 h-7.5" />
          
        </div>
        {/* Slider Khatam */}
      </div>
    </>
  );
};
export default FirstPage;
