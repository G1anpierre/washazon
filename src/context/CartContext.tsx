"use client";

import React, { createContext, useContext, useState } from "react";
import { type CartType } from "@/types";
import { create } from "zustand";

type CartContextType = {
  state: CartType;
  setState: React.Dispatch<React.SetStateAction<CartType>>;
};

const CartContext = createContext<CartContextType>({
  state: { products: [] },
  setState: () => {},
});

type Store = {
  cart: CartType;
  setCart: (cart: CartType) => void;
};

export const createStore = (cart: CartType) =>
  create<Store>((set) => ({
    cart,
    setCart: (cart) => set({ cart }),
  }));

const CartContextZustand = createContext<ReturnType<typeof createStore>>(
  createStore({ products: [] })
);

export const useCart = () => {
  const store = useContext(CartContextZustand);
  if (!store) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return store;
};

export const CartProvider = ({
  children,
  cart,
}: {
  children: React.ReactNode;
  cart: CartType;
}) => {
  const store = createStore(cart);
  return (
    <CartContextZustand.Provider value={store}>
      {children}
    </CartContextZustand.Provider>
  );
};
