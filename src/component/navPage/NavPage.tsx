import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type Props = {};

const NavPage = (props: Props) => {
  const location = useLocation();
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return <div className="hidden sm:block">NavPage</div>;
};

export default NavPage;
