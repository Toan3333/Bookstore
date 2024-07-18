import React from "react";
import Title from "../../components/title/Title";
import ProductList from "../../components/products/ProductList";

const NewProduct = () => {
  return (
    <div className="py-10 max-lg:py-5">
      <div className="container">
        <Title>Sản phẩm mới </Title>
        <ProductList></ProductList>
      </div>
    </div>
  );
};

export default NewProduct;
