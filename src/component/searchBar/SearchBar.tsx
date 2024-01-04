import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import { useSearchBar } from "./SearchBar.hook";
import { Link } from "react-router-dom";
import UserDropDown from "../userDropdown/UserDropDown";
import Dropdown from "react-dropdown";
import "./SearchBar.css";
import { Container } from "@mui/material";

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
    <div className="flex h-[40px] gap-[1px] order-last sm:order-1 gap-y-1 items-center border-2 rounded-[10px] border-[#3d8bfd] bg-[#3d8bfd] w-[100%] mx-auto sm:w-[50%]">
      <input
        {...fieldKeyword}
        type="text"
        placeholder="Search"
        className="p-[8px] h-full flex flex-glow-1 border outline-none text-[13px] w-full rounded-[8px] rounded-l-[8px] rounded-r-none"
      />
      <div className="flex h-[40px] w-full">
        <Dropdown
          className="custom-dropdown-root text-[10px]"
          controlClassName="custom-dropdown-control"
          arrowClassName="custom-dropdown-arrow"
          arrowOpen={<i className="fa-solid fa-chevron-up"></i>}
          arrowClosed={<i className="fa-solid fa-chevron-down"></i>}
          options={mockCatList}
          value={catList}
          onChange={(e) => setCatList(e.value)}
        />
        <button
          className="bg-[#3d8bfd] text-[10px] text-[white] px-4 col-span-1 rounded-[10px]"
          onClick={() => listProducts()}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
