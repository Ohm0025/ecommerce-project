import React from "react";
import { InputProductType } from "../../../../../utils/clickCartSmall";

type Props = {
  item: InputProductType;
};

const CartItem = ({ item }: Props) => {
  return (
    <li className="flex items-center justify-around bg-gray-400 py-1 text-sm">
      <div className="rounded-full w-[50px] h-[50px] bg-white text-center overflow-hidden">
        <img src={item.productImg} alt="sampleImg" />
      </div>
      <div>
        <div>{item.productTitle}</div>
        <div>quantity : {item.productQTY}</div>
      </div>
      <div>${item.productPrice}</div>
      <div className="w-[50px] flex justify-around items-center gap-2">
        <button>
          <i className="fa-solid fa-gear"></i>
        </button>
        <button>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default CartItem;
