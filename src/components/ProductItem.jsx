import React, { useContext, useState, useEffect } from 'react';
import Image from 'next/image';

import AppContext from '@context/AppContext';

import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';

import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const [added, setAdded] = useState(false);
  const {
    addToCart,
    removeFromCart,
    state: { cart },
  } = useContext(AppContext);

  useEffect(() => {
    const founded = cart.find((cartItem) => cartItem.id === product.id);
    setAdded(founded ? true : false);
  }, [cart]);

  const handleClick = (newProduct) => {
    if (added) {
      removeFromCart(newProduct.id);
    } else {
      addToCart(newProduct);
    }
  };

  return (
    <div className={styles.ProductItem}>
      <img src={product.images[0]} alt={product.title} />
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <Image src={added ? addedToCartImage : addToCartImage} alt={added ? 'added to cart' : 'add to cart'} />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
