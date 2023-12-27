import React, { useState } from "react";

type Props = {
  btnWidth: string;
  btnSize: string;
};

const ProductCounter = (props: Props) => {
  const [productCount, setProductCount] = useState(1);
  return (
    <div
      className="flex items-center justify-between gap-3"
      style={{ width: props.btnWidth }}>
      <label htmlFor="">จำนวนสินค้า</label>
      <div className="flex items-center">
        <button
          className="p-2 bg-gray-300"
          style={{ width: props.btnSize, height: props.btnSize }}
          onClick={() => setProductCount((prev) => prev + 1)}>
          +
        </button>
        <span
          className="flex items-center justify-center border border-t-1 border-b-1"
          style={{ width: props.btnSize, height: props.btnSize }}>
          {productCount}
        </span>
        <button
          className="p-2 bg-gray-300"
          style={{ width: props.btnSize, height: props.btnSize }}
          onClick={() =>
            setProductCount((prev) => (prev !== 1 ? prev - 1 : 1))
          }>
          -
        </button>
      </div>
    </div>
  );
};

export default ProductCounter;
