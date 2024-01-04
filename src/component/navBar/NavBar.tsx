import React, { useState } from "react";
import "./NavBar.css";
import ProfileMenu from "./profileMenu/ProfileMenu";
import CartBtn from "./cartBtn/CartBtn";
import ProfileBtn from "./profileBtn/ProfileBtn";
import OrderBtn from "./orderBtn/OrderBtn";

type Props = {};

const NavBar = (props: Props) => {
  const [openAuth, setOpenAuth] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openOrder, setOpenOrder] = useState(false);
  return (
    <div className="order-2 flex items-center flex-1 justify-end gap-1 pr-5 sm:pr-1 sm:gap-3 sm:relative">
      <CartBtn
        callBack={() => setOpenCart((prev) => !prev)}
        openCart={openCart}
      />
      <OrderBtn
        callBack={() => setOpenOrder((prev) => !prev)}
        openOrder={openOrder}
      />
      <ProfileBtn
        callBack={() => setOpenAuth((prev) => !prev)}
        openAuth={openAuth}
      />
    </div>
  );
};

export default NavBar;
