import React from "react";
import "./ProfileMenu.css";
import { useNavigate } from "react-router-dom";

type Props = {
  isOpen: boolean;
};
const listMenu = ["menu 1", "menu 2"];

const ProfileMenu = ({ isOpen }: Props) => {
  const token = localStorage.getItem("authToken");
  const navigate = useNavigate();

  return (
    <div
      className={`profile-${
        isOpen ? "active" : "inactive"
      } absolute top-[100%] right-0 z-20`}>
      <ul className={`px-2 py-1`}>
        <li className="text-[white] py-1 text-center">
          {token ? "Hi , client one-one" : "Hi , guest"}
        </li>
        <li
          className="text-[white] py-1 text-center cursor-pointer"
          onClick={() => navigate("/authen")}>
          {token ? "Logout" : "Login / Register"}
        </li>
      </ul>
    </div>
  );
};

export default ProfileMenu;
