import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  styleEdit: object;
};

const OrderButton = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-2" style={props.styleEdit}>
      <button
        className="px-3 py-1 bg-[#3d8bfd] text-white rounded-lg flex-grow"
        onClick={() => navigate("/checkout")}>
        ซื้อสินค้าทันที
      </button>
      <button className="p-2 bg-[white] border text-[20px] border-gray-200 text-[#3d8bfd] text-center rounded-lg flex-shrink">
        <i className="fa-solid fa-cart-plus"></i>
      </button>
    </div>
  );
};

export default OrderButton;
