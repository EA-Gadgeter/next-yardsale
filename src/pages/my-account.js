import React from 'react';

import styles from '@styles/MyAccount.module.scss';

const MyAccount = () => {
  return (
    <div className={styles.MyAccount}>
      <div className={styles['form-container']}>
        <h1 className={styles.title}>My account</h1>
        <form className={styles.form}>
          <div>
            <p className={styles.label}>Name</p>
            <p className={styles.value}>Walter Gonzales</p>

            <p className={styles.label}>Email address</p>
            <p className={styles.value}>emiacevedoposos@gmail.com</p>

            <p className={styles.label}>Password</p>
            <p className={styles.value}>*********</p>
          </div>
          <input type="submit" value="Edit" className={styles['secondary-button']} />
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
