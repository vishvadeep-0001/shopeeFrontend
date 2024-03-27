import React from "react";
import ProductDetail from "../features/product/components/ProductDetails";
import Navbar from "../features/navbar/Navbar";

const ProductDetailPage = () => {
  return (
    <Navbar>
      <ProductDetail></ProductDetail>
    </Navbar>
  );
};

export default ProductDetailPage;
