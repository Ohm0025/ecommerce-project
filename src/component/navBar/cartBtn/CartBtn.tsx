import CartList from "./cartList/CartList";
import { useUserCart } from "../../../store/currentCart";

type Props = {
  openCart: boolean;
  callBack: () => void;
};

const CartBtn = ({ openCart, callBack }: Props) => {
  const { userCart } = useUserCart();
  let totalCart = userCart.reduce((acc, item) => (acc += item.productQTY), 0);
  return (
    <>
      <button
        onClick={callBack}
        id="cartBtn"
        className={`flex flex-col items-center nav-bar-btn p-[0.34rem] relative ${
          openCart ? "open" : ""
        }`}>
        <svg
          className="fill-[#8b96a5]"
          width="27"
          height="27"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5461 13C17.2961 13 17.9561 12.59 18.2961 11.97L21.8761 5.48C22.2461 4.82 21.7661 4 21.0061 4H6.20609L5.26609 2H1.99609V4H3.99609L7.59609 11.59L6.24609 14.03C5.51609 15.37 6.47609 17 7.99609 17H19.9961V15H7.99609L9.09609 13H16.5461ZM7.15609 6H19.3061L16.5461 11H9.52609L7.15609 6ZM7.99609 18C6.89609 18 6.00609 18.9 6.00609 20C6.00609 21.1 6.89609 22 7.99609 22C9.09609 22 9.99609 21.1 9.99609 20C9.99609 18.9 9.09609 18 7.99609 18ZM17.9961 18C16.8961 18 16.0061 18.9 16.0061 20C16.0061 21.1 16.8961 22 17.9961 22C19.0961 22 19.9961 21.1 19.9961 20C19.9961 18.9 19.0961 18 17.9961 18Z" />
        </svg>
        <span className="hidden md:block text-[12px] text-[#8b96a5]">
          MyCart
        </span>
        {totalCart !== 0 && (
          <span
            className="absolute top-0 right-0 text-white bg-[#3d8bfd] rounded-full w-[17px] h-[17px] flex items-center justify-center"
            id="addBtnCart">
            <small className="text-white text-[10px]">{totalCart}</small>
          </span>
        )}
      </button>
      <CartList isOpen={openCart} />
    </>
  );
};

export default CartBtn;
