"use client";
import React, { ReactNode } from "react";
import styles from "./Button.module.css";

import { CartType } from "@/types";
import { Loader } from "../Icons/loader/Loader";
import { useTransition } from "react";
import { createStore, useCart } from "@/context/CartContext";

export const Button = ({
  children,
  productId,
  serverAction,
}: {
  children: ReactNode;
  productId: string;
  serverAction: (id: string) => Promise<CartType>;
}) => {
  const setCart = useCart()((store) => store.setCart);
  const [isMutating, startTransition] = useTransition();

  return (
    <button
      className={styles.button}
      onClick={() => {
        startTransition(async () => {
          const cart = await serverAction(productId);
          setCart(cart);
        });
      }}
    >
      <div className={styles.buttonContent}>
        {isMutating ? <Loader /> : null} {children}
      </div>
    </button>
  );
};
