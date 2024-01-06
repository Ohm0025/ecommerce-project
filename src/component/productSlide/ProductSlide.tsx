import { useEffect, useState } from "react";

type Props = {
  slides: string[];
};

const ProductSlide = ({ slides = [] }: Props) => {
  const [current, setCurrent] = useState(0);
  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };
  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  useEffect(() => {
    console.log(current);
    console.log(slides);
  }, [current]);

  return (
    <div className="overflow-hidden h-full relative">
      <div
        className={`flex transition ease-out h-full items-center`}
        style={{
          transform: `translateX(-${current * 100}%)`,
          transitionDuration: "1000ms",
        }}>
        {slides.map((s) => {
          return (
            <div
              className={`p-4 h-full flex justify-center items-center min-w-[100%]`}>
              <img src={s} className="h-full w-auto mx-auto" />
            </div>
          );
        })}
      </div>

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
      </div>
    </div>
  );
};

export default ProductSlide;
