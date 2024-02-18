"use client";
import React, { ReactNode } from "react";
import styles from "./Button.module.css";
import { useCart } from "@/context/CartContext";
import { CartType } from "@/types";
import { Loader } from "../Icons/loader/Loader";

export const Button = ({
  children,
  productId,
  serverAction,
}: {
  children: ReactNode;
  productId: string;
  serverAction: (id: string) => Promise<CartType>;
}) => {
  const [isLoading, setisLoading] = React.useState(false);
  const { setState } = useCart();
  return (
    <button
      className={styles.button}
      onClick={async () => {
        setisLoading(true);
        const cart = await serverAction(productId);
        setisLoading(false);
        setState(cart);
      }}
    >
      <div className={styles.buttonContent}>
        {isLoading ? <Loader /> : null} {children}
      </div>
    </button>
  );
};
