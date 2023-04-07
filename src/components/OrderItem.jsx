/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react';
import Image from 'next/image';

import AppContext from '@context/AppContext';

import iconClose from '@icons/icon_close.png';

import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  console.log(product?.images[0]);

  const handleClick = () => {
    removeFromCart(product?.id);
  };

  return (
    <div className={styles.OrderItem}>
      <figure>
        <img src={product?.images[0]} alt={product?.title} />
      </figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <Image src={iconClose} alt="quit-product" onClick={handleClick} />
    </div>
  );
};

export default OrderItem;
