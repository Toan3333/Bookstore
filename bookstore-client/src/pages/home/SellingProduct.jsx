import React from "react";
import Title from "../../components/title/Title";
import ProductItem from "../../components/products/ProductItem";

const SellingProduct = () => {
  return (
    <div className="py-10 md:py-5">
      <div className="container">
        <Title>Bán chạy</Title>
        <div className="flex justify-between gap-10 py-10 max-lg:flex-col max-lg:py-5">
          <div className="w-full max-lg:w-full">
            <div className="grid grid-cols-3 gap-1 max-lg:gap-4">
              <ProductItem></ProductItem>
              <ProductItem></ProductItem>
              <ProductItem></ProductItem>
            </div>
          </div>
          <div className="max-w-[500px] w-full max-lg:w-full">
            <img
              src="./images/banchay.png"
              alt=""
              className="w-full h-full object-contain -mr-10 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellingProduct;
