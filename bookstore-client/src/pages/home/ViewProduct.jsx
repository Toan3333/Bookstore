import React from "react";
import Title from "../../components/Title/Title";
import ProductItem from "../../components/Products/ProductItem";

const ViewProduct = () => {
  return (
    <div>
      <div className="container">
        <Title>Nhiều lượt xem</Title>
        <div className="flex items-center justify-between gap-8 py-10 max-lg:flex-col">
          <div className="w-3/5 max-lg:w-full">
            <img
              src="./images/view.png"
              className="w-full h-[580px] object-cover rounded-2xl"
              alt=""
            />
          </div>
          <div className="w-2/5 max-lg:w-full">
            <div className="grid grid-rows-1 gap-2 max-lg:grid-cols-3">
              <ProductItem className="horizontal" />
              <ProductItem className="horizontal" />
              <ProductItem className="horizontal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
