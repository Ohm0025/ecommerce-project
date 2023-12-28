import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import { useSearchBar } from "./SearchBar.hook";
import { Link } from "react-router-dom";
import UserDropDown from "../userDropdown/UserDropDown";
import Dropdown from "react-dropdown";
import "./SearchBar.css";

type Props = {};

const mockCatList = ["All category", "cat1", "cat2", "cat3"];

const SearchBar = (props: Props) => {
  const [openCart, setOpenCart] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const { fieldKeyword, suggestArr, listProducts, changeKeyword, keyword } =
    useSearchBar();

  const suggestBox = React.useRef<HTMLInputElement | any>(null);
  const [openSuggest, setOpenSuggest] = useState(true);

  const [catList, setCatList] = useState(mockCatList[0]);

  useEffect(() => {
    const handleClickOutSideSuggestBox = (e: any) => {
      if (suggestBox.current && !suggestBox.current.contains(e.target)) {
        setOpenSuggest(false);
      } else {
        if (e.target.name === "keyword") setOpenSuggest(true);
      }
    };
    document.addEventListener("click", handleClickOutSideSuggestBox);
    return () => {
      document.removeEventListener("click", handleClickOutSideSuggestBox);
    };
  }, [suggestBox]);

  return (
    <div className="col-span-full gap-[1px] order-last sm:order-1 sm:col-span-6 gap-y-1 grid grid-cols-1 sm:grid-cols-2 items-center sm:border-2 sm:rounded-[10px] sm:border-[#3d8bfd] sm:bg-[#3d8bfd] sm:min-w-[80%] sm:overflow-hidden sm:m-auto">
      <input
        {...fieldKeyword}
        type="text"
        placeholder="Search"
        className="p-[8px] h-full border outline-none text-[17px] flex-1 w-full rounded-[8px] sm:rounded-l-[8px] sm:rounded-r-none"
      />
      <div className="grid grid-cols-2 w-full">
        <Dropdown
          className="custom-dropdown-root text-[14px]"
          controlClassName="custom-dropdown-control"
          arrowClassName="custom-dropdown-arrow"
          arrowOpen={<i className="fa-solid fa-chevron-up"></i>}
          arrowClosed={<i className="fa-solid fa-chevron-down"></i>}
          options={mockCatList}
          value={catList}
          onChange={(e) => setCatList(e.value)}
        />
        <button
          className="bg-[#3d8bfd] text-[white] px-4 py-2 col-span-1"
          onClick={() => listProducts()}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
