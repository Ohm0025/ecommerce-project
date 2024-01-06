import { useEffect, useState } from "react";
import { useProductCategory } from "../../../store/categoryAll";
import { productCategory } from "../../../services/ProductCategory";

import { useLinkRef } from "../../../store/linkRef";

type Props = {
  listCat?: string[];
};

const CategoryFilter = ({}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { productCategories, setProductCategory } = useProductCategory();
  const { setCategory } = useLinkRef();

  const callData = async () => {
    if (productCategories.data.length === 0) {
      const response = await productCategory.getAllCategory();
      response.data &&
        setProductCategory({
          data: [...response.data],
          loading: false,
          error: null,
        });
    } else {
      setProductCategory({
        data: [...productCategories.data],
        loading: false,
        error: null,
      });
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
          {productCategories.data.map((item, index) => {
            return (
              // <Link
              //   to={"/products/category/" + item}
              //   key={`list-cat-item-${index}`}>
              //   <li className="text-[#8a8d91] cursor-pointer">{item}</li>
              // </Link>
              <li
                onClick={() => setCategory(item)}
                className="text-[#8a8d91] cursor-pointer"
                key={`list-cat-item-${index}`}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CategoryFilter;
