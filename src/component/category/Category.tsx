import React from "react";

type Props = {};

const category: string[] = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const Category = (props: Props) => {
  return (
    <div className="grid grid-cols-4 w-[80%] m-[auto]">
      {category.map((item, index) => {
        return (
          <div className="w-[150px] h-[100px] m-[auto] flex items-center justify-center bg-gray-500">
            <span className="text-center text-white">{item}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
