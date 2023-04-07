import React from "react";
import Image from "next/image";

import "@styles/Order.scss";

import flechita from "@icons/flechita.svg";

const Order = () => {
  return (
    <div className="Order">
        <p>
            <span>04.25.21</span>
            <span>3 articles</span>
        </p>
        <p>
            $560.00
            <Image src={flechita} alt="" />
        </p>
    </div>
  );
};

export default Order;