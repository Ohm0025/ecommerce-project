import React, { useState } from "react";

type Props = {
  btnWidth?: string;
  btnSize?: string;
};

const ProductCounter = (props: Props) => {
  const [productCount, setProductCount] = useState(1);
  return (
    <div className="flex rounded-[0.3rem] overflow-hidden">
      <button
        className="bg-[#3d8bfd] text-white flex justify-center items-center text-sm"
        style={{
          width: props.btnSize,
          height: props.btnSize,
        }}
        onClick={() => setProductCount((prev) => prev + 1)}>
        +
      </button>
      <span
        className="flex items-center justify-center border border-t-1 border-b-1 text-sm"
        style={{
          width: props.btnSize,
          height: props.btnSize,
        }}>
        {productCount}
      </span>
      <button
        className="bg-[#3d8bfd] text-white flex justify-center items-center text-sm"
        style={{
          width: props.btnSize,
          height: props.btnSize,
        }}
        onClick={() => setProductCount((prev) => (prev !== 1 ? prev - 1 : 1))}>
        -
      </button>
    </div>
  );
};

export default ProductCounter;
