import React from "react";

type Props = {};

const OrderButton = (props: Props) => {
  return (
    <div className="grid grid-cols-2 gap-x-1 w-[300px]">
      <button className="p-3 bg-gray-500">
        <i className="fa-solid fa-cart-plus mr-[3px]"></i>
        เพิ่มไปยังรถเข็น
      </button>
      <button className="p-3 bg-gray-500">ซื้อสินค้าทันที</button>
    </div>
  );
};

export default OrderButton;
