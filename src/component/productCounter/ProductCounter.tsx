import React, { useState } from "react";

type Props = {
  btnWidth?: string;
  btnSize?: string;
};

const ProductCounter = (props: Props) => {
  const [productCount, setProductCount] = useState(1);
  return (
    <div className="flex rounded-[0.3rem] overflow-hidden h-[3rem] sm:h-[2rem]">
      <button
        className="bg-[#3d8bfd] text-white flex justify-center items-center text-sm w-[3rem] sm:w-[2rem]"
        onClick={() => setProductCount((prev) => prev + 1)}>
        +
      </button>
      <span className="flex items-center justify-center border border-t-1 border-b-1 sm:text-sm w-[3rem] sm:w-[2rem]">
        {productCount}
      </span>
      <button
        className="bg-[#3d8bfd] text-white flex justify-center items-center text-sm w-[3rem] sm:w-[2rem]"
        onClick={() => setProductCount((prev) => (prev !== 1 ? prev - 1 : 1))}>
        -
      </button>
    </div>
  );
};

export default ProductCounter;
