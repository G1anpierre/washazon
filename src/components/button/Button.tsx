"use client";
import React, { ReactNode } from "react";
import styles from "./Button.module.css";
import { useCart } from "@/context/CartContext";
import { CartType } from "@/types";
import { Loader } from "../Icons/loader/Loader";
import { useTransition } from "react";

export const Button = ({
  children,
  productId,
  serverAction,
}: {
  children: ReactNode;
  productId: string;
  serverAction: (id: string) => Promise<CartType>;
}) => {
  const { setState } = useCart();
  const [isMutating, startTransition] = useTransition();
  return (
    <button
      className={styles.button}
      onClick={() => {
        startTransition(async () => {
          const cart = await serverAction(productId);
          setState(cart);
        });
      }}
    >
      <div className={styles.buttonContent}>
        {isMutating ? <Loader /> : null} {children}
      </div>
    </button>
  );
};
