import Categories from "../categories";
import Slider from "../Slider";
import FlashSale from "../FlashSale";
import JustForYou from "../JustForYou";
const FirstPage = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <Slider />
        <FlashSale />
        <Categories />
        <JustForYou />
      </div>
    </>
  );
};

export default FirstPage;
