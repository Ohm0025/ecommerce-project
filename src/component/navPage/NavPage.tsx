import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { formatPath } from "../../utils/formatText";
import { getPathArr } from "../../utils/getPathArr";

type Props = {};

const NavPage = (props: Props) => {
  const location = useLocation();
  const params = useParams();
  const [isHome, setIsHome] = useState(false);
  const [arrPath, setArrPath] = useState<string[]>([]);

  useEffect(() => {
    const initPath = location.pathname.split("/");

    if (initPath.includes("products")) {
      console.log(formatPath("products"));
      if (params) {
        console.log(params);
      }
      setArrPath(() => getPathArr(formatPath("products")));
    }
  }, [location]);

  return (
    <div className="hidden sm:flex absolute top-[100%] left-[50%] w-full translate-x-[-50%] translate-y-[0] px-4 py-2 text-gray-400 bg-[#f7fafc] border border-gray-200">
      <div className="w-[80%] mx-auto">
        <ul className="flex">
          {arrPath.map((item, index) => {
            return (
              item && (
                <>
                  <li className="cursor-pointer">{formatPath(item)}</li>
                  {index !== arrPath.length - 1 && (
                    <span className="mx-[10px]">{">"}</span>
                  )}
                </>
              )
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavPage;
