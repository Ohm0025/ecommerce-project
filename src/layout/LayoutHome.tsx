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
      <div className="grid grid-cols-2 p-3 bg-white shadow-md">
        <HeadBar />
        <SearchBar />
        <NavBar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutHome;
