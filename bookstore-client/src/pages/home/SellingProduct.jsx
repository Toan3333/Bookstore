import React from "react";
import Title from "../../components/Title/Title";
import ProductList from "../../components/product/ProductList";

const SellingProduct = () => {
  return (
    <div className="py-10 md:py-5">
      <div className="container">
        <Title>Bán chạy</Title>
        <div className="flex justify-between gap-10 py-10 max-lg:flex-col max-lg:py-5">
          <div className="w-full max-lg:w-full">
            <ProductList customThreeItem={true}></ProductList>
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
