"use client";

import React, { useMemo } from "react";
import { Cart } from "../Icons/Cart";
import { useCart } from "@/context/CartContext";
import { getCartQuantity } from "@/utils/funcs";

export const CartArea = () => {
  const { state } = useCart();

  const quantity = useMemo(() => getCartQuantity(state), [state]);

  return (
    <>
      <div>Cart: {quantity}</div>
      <Cart height={20} width={20} />
    </>
  );
};
