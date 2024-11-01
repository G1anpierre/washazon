import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { CartArea } from "../cart/CartArea";
import { getSession } from "@auth0/nextjs-auth0";

import { ProfileClient } from "../profileClient/ProfileClient";

export const Header = async () => {
  const session = await getSession();
  const user = session?.user;
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <Link href="/gallery" className={styles.link}>
            <div>Gallery</div>
          </Link>
          {user && (
            <Link href="/profile" className={styles.link}>
              <div>Profile</div>
            </Link>
          )}
        </nav>
        <Link href="/">
          <h1 className={styles.title}>Washazon</h1>
        </Link>
        <div className={styles.cart}>
          <ProfileClient />
          <CartArea />
        </div>
      </div>
    </header>
  );
};
