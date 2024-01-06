import { useUserCart } from "../../store/currentCart";
import { InputProductType } from "../../utils/clickCartSmall";

type Props = {
  btnWidth?: string;
  btnSize?: string;
  productSelect: InputProductType;
};

const ProductCounter = (props: Props) => {
  const { raiseQty, dropQty } = useUserCart();
  return (
    <div className="flex rounded-[0.3rem] overflow-hidden h-[3rem] sm:h-[2rem]">
      <button
        className="bg-[#3d8bfd] text-white flex justify-center items-center text-sm w-[3rem] sm:w-[2rem]"
        onClick={() => raiseQty(1, props.productSelect.productId)}>
        +
      </button>
      <span className="flex items-center justify-center border border-t-1 border-b-1 sm:text-sm w-[3rem] sm:w-[2rem]">
        {props.productSelect?.productQTY}
      </span>
      <button
        className="bg-[#3d8bfd] text-white flex justify-center items-center text-sm w-[3rem] sm:w-[2rem]"
        onClick={() => dropQty(1, props.productSelect.productId)}>
        -
      </button>
    </div>
  );
};

export default ProductCounter;
