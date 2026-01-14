import Categories from "../categories";
import Slider from "../Slider";
import FlashSale from "../FlashSale";
import JustForYou from "../JustForYou";
import LoadMore from "../LoadMore";
const FirstPage = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <Slider />
        <FlashSale />
        <Categories />
        <JustForYou />
        <LoadMore />
      </div>
    </>
  );
};

export default FirstPage;
