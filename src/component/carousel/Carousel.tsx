import SimpleSlider from "./CarouselNew";

type Props = {
  slides: string[];
};

const Carousel = (props: Props) => {
  return (
    <SimpleSlider slide={props.slides} />
    // <div className="overflow-hidden min-h-[200px] relative shadow-md sm:max-h-[420px]">
    //   <div
    //     className={`flex transition ease-out items-center`}
    //     style={{
    //       transform: `translateX(-${current * 100}%)`,
    //       transitionDuration: "1000ms",
    //     }}>
    //     {props.slides.map((s, i) => {
    //       return (
    //         <React.Fragment key={`carousel-item-${i}`}>
    //           <div className="hidden md:block xl:min-w-[1153px]">
    //             <img src={s} className="mx-auto" />
    //           </div>
    //           <img src={s} className="xl:hidden" />
    //         </React.Fragment>
    //       );
    //     })}
    //   </div>
    //   <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-3 text-3xl">
    //     <button onClick={previousSlide}>
    //       <i className="fa-solid fa-chevron-left"></i>
    //     </button>
    //     <button onClick={nextSlide}>
    //       <i className="fa-solid fa-chevron-right"></i>
    //     </button>
    //   </div>
    //   <div className="absolute bottom-0 flex justify-center w-full gap-5 pb-3">
    //     {props.slides.map((item, index) => {
    //       return (
    //         <button
    //           key={`carousel-btn-${index}`}
    //           onClick={() => setCurrent(index)}
    //           className={`rounded-full w-5 h-5 border border-[white] ${
    //             current === index ? "bg-[gray]" : "bg-white"
    //           }`}></button>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default Carousel;
