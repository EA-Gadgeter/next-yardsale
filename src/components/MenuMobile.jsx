import React from 'react';

import styles from '@styles/MobileMenu.module.scss';

const MenuMobile = () => {
  return (
    <div className={styles.MobileMenu}>
      <ul>
        <li>
          <a href="#">CATEGORIES</a>
        </li>
        <li>
          <a href="#">All</a>
        </li>
        <li>
          <a href="#">Clothes</a>
        </li>
        <li>
          <a href="#">Electronics</a>
        </li>
        <li>
          <a href="#">Furnitures</a>
        </li>
        <li>
          <a href="#">Toys</a>
        </li>
        <li>
          <a href="#">Others</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">My orders</a>
        </li>
        <li>
          <a href="#">My account</a>
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
