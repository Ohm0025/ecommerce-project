import React from "react";
import SearchBar from "../component/searchBar/SearchBar";
import { Outlet } from "react-router-dom";

type Props = {};

const LayoutHome = (props: Props) => {
  return (
    <div className="flex flex-col">
      <SearchBar />
      <Outlet />
    </div>
  );
};

export default LayoutHome;
