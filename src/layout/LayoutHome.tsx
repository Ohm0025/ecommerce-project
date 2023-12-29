import React from "react";
import SearchBar from "../component/searchBar/SearchBar";
import { Outlet } from "react-router-dom";
import Footer from "../component/footer/Footer";
import HeadBar from "../component/headBar/HeadBar";
import NavBar from "../component/navBar/NavBar";

type Props = {};

const LayoutHome = (props: Props) => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 gap-y-1 sm:grid-cols-8 p-3 bg-white shadow-md sticky top-0 z-[12]">
        <HeadBar />
        <SearchBar />
        <NavBar />
      </div>
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LayoutHome;
