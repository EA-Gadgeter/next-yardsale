import React from 'react';
import OrderItem from '@components/OrderItem';

import styles from '@styles/Checkout.module.scss';

const Checkout = () => {
  return (
    <div className={styles.Checkout}>
      <div className={styles['my-order-container']}>
        <h1 className={styles.title}>My order</h1>
        <div className={styles['my-order-content']}>
          <div className={styles.order}>
            <p>
              <span>04.25.21</span>
              <span>3 articles</span>
            </p>
            <p>$560.00</p>
          </div>
        </div>
        <OrderItem />
      </div>
    </div>
  );
};

export default Checkout;
