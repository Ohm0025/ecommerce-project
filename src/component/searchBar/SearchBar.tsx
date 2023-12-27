import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import { useSearchBar } from "./SearchBar.hook";
import { Link } from "react-router-dom";
import UserDropDown from "../userDropdown/UserDropDown";

type Props = {};

const SearchBar = (props: Props) => {
  const [openCart, setOpenCart] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const { fieldKeyword, suggestArr, listProducts, changeKeyword, keyword } =
    useSearchBar();

  const suggestBox = React.useRef<HTMLInputElement | any>(null);
  const [openSuggest, setOpenSuggest] = useState(true);

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
    <div className="grid grid-cols-8 sm:grid-cols-12 items-center w-full py-3 px-2 min-w-[300px] max-w-[760px] m-[auto] relative">
      <Link to={"/"}>
        <img
          src="https://img.freepik.com/premium-vector/abstract-modern-ecommerce-logo-design-colorful-gradient-happy-shopping-logo-template_467913-990.jpg"
          alt="logo_web"
          className="rounded-full w-[50px] block col-start-1"
        />
      </Link>
      <div className="flex rounded-[20px] min-w-[300px] bg-[gray] justify-between border border-[gray] overflow-hidden col-start-2 col-end-7 sm:col-start-4 sm:col-end-10">
        <input
          {...fieldKeyword}
          type="text"
          placeholder="search here"
          className="flex-1 px-3 py-2 outline-none text-[18px]"
        />
        <button
          className="w-[50px] text-center p-3 text-white"
          onClick={() => listProducts()}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      {suggestArr.length > 0 && openSuggest && (
        <div
          className="absolute top-[65px] left-[50%] translate-x-[-50%] bg-gray-300 w-[450px] z-20 overflow-auto"
          ref={suggestBox}>
          {suggestArr.slice(0, 5).map((item) => {
            return (
              <>
                {item !== keyword && (
                  <div
                    onClick={() => {
                      changeKeyword(item);
                      listProducts(item);
                    }}
                    className="px-[7px] py-[5px] hover:bg-gray-500 hover:text-white hover:cursor-pointer">
                    {item}
                  </div>
                )}
              </>
            );
          })}
        </div>
      )}
      <div className="flex justify-between col-start-11 col-span-2">
        <div
          className={`${
            openCart ? "bg-gray-200 text-black" : "bg-[gray] text-white"
          } w-[50px] rounded-full text-center`}>
          <button
            className="text-center p-3"
            onClick={() => {
              setOpenCart((prev) => !prev);
              setOpenUser(false);
            }}>
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
        <div
          className={`${
            openUser ? "bg-gray-200 text-black" : "bg-[gray] text-white"
          } w-[50px] rounded-full text-center`}>
          <button
            className="text-center p-3 text-white"
            onClick={() => {
              setOpenUser((prev) => !prev);
              setOpenCart(false);
            }}>
            <i className="fa-solid fa-user"></i>
          </button>
        </div>
      </div>

      <UserDropDown isOpen={openUser} />
      <Cart listItem={["ekfpe", "hjge0oigjo", "eiohjg0"]} isOpen={openCart} />
    </div>
  );
};

export default SearchBar;
