import ProductCounter from "../productCounter/ProductCounter";
import { InputProductType } from "../../utils/clickCartSmall";
import { discountCal } from "../../utils/priceCal";
import { useUserCart } from "../../store/currentCart";

type Props = {
  item: InputProductType;
};

const ListCartItem = ({ item }: Props) => {
  const { removeUserCart } = useUserCart();
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-3 border-b-[1px] border-gray-200 py-3`}>
      <div className="flex gap-3 col-span-2 relative">
        <div className="h-[100px] border border-gray-200 rounded-md">
          <img src={item.productImg} className="h-full w-auto" alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text">{item.productTitle}</div>
          <div className="text-gray-400 flex flex-col">
            <span>brand:{item.productBrand}</span>
            <span>rating:{item.productRate}/5</span>
          </div>

          <div className="absolute sm:static right-[0.2rem]">
            <button
              className="text-sm text-[red] px-2 py-1 border border-gray-200 rounded-md"
              onClick={() => removeUserCart(item.productId)}>
              <span className="hidden sm:inline-block">Remove</span>
              <span className="inline-block sm:hidden">
                <i className="fa-solid fa-trash"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse items-center justify-between mt-3 sm:mt-0 sm:flex-col sm:items-end sm:justify-center sm:pr-3 gap-3">
        <div className="text">
          $
          {discountCal(item.productPrice, item.productDiscount) *
            item.productQTY}
        </div>
        <ProductCounter productSelect={item} />
      </div>
    </div>
  );
};

export default ListCartItem;
