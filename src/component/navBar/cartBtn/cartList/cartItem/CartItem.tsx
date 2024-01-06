import { InputProductType } from "../../../../../utils/clickCartSmall";
import { formatProductTitle } from "../../../../../utils/formatText";
import { discountCal } from "../../../../../utils/priceCal";
import { useNavigate } from "react-router-dom";
import { useUserCart } from "../../../../../store/currentCart";

type Props = {
  item: InputProductType;
};

const CartItem = ({ item }: Props) => {
  const { removeUserCart } = useUserCart();
  const navigate = useNavigate();
  return (
    <li className="grid grid-cols-8 items-center bg-[#0d79fd] py-1 text-sm text-white">
      <div className="rounded-full w-[50px] h-[50px] bg-white flex justify-center items-center overflow-hidden col-span-2 mx-auto">
        <img src={item.productImg} alt="sampleImg" />
      </div>
      <div className="col-span-4">
        <div>{formatProductTitle(item.productTitle, 15)}</div>
        <div className="flex">quantity : {item.productQTY}</div>
        <div>
          $
          {discountCal(item.productPrice, item.productDiscount) *
            item.productQTY}
        </div>
      </div>
      <div className="w-[50px] flex justify-around items-center gap-2 col-span-2">
        <button onClick={() => navigate("/products/detail/" + item.productId)}>
          <i className="fa-solid fa-gear"></i>
        </button>
        <button onClick={() => removeUserCart(item.productId)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default CartItem;
