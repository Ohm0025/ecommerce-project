import React from "react";
import SearchBar from "../component/searchBar/SearchBar";
import { Outlet } from "react-router-dom";
import Footer from "../component/footer/Footer";

type Props = {};

const LayoutHome = (props: Props) => {
  return (
    <div className="flex flex-col">
      <SearchBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutHome;
