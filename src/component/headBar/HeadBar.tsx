import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HeadBarMain from "./HeadBarMain";
import HeadBarAlter from "./HeadBarAlter";

type Props = {};

const HeadBar = (props: Props) => {
  // const location = useLocation();
  // const [isHome, setIsHome] = useState(true);

  // useEffect(() => {
  //   let locationArr = location.pathname.split("/");
  //   let getProductId = locationArr[locationArr.length - 1];

  //   if (locationArr.includes("products")) {
  //     setIsHome(false);

  //     // if (!isNaN(+getProductId)) {
  //     //   console.log(getProductId);
  //     // }
  //   } else {
  //     setIsHome(true);
  //   }
  // }, [location]);

  return <HeadBarMain />;
  // <>{isHome ? <HeadBarMain /> : <HeadBarAlter />}</>;
};

export default HeadBar;
