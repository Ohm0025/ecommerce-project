import React from "react";
import useCategory from "./Category.hook";
import { Link } from "react-router-dom";
import { productCategory } from "../../services/ProductCategory";

type Props = {};

const category: string[] = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const Category = (props: Props) => {
  const { listCat = category, listImg } = useCategory();
  console.log(listImg);
  return (
    <div className="flex flex-col w-full mt-[17px] bg-[white] shadow-md">
      <div className="p-1">Categorys</div>
      <div className="flex overflow-x-auto">
        {listCat.map((item, index) => {
          return (
            <Link to={"/products/cat/" + item}>
              <div className="h-[170px] w-[150px] border-[0.5px] border-l-0 border-gray-200 hover:bg-[#8CB7F5] grid grid-rows-[2fr_1fr] items-center justify-center relative py-1">
                <img
                  src={
                    listImg.find((item2) => item2.productTitle === item)
                      ?.productImg
                  }
                  alt=""
                  className="w-full h-[120px] block"
                />
                <div className="text-center text-sm text-[black] relative bottom-0 p-2">
                  {item}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
