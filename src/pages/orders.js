import React from 'react';

import styles from '@styles/Orders.module.scss';

const Orders = () => {
  return (
    <div className={styles.Orders}>
      <div className={styles['my-orders-container']}>
        <h1 className={styles.title}>My orders</h1>
        <div className={styles['my-orders-content']}></div>
      </div>
    </div>
  );
};

export default Orders;
