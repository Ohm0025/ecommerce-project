import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useLinkRef } from "../../store/linkRef";
import { SampleNextArrow, SamplePrevArrow } from "../carousel/CarouselNew";

export default class CarouzelCat extends Component {
  render() {
    const { listCat, listImg, setCategory } = this.props;
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      initialSlide: 0,
      rows: 2,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          {listCat.map((item, index) => {
            return (
              <button
                className="h-[170px] w-[150px] border-[0.5px] border-l-0 border-gray-200 hover:bg-[#8CB7F5] grid grid-rows-[2fr_1fr] items-center justify-center relative py-1"
                onClick={() => setCategory(item)}>
                <img
                  src={
                    listImg.find((item2) => item2.productTitle === item)
                      ?.productImg
                  }
                  alt=""
                  className="w-full h-[120px] block"
                />
                <div className="text-center text-sm text-[black] relative bottom-0 p-2">
                  {item}
                </div>
              </button>
            );
          })}
        </Slider>
      </div>
    );
  }
}
