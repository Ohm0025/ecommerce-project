import { useUserCart } from "../../../../store/currentCart";
import { InputProductType } from "../../../../utils/clickCartSmall";
import CartItem from "./cartItem/CartItem";

type Props = {
  isOpen: boolean;
};

const CartList = ({ isOpen }: Props) => {
  const { userCart, clearUserCart } = useUserCart();

  return (
    <div
      className={`profile-${
        isOpen ? "active" : "inactive"
      } absolute top-[100%] right-[25%] z-20`}>
      <ul className={`px-2 py-1`}>
        {userCart.map((item, index) => {
          return <CartItem item={item} key={`list-cart-${index}`} />;
        })}
      </ul>
      <div className="w-full">
        <button className="w-full py-2 bg-[orange] text-white">Payment</button>
      </div>
      <div>
        <button
          onClick={() => {
            clearUserCart();
            localStorage.setItem("user-cart", "");
          }}>
          clear cart
        </button>
      </div>
    </div>
  );
};

export default CartList;
