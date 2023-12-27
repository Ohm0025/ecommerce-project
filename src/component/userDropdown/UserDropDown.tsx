import React from "react";
import { Link } from "react-router-dom";

type Props = {
  isOpen: boolean;
};

const UserDropDown = (props: Props) => {
  const token = localStorage.getItem("webToken");
  return (
    props.isOpen && (
      <div className="absolute z-[2] top-2 right-0 max-w-[400px] w-[300px] translate-y-[60px]">
        <ul className="text-center">
          <li className="bg-gray-400 py-2">profile</li>
          {token ? (
            <li className="bg-gray-400 py-2">log out</li>
          ) : (
            <Link to={"/authen"}>
              <li className="bg-gray-400 py-2 hover:text-white hover:bg-gray-600">
                log in
              </li>
            </Link>
          )}
        </ul>
      </div>
    )
  );
};

export default UserDropDown;
