import { Component } from "react";
import Slider from "react-slick";

type PropsArrow = {
  className?: string;
  style?: any;
  onClick?: any;
};
export function SampleNextArrow(props: PropsArrow) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "skyblue",
        borderRadius: "100%",
      }}
      onClick={onClick}
    />
  );
}

export function SamplePrevArrow(props: PropsArrow) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "skyblue",
        borderRadius: "100%",
      }}
      onClick={onClick}
    />
  );
}

interface SlideProps {
  slide: string[];
}

export default class SimpleSlider extends Component<SlideProps> {
  render() {
    const { slide } = this.props;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      customPaging: () => (
        <div
          style={{
            marginTop: "-80px",
            width: "10px",
            height: "10px",
            backgroundColor: "gray",
            borderRadius: "100%",
          }}>
          {}
        </div>
      ),
    };

    return (
      <div>
        <Slider {...settings}>
          {slide.map((item: string, index: number) => {
            return (
              <div className="" key={`carousel-${index}`}>
                <img src={item} className="mx-auto" />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
