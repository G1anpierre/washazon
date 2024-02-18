import React from "react";
import styles from "./Header.module.css";
// import { Inter } from 'next/font/google'
import Link from "next/link";
import { Cart } from "../Icons/Cart";
import { CartArea } from "../cart/CartArea";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <Link href="/gallery" className={styles.link}>
            <div>Gallery</div>
          </Link>
        </nav>
        <Link href="/">
          <h1 className={styles.title}>Washazon</h1>
        </Link>
        <div className={styles.cart}>
          <CartArea />
        </div>
      </div>
    </header>
  );
};
