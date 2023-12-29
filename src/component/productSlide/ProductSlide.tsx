import React, { useState } from "react";

type Props = {
  slides: string[];
};

const ProductSlide = (props: Props) => {
  const [current, setCurrent] = useState(0);
  const previousSlide = () => {
    if (current === 0) setCurrent(props.slides.length - 1);
    else setCurrent(current - 1);
  };
  const nextSlide = () => {
    if (current === props.slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  return (
    <div className="overflow-hidden h-full relative">
      <div
        className={`flex transition ease-out h-full justify-center items-center w-[${
          props.slides.length * 100
        }%]`}
        style={{
          transform: `translateX(-${current * 50}%)`,
          transitionDuration: "1000ms",
        }}>
        {props.slides.map((s) => {
          return (
            <div
              className={`p-4 h-full flex w-full justify-center items-center`}>
              <img src={s} className="h-full w-auto mx-auto" />
            </div>
          );
        })}
      </div>
      {/* <div className="absolute top-0 h-full w-full justify-between items-center flex text-white text-3xl">
        <button onClick={previousSlide}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button onClick={nextSlide}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div> */}
      <div className="absolute bottom-0 flex justify-end w-full pb-3 pr-5">
        <button
          onClick={previousSlide}
          className="text-white text-[12px] py-1 px-2 bg-gray-200 rounded-l-[50%] hover:bg-gray-400">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button
          onClick={nextSlide}
          className="text-white text-[12px] py-1 px-2 bg-gray-200 rounded-r-[50%] hover:bg-gray-400">
          <i className="fa-solid fa-chevron-right"></i>
        </button>

        {/* {props.slides.map((item, index) => {
          return (
            <button
              onClick={() => setCurrent(index)}
              className={`rounded-full w-5 h-5 border border-[white] ${
                current === index ? "bg-[gray]" : "bg-white"
              }`}></button>
          );
        })} */}
      </div>
    </div>
  );
};

export default ProductSlide;
