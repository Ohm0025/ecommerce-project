import React, { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { formatPath } from "../../utils/formatText";
import { getPathArr } from "../../utils/getPathArr";
import { useLinkRef } from "../../store/linkRef";

type Props = {};

const NavPage = (props: Props) => {
  const location = useLocation();
  const params = useParams();

  const [isHome, setIsHome] = useState(false);
  const [arrPath, setArrPath] = useState<string[]>([]);

  const navigate = useNavigate();
  const { query, brand, category } = useLinkRef();

  return (
    <div className="hidden sm:flex absolute top-[100%] left-[50%] w-full translate-x-[-50%] translate-y-[0] px-4 py-2 text-gray-400 bg-[#f7fafc] border border-gray-200">
      <div className="w-[80%] mx-auto">
        <ul className="flex">
          {/* {arrPath.map((item, index) => {
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
          })} */}
          <li className="cursor-pointer" onClick={() => navigate("/")}>
            home
          </li>

          {location.pathname.split("/").includes("products") && (
            <li
              className="cursor-pointer"
              onClick={() => navigate("/products")}>
              <span className="mx-[10px]">{">"}</span>
              products
            </li>
          )}

          {category && (
            <>
              <span className="mx-[10px]">{">"}</span>
              <li
                className="cursor-pointer"
                onClick={() => navigate("/products/category/" + category)}>
                {category}
              </li>
            </>
          )}
          {brand && (
            <>
              <span className="mx-[10px]">{">"}</span>
              <li
                className="cursor-pointer"
                onClick={() => navigate("/products")}>
                {brand}
              </li>
            </>
          )}
          {query && (
            <>
              <span className="mx-[10px]">{">"}</span>
              <li
                className="cursor-pointer"
                onClick={() => navigate("/products/search/" + query)}>
                {query}
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavPage;
