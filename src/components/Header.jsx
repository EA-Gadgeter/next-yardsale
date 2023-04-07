/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import AppContext from '@context/AppContext';

import Menu from '@components/Menu';
import MenuMobile from '@components/MenuMobile';

import MyOrder from '@containers/MyOrder';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

import styles from '@styles/Header.module.scss';

const Header = () => {
  const [toggleMenuMobile, setToggleMenuMobile] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleOrder, setToggleOrder] = useState(false);

  const {
    state: { cart },
  } = useContext(AppContext);

  const handleToggleMenuMobile = () => {
    setToggleMenuMobile(!toggleMenuMobile);
    setToggleOrder(false);
  };

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
    setToggleOrder(false);
  };

  const handleToggleOrder = () => {
    setToggleOrder(!toggleOrder);
    setToggleMenu(false);
    setToggleMenuMobile(false);
  };

  return (
    <>
      <nav className={styles.Nav}>
        {/*Imagen del menu, principal mente para mobile*/}
        <Image src={menu} alt="menu-icon" className={styles.menu} onClick={handleToggleMenuMobile} />

        <div className={styles['nav-bar-left']}>
          <Link href="/">
            <Image width={150} src={logo} alt="logo" className={styles.logo} />
          </Link>
          {/*Dividimos la barra en 2 partes, la deºrecha y la izquierda
                usamos una lista y a ya que recordemos que nos llevaran a
                otras paginas*/}
          <ul>
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
              <Link href="/">Furniture</Link>
            </li>
            <li>
              <Link href="/">Toys</Link>
            </li>
            <li>
              <Link href="/">Others</Link>
            </li>
          </ul>
        </div>

        {/*No es necesario ocupar <a></a> ya que no son cosas que nos redijiran*/}
        <div className={styles['nav-bar-right']}>
          <ul>
            <li className={styles['nav-bar-email']} onClick={handleToggleMenu}>
              example@gmail.com
            </li>
            <li className={styles['nav-shopping-cart']} onClick={handleToggleOrder}>
              <Image src={shoppingCart} alt="shopping cart" />
              {cart.length > 0 && <div>{cart.length}</div>}
            </li>
          </ul>
        </div>
        {toggleMenu && <Menu />}
        {toggleOrder && <MyOrder setToggleOrder={setToggleOrder} />}
      </nav>
      {toggleMenuMobile && <MenuMobile />}
    </>
  );
};

export default Header;
