import React from "react";
import HeadBar from "../../component/headBar/HeadBar";
import NavBar from "../../component/navBar/NavBar";
import NavPage from "../../component/navPage/NavPage";
import SearchBar from "../../component/searchBar/SearchBar";
import FilterBox from "../../component/filterBox/FilterBox";

type Props = {
  isHome: boolean;
};

const TopBarMain = ({ isHome }: Props) => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap w-full items-center p-3 bg-white sm:shadow-md sticky top-0 z-[12]">
      <HeadBar />
      {isHome ? (
        <SearchBar />
      ) : (
        <div className="col-span-full gap-[1px] order-last sm:order-1 sm:col-span-6 gap-y-1 grid grid-cols-1 sm:grid-cols-2 sm:min-w-[80%]"></div>
      )}
      <NavBar />
      <NavPage />
    </div>
  );
};

export default TopBarMain;
