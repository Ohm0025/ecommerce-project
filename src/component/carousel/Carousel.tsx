import React, { useState } from "react";

type Props = {
  slides: string[];
};

const Carousel = (props: Props) => {
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
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out`}
        style={{
          transform: `translateX(-${current * 100}%)`,
          transitionDuration: "1000ms",
        }}>
        {props.slides.map((s) => {
          return <img src={s} />;
        })}
      </div>
      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>previous</button>
        <button onClick={nextSlide}>next</button>
      </div>
      <div className="absolute bottom-0 flex justify-center w-full gap-5">
        {props.slides.map((item, index) => {
          return (
            <button
              onClick={() => setCurrent(index)}
              className={`rounded-full w-10 h-10 ${
                current === index ? "bg-black" : "bg-white"
              }`}></button>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
