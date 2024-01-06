import React, { Component } from "react";
import Slider from "react-slick";
export function SampleNextArrow(props) {
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

export function SamplePrevArrow(props) {
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

export default class SimpleSlider extends Component {
  render() {
    const { slides } = this.props;

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
      customPaging: (i) => (
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
    console.log(slides);
    return (
      <div>
        <Slider {...settings}>
          {slides.map((item, index) => {
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
