import { useUserCart } from "../../store/currentCart";
import { discountCal, taxCal } from "../../utils/priceCal";

type Props = {
  callBack?: () => void;
};

const ListCartCheckOut = ({ callBack }: Props) => {
  const { userCart } = useUserCart();

  let subTotalRaw = userCart.reduce(
    (acc, item) => (acc += item.productPrice * item.productQTY),
    0
  );
  let subTotalDiscount = userCart.reduce(
    (acc, item) =>
      (acc += discountCal(
        item.productPrice * item.productQTY,
        item.productDiscount
      )),
    0
  );

  return (
    <div className="px-3 py-4 w-full flex-shrink-[3] min-w-[220px] border bg-white border-gray-200 rounded-md h-fit shadow">
      <div className="border-b-[1px] border-gray-200 flex flex-col gap-[10px] pb-3">
        <div className="flex justify-between">
          <span className="text-gray-500">Subtotal:</span>
          <span className="text-gray-500">${subTotalRaw.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Discount:</span>
          <span className="text-[red]">
            -${(subTotalRaw - subTotalDiscount).toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Tax:</span>
          <span className="text-[#2eb517]">
            +$
            {(taxCal(subTotalDiscount, 7) - subTotalDiscount).toFixed(2)}
          </span>
        </div>
      </div>
      <div className="font-semibold text-[18px] flex justify-between pt-3">
        <span>Total:</span>
        <span>${taxCal(subTotalDiscount, 7)}</span>
      </div>
      {userCart.length > 0 && (
        <button
          onClick={() => callBack && callBack()}
          className="bg-[#2eb517] text-center py-2 rounded-md text-white mt-4 block w-full">
          Checkout
        </button>
      )}
    </div>
  );
};

export default ListCartCheckOut;
