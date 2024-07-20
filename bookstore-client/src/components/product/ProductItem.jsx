import React from "react";
import { FaEye, FaShoppingBag } from "react-icons/fa";
import "../../index.css";
const ProductItem = ({ className = "" }, { item }) => {
  const isHorizontal = className.includes("horizontal");

  return (
    <div className="py-4">
      <div
        className={`p-2 cursor-pointer z-10 relative mr-3 group overflow-hidden rounded-[30px] hover:shadow-lg hover:bg-white`}>
        <div
          className={`flex ${
            isHorizontal ? "flex-row justify-start max-lg:flex-col" : "flex-col"
          } items-center gap-4 text-center cursor-pointer py-6 px-3 relative`}>
          <div className="w-10 h-10 rounded-full bg-yellow flex items-center justify-center text-white absolute left-0 top-0">
            20%
          </div>
          <img
            src="./images/product.png"
            className={`object-contain product-image ${
              isHorizontal ? "w-[100px] h-[100px]" : "w-[190px] h-[190px] cursor-pointer"
            }`}
            alt=""
          />
          <div>
            <div
              className={`md:flex-none ${
                isHorizontal
                  ? "flex-col text-left items-start"
                  : "flex-col text-center items-center"
              } gap-1`}>
              <h3 className="text-[15px] text-text leading-normal font-semibold cursor-pointer hover:text-main">
                Để Con Được Ôm (2022)
              </h3>
              <p className="text-sm font-normal text-grayText leading-normal">
                Nguyễn Trí Đoàn, Uyên Bùi
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="text-red font-semibold leading-normal">96.000 đ</div>
                <div className="line-through text-grayText">120.000 đ</div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`absolute ${
            isHorizontal
              ? " flex flex-col top-20 gap-1 right-0 transform -translate-y-1/2"
              : "bottom-32 right-0  flex flex-col items-end justify-center"
          } gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pr-2`}>
          <FaEye className="text-main w-10 h-10 text-2xl bg-white border bg-opacity-50 p-2 rounded-full transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          <FaShoppingBag className="text-main w-10 h-10 text-2xl bg-white border bg-opacity-50 p-2 rounded-full transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
