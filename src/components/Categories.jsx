import smartphonesImg from "../assets/smartphones.png";
import laptopsImg from "../assets/laptops.avif";
import fragrancesImg from "../assets/fragrances.png";
import skincareImg from "../assets/skincare.png";
import groceriesImg from "../assets/groceries.png";
import homeDecorationImg from "../assets/home-decoration.png";
import furnitureImg from "../assets/furniture.png";
import mensShirtsImg from "../assets/mens-shirts.avif";
import mensShoesImg from "../assets/mens-shoes.png";
import womensDressesImg from "../assets/womens-dresses.png";
import womensShoesImg from "../assets/womens-shoes.png";
import womensBagsImg from "../assets/womens-bags.png";
import { react } from "react";
let Categories = () => {
  const categories = [
    { id: 1, name: "Smartphones", url: smartphonesImg },
    { id: 2, name: "Laptops", url: laptopsImg },
    { id: 3, name: "Fragrances", url: fragrancesImg },
    { id: 4, name: "Skincare", url: skincareImg },
    { id: 5, name: "Groceries", url: groceriesImg },
    { id: 6, name: "Home Decoration", url: homeDecorationImg },
    { id: 7, name: "Furniture", url: furnitureImg },
    { id: 8, name: "Men's Shirts", url: mensShirtsImg },
    { id: 9, name: "Men's Shoes", url: mensShoesImg },
    { id: 10, name: "Women's Dresses", url: womensDressesImg },
    { id: 11, name: "Women's Shoes", url: womensShoesImg },
    { id: 12, name: "Women's Bags", url: womensBagsImg },
  ];

  return (
    <>
      <div className="pt-6 w-297 text-[#424242]">
        <p className="text-[22px]">Categories</p>
        <div className="grid grid-cols-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="border border-[#e2e2e2]  w-full flex flex-col justify-center items-center h-[148.5px] "
            >
              <img
                src={category.url}
                alt={category.name}
                className="w-20 h-20"
              />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Categories;
