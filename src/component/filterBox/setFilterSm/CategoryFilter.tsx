import React, { useState } from "react";

type Props = {
  listCat: string[];
};

const CategoryFilter = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`border-t-2 py-2 ${isOpen ? "h-fit" : "h-[50px]"}`}>
      <div className="flex justify-between items-center px-1">
        <span>Category</span>
        <button
          className="text-[#8a8d91]"
          onClick={() => setIsOpen((prev) => !prev)}>
          <i className={`fa-solid fa-chevron-${isOpen ? "up" : "down"}`}></i>
        </button>
      </div>
      <div className={`dropdown-${isOpen ? "active" : "inactive"}`}>
        <ul className={`px-2 py-1 `}>
          {props.listCat.map((item, index) => {
            return <li className="text-[#8a8d91]">{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default CategoryFilter;
