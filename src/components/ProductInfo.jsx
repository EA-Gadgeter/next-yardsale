import React from "react";
import Image from "next/image";

import addToCartIcon from "@icons/bt_add_to_cart.svg";

import "@styles/ProductInfo.scss";

const ProductInfo = () => {
  return (
    <React.Fragment>
        <Image src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
        <div className="ProductInfo">
            <p>$35,00</p>
            <p>Bike</p>
            <p>
                With its funcional and practical design, this bike also fullfills a decorative function,
                adding personality an a retro-vintage aesthetic to your house
            </p>
            <button className="primary-button add-to-cart-button">
                <Image src={addToCartIcon} alt="add to cart" />
                Add to cart
            </button>
        </div>
    </React.Fragment>
  );
};

export default ProductInfo;