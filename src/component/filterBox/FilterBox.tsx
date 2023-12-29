import React from "react";
import useFilterBox from "./FilterBox.hook";
import CheckBox from "../checkBox/CheckBox";
import "./FilterBox.css";
import DropDownSort from "./DropDownSort";
import DropDownFilter from "./DropDownFilter";

type Props = {};

const FilterBox = (props: Props) => {
  //const { productCategories, setCurrentCat } = useFilterBox();
  return (
    <div className="grid grid-cols-8 gap-1 bg-white p-2 mt-1 shadow sticky top-[150px] sm:top-[73px] left-0 z-10">
      <DropDownSort />
      <DropDownFilter />
      <div className="flex col-span-2 justify-center items-center border border-[#e1e1e1]-1 rounded-[7px] relative">
        <button className="flex-1 flex justify-center items-center h-full w-full border-r-[1px]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M9.16667 2.5H2.5V9.16667H9.16667V2.5Z" fill="#1C1C1C" />
            <path
              d="M9.16667 10.8333H2.5V17.5H9.16667V10.8333Z"
              fill="#1C1C1C"
            />
            <path d="M17.5 2.5H10.8333V9.16667H17.5V2.5Z" fill="#1C1C1C" />
            <path d="M17.5 10.8333H10.8333V17.5H17.5V10.8333Z" fill="#1C1C1C" />
          </svg>
        </button>
        {/* <div className="vertical"></div> */}
        <button className="flex-1 flex justify-center items-center h-full w-full border-l-[1px]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.5 6.66671H2.5V3.33337H17.5V6.66671ZM17.5 8.33337H2.5V11.6667H17.5V8.33337ZM17.5 13.3334H2.5V16.6667H17.5V13.3334Z"
              fill="#1C1C1C"
            />
          </svg>
        </button>
      </div>
      {/* <div>
        category
        <div>
          {productCategories.data.map((item) => (
            <CheckBox catName={item} cb={setCurrentCat} />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default FilterBox;
