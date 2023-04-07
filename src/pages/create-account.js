import React from 'react';

import styles from '@styles/CreateAccount.module.scss';

const CreateAccount = () => {
  return (
    <div className={styles.CreateAccount}>
      <div className={styles['CreateAccount-container']}>
        <h1 className={styles.title}>My account</h1>
        <form className={styles.form}>
          <div>
            <label className={styles.label} htmlFor="nameCreate">
              Name
            </label>
            <input type="text" id="name" placeholder="Emiliano Acevedo" className={`${styles.input} ${styles['input-password']}`} />
            <label className={styles.label} htmlFor="emailCreate">
              Email
            </label>
            <input type="text" id="email" placeholder="ejemplo@gmail.com" className={`${styles.input} ${styles['input-password']}`} />
            <label className={styles.label} htmlFor="passwordCreate">
              Password
            </label>
            <input type="password" id="password" placeholder="*********" className={`${styles.input} ${styles['input-password']}`} />
          </div>
          <input type="submit" value="Create" className={`${styles['primary-button']} ${styles['login-button']}`} />
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
