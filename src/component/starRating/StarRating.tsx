import React from "react";

type Props = {
  rate: number;
  full?: number | 5;
};

const StarRating = ({ rate, full = 5 }: Props) => {
  //   console.log("full ", full);
  const arr = new Array(full);
  let size = (100 * rate) / full + "%";
  let fontSize = 25;

  return (
    <div className="text-center h-[20px] w-[50%] relative">
      {arr.fill("i").map(() => {
        return (
          <i
            className={`fa-regular fa-star text-[#000000] text-[135%] overflow-hidden z-10 relative`}></i>
        );
      })}
      <div
        className="h-[20px] bg-[yellow] absolute top-0"
        style={{ width: size }}></div>
    </div>
  );
};

export default StarRating;
