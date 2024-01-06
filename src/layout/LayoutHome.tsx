import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../component/footer/Footer";
import TopBarMain from "./topBar/TopBarMain";

type Props = {};

const LayoutHome = ({}: Props) => {
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
      if (locationArr.includes("checkout")) {
        setIsHome(false);
      } else {
        setIsHome(true);
      }
    }
  }, [location]);
  return (
    <div className="flex flex-col">
      <TopBarMain isHome={isHome} />
      <div className="sm:mt-[40px]">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default LayoutHome;
