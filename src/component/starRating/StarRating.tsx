import React from "react";

type Props = {
  rate: number | undefined;
  full?: number | 5;
};

const StarRating = ({ rate, full = 5 }: Props) => {
  console.log(rate);
  const arr = new Array(full);
  let size = (100 * (rate || 0)) / full + "%";
  let fontSize = 25;

  return (
    <div className="text-center h-[20px] w-[50%] relative left-0">
      {arr.fill("i").map(() => {
        return (
          <i
            className={`fa-regular fa-star text-[#000000] text-[135%] overflow-hidden z-10 relative`}></i>
        );
      })}
      <div
        className="h-[20px] bg-[yellow] absolute top-0 left-0"
        style={{ width: size }}></div>
    </div>
  );
};

export default StarRating;
