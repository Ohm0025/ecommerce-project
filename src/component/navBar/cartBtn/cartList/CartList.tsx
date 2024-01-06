import { useNavigate } from "react-router-dom";
import { useUserCart } from "../../../../store/currentCart";
import CartItem from "./cartItem/CartItem";
import { useEffect } from "react";

type Props = {
  isOpen: boolean;
};

const CartList = ({ isOpen }: Props) => {
  const { userCart, clearUserCart } = useUserCart();
  const navigate = useNavigate();

  useEffect(() => {
    // let oldCart = localStorage.getItem("user-cart");
    // let oldCartConvert = JSON.parse(oldCart || "[]");
    let newCart = [...userCart];
    localStorage.setItem("user-cart", JSON.stringify(newCart));
  }, [userCart]);

  return (
    <>
      {userCart.length > 0 ? (
        <div
          className={`profile-${
            isOpen ? "active" : "inactive"
          } absolute top-[100%] right-[25%] z-20 p-2`}>
          <ul className={`px-2 py-1`}>
            {userCart.map((item, index) => {
              return <CartItem item={item} key={`list-cart-${index}`} />;
            })}
          </ul>
          <div className="w-full flex flex-col items-center gap-1 mt-1">
            <button
              className="w-[80%] py-2 bg-[#0d79fd] rounded-md text-white"
              onClick={() => navigate("/ecommerce-project/checkout")}>
              check bill
            </button>

            <button
              className="w-[80%] py-2 bg-[#0d79fd] rounded-md text-white"
              onClick={() => {
                clearUserCart();
                localStorage.setItem("user-cart", "");
              }}>
              clear cart
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default CartList;
