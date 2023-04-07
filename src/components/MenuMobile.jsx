import React from 'react';
import Link from 'next/link';

import styles from '@styles/MobileMenu.module.scss';

const MenuMobile = () => {
  return (
    <div className={styles.MobileMenu}>
      <ul>
        <li>
          <Link href="/">CATEGORIES</Link>
        </li>
        <li>
          <Link href="/">All</Link>
        </li>
        <li>
          <Link href="/">Clothes</Link>
        </li>
        <li>
          <Link href="/">Electronics</Link>
        </li>
        <li>
          <Link href="/">Furnitures</Link>
        </li>
        <li>
          <Link href="/">Toys</Link>
        </li>
        <li>
          <Link href="/">Others</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/">My orders</Link>
        </li>
        <li>
          <Link href="/my-account">My account</Link>
        </li>
      </ul>
      <div>
        <p className="email">example@gmail.com</p>
        <p className="sign-out">Sign out</p>
      </div>
    </div>
  );
};

export default MenuMobile;
