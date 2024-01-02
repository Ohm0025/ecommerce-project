import React, { useEffect, useState } from "react";
import SearchBar from "../component/searchBar/SearchBar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../component/footer/Footer";
import HeadBar from "../component/headBar/HeadBar";
import NavBar from "../component/navBar/NavBar";
import NavPage from "../component/navPage/NavPage";

type Props = {};

const LayoutHome = (props: Props) => {
  const location = useLocation();
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    let locationArr = location.pathname.split("/");
    let getProductId = locationArr[locationArr.length - 1];

    if (locationArr.includes("products")) {
      if (!isNaN(+getProductId)) {
        setIsHome(false);
      } else {
        setIsHome(true);
      }
    } else {
      setIsHome(true);
    }
  }, [location]);
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 gap-y-1 sm:grid-cols-8 p-3 bg-white shadow-md sticky top-0 z-[12] md:px-12">
        <HeadBar />
        {isHome ? (
          <SearchBar />
        ) : (
          <div className="col-span-full gap-[1px] order-last sm:order-1 sm:col-span-6 gap-y-1 grid grid-cols-1 sm:grid-cols-2 sm:min-w-[80%] sm:m-auto"></div>
        )}
        <NavBar />
        <NavPage />
      </div>
      <div className="sm:mt-[40px]">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default LayoutHome;
