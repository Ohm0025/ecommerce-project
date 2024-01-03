import React from "react";
import ProductCounter from "../productCounter/ProductCounter";

type ListItemType = {
  title: string;
  img: string;
};

type Props = {
  item: ListItemType;
};

const ListCartItem = ({ item }: Props) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-3 border-b-[1px] border-gray-200 py-3`}>
      <div className="flex gap-3 col-span-2 relative">
        <div className="h-[100px] border border-gray-200 rounded-md">
          <img src={item.img} className="h-full w-auto" alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text">Product title</div>
          <div className="text-gray-400 flex flex-col">
            <span>brand:</span>
            <span>rating:</span>
          </div>

          <div className="absolute sm:static right-[0.2rem]">
            <button className="text-sm text-[red] px-2 py-1 border border-gray-200 rounded-md">
              <span className="hidden sm:inline-block">Remove</span>
              <span className="inline-block sm:hidden">
                <i className="fa-solid fa-trash"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse items-center justify-between mt-3 sm:mt-0 sm:flex-col sm:items-end sm:justify-center sm:pr-3 gap-3">
        <div className="text">$45.90</div>
        <ProductCounter />
      </div>
    </div>
  );
};

export default ListCartItem;
