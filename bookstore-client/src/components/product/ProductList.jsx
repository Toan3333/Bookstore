import React, { useRef } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import ProductItem from "./ProductItem";

const ProductList = ({ useSlider, customItem, customThreeItem, customColItem }) => {
  const sliderRef = useRef(null);

  const SampleNextArrow = ({ onClick }) => (
    <div
      className="custom-arrow cursor-pointer hover:bg-blue"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "white",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        zIndex: "1",
        border: "2px solid #ccc",
        position: "absolute",
        top: "50%",
        right: "-30px",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}>
      <FaAngleRight style={{ color: "black", fontSize: "20px" }} />
    </div>
  );

  const SamplePrevArrow = ({ onClick }) => (
    <div
      className="custom-arrow cursor-pointer"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "white",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        zIndex: 1,
        border: "2px solid #ccc",
        position: "absolute",
        top: "50%",
        left: "-30px",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}>
      <FaAngleLeft style={{ color: "black", fontSize: "20px" }} />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
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
    appendDots: (dots) => (
      <div>
        <ul className="custom-dots">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className="w-3 h-3 rounded-full max-md:w-2 max-md:h-2"
        style={{
          backgroundColor:
            i === sliderRef.current?.innerSlider?.state.currentSlide ? "#166534" : "#ccc",
        }}></div>
    ),
  };

  return (
    <div className="py-3 relative">
      {useSlider ? (
        <>
          <Slider ref={sliderRef} {...settings}>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </Slider>
          <div className="absolute top-1/2 transform -translate-y-1/2 -right-8 max-md:hidden">
            <SampleNextArrow onClick={() => sliderRef.current.slickNext()} />
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 -left-8 max-md:hidden">
            <SamplePrevArrow onClick={() => sliderRef.current.slickPrev()} />
          </div>
        </>
      ) : customItem ? (
        <div className="grid grid-cols-4 gap-4">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      ) : customThreeItem ? (
        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2">
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      ) : customColItem ? (
        <div className="grid grid-rows-1 gap-1 max-lg:grid-cols-3 max-lg:gap-2 max-md:grid-cols-2">
          <ProductItem className="horizontal" />
          <ProductItem className="horizontal" />
          <ProductItem className="horizontal" />
        </div>
      ) : (
        <div className="grid grid-cols-5 max-lg:grid-cols-3 max-lg:gap-2 max-md:grid-cols-2">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      )}
    </div>
  );
};

export default ProductList;
