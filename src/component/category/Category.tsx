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
    <div className="grid grid-cols-4 w-[80%] m-[auto]">
      {listCat.map((item, index) => {
        return (
          <Link to={"/products/cat/" + item}>
            <div className="w-[150px] h-[100px] m-[auto] flex items-center justify-center bg-gray-500">
              <span className="text-center text-white">{item}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Category;
