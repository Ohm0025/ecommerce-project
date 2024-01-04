import React, { useEffect, useState } from "react";
import { useProductCategory } from "../../../store/categoryAll";
import { productCategory } from "../../../services/ProductCategory";
import { Link } from "react-router-dom";

type Props = {
  listCat?: string[];
};

const CategoryFilter = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { productCategories } = useProductCategory();

  const [listCat, setListCat] = useState<string[]>([]);

  const callData = async () => {
    if (productCategories.data.length === 0) {
      const response = await productCategory.getAllCategory();
      response.data && setListCat([...response.data]);
    } else {
      setListCat([...productCategories.data]);
    }
  };

  useEffect(() => {
    callData();
  }, []);

  return (
    <div
      className={`border-t-2 py-2 ${
        isOpen ? "h-fit" : "h-[50px]"
      } align-middle`}>
      <div className="flex justify-between items-center px-1 mt-1">
        <span>Category</span>
        <button
          className="text-[#8a8d91]"
          onClick={() => setIsOpen((prev) => !prev)}>
          <i className={`fa-solid fa-chevron-${isOpen ? "up" : "down"}`}></i>
        </button>
      </div>
      <div className={`dropdown-${isOpen ? "active" : "inactive"}`}>
        <ul className={`px-2 py-1`}>
          {listCat.map((item, index) => {
            return (
              <Link
                to={"/products/category/" + item}
                key={`list-cat-item-${index}`}>
                <li className="text-[#8a8d91] cursor-pointer">{item}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CategoryFilter;
