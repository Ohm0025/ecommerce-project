import React, { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { formatPath } from "../../utils/formatText";
import { getPathArr } from "../../utils/getPathArr";

type Props = {};

const NavPage = (props: Props) => {
  const location = useLocation();
  const params = useParams();

  const [isHome, setIsHome] = useState(false);
  const [arrPath, setArrPath] = useState<string[]>([]);

  const urlParams = new URLSearchParams(window.location.search);
  const search = urlParams.get("q");

  useEffect(() => {
    const initPath = location.pathname.split("/");

    if (initPath.includes("products")) {
      //console.log(formatPath("products"));
      setArrPath((prev) => ["Home", "Products"]);
      if (params.cat) {
        setArrPath((prev) => {
          return [...prev, params.cat];
        });
      }
      if (search) {
        setArrPath((prev) => {
          return [...prev, search];
        });
      }
      //setArrPath(() => getPathArr(formatPath("products")));
    }
  }, [location]);

  return (
    <div className="hidden sm:flex absolute top-[100%] left-[50%] w-full translate-x-[-50%] translate-y-[0] px-4 py-2 text-gray-400 bg-[#f7fafc] border border-gray-200">
      <div className="w-[80%] mx-auto">
        <ul className="flex">
          {arrPath.map((item, index) => {
            return (
              item && (
                <React.Fragment key={`path-item-${index}`}>
                  <li className="cursor-pointer">{formatPath(item)}</li>
                  {index !== arrPath.length - 1 && (
                    <span className="mx-[10px]">{">"}</span>
                  )}
                </React.Fragment>
              )
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavPage;
