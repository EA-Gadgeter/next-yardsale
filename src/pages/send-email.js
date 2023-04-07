import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@logos/logo_yard_sale.svg';

import emailIcon from '@icons/email.svg';

import styles from '@styles/SendEmail.module.scss';

const SendEmail = () => {
  return (
    <div className={styles.SendEmail}>
      <div className={styles['advise-container']}>
        <Image src={logo} alt="logo" className={styles.logo} />
        <h1 className={styles.title}>Email has been sent!</h1>
        <p className={styles.subtitle}>Please check your inbox for instructions on how to reset the password</p>
        <div className={styles['email-icon']}>
          <Image src={emailIcon} alt="email-icon" />
        </div>
        <button className={`${styles['primary-button']} ${styles['login-button"']}`}>Login</button>
        <footer>
          <span>Didn&apost receive the email?</span>
          <Link href="/">Resend</Link>
        </footer>
      </div>
    </div>
  );
};

export default SendEmail;
