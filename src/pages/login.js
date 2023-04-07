import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@logos/logo_yard_sale.svg';

import styles from '@styles/Login.module.scss';

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(form.current);

    // eslint-disable-next-line no-unused-vars
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    };
  };

  return (
    <div className={styles.Login}>
      <div className={styles['login-container']}>
        <Image src={logo} alt="logo" className={styles.logo} />

        <form className={styles.form} ref={form}>
          <label className={styles.label} htmlFor="loginEmail">
            Email Address
          </label>
          <input type="email" name="email" placeholder="example@gmail.com" className={`${styles.input} ${styles['input-email']}`} />
          <label className={styles.label} htmlFor="loginPassword">
            Password
          </label>
          <input type="password" name="password" placeholder="*********" className={styles.input} />
          <button className={styles['login-button']} onClick={handleSubmit}>
            Log in
          </button>
          <Link href="/">Forgot my password</Link>
        </form>

        <button className={styles['primary-button']}>Sign up</button>
      </div>
    </div>
  );
};

export default Login;
