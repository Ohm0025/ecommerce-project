import React from "react";
import useCategory from "./Category.hook";
import { Link } from "react-router-dom";

type Props = {};

const category: string[] = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const Category = (props: Props) => {
  const { listCat = category } = useCategory();
  return (
    <div className="flex flex-col w-full mt-[17px] bg-[white] shadow-md">
      <div className="p-1">Categorys</div>
      <div className="overflow-auto flex">
        {listCat.map((item, index) => {
          return (
            <Link to={"/products/cat/" + item}>
              <div className="h-[120px] w-[120px] border-[0.5px] border-l-0 border-gray-200 flex items-center">
                <span className="text-center text-[black]">{item}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
