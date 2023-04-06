import React from "react";

import ProductInfo from "../components/ProductInfo";

import "@styles/ProductDetail.scss";

import iconClose from "@icons/icon_close.png";

const ProductDetail = () => {
  return (
    <aside className="ProductDetail">
        <div className="product-detailed-close">
            <img src={iconClose} alt="close" />
            <ProductInfo />
        </div>
    </aside>
  );
};

export default ProductDetail;