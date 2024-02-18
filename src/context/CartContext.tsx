"use client";

import React, { createContext, useContext, useState } from "react";
import { type CartType } from "@/types";

type CartContextType = {
  state: CartType;
  setState: React.Dispatch<React.SetStateAction<CartType>>;
};

const CartContext = createContext<CartContextType>({
  state: { products: [] },
  setState: () => {},
});

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({
  children,
  cart,
}: {
  children: React.ReactNode;
  cart: CartType;
}) => {
  const [state, setState] = useState<CartType>(cart);

  return (
    <CartContext.Provider value={{ state, setState }}>
      {children}
    </CartContext.Provider>
  );
};
