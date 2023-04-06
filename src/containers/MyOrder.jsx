import React, { useContext } from 'react';
import Image from 'next/image';

import AppContext from '@context/AppContext';

import OrderItem from '@components/OrderItem';

import flechita from '@icons/flechita.svg';

import styles from '@styles/MyOrder.module.scss';

const MyOrder = ({ setToggleOrder }) => {
  const {
    state: { cart },
  } = useContext(AppContext);

  const totalPrice = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;

    const newPrice = cart.reduce(reducer, 0);

    return newPrice;
  };

  const handleToggle = () => {
    setToggleOrder(false);
  };

  return (
    <aside className={styles.MyOrder}>
      <div className={styles['title-container']}>
        <Image src={flechita} alt="arrow" className={styles.arrow} onClick={handleToggle} />
        <p className={styles.title}>Shopping cart</p>
      </div>

      <div className={styles['my-order-content']}>
        {cart.map((product, index) => {
          return <OrderItem key={index} product={product} />;
        })}
      </div>
      <div className={styles.order}>
        <p>
          <span>Total</span>
        </p>
        <p>${totalPrice()}</p>
      </div>
      <button className={styles['primary-button']}>Checkout</button>
    </aside>
  );
};

export default MyOrder;
