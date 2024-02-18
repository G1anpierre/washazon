"use server";

import { addToCart, clearCart } from "@/app/api/cart/cart";

export const clearCartAction = async () => {
  return await clearCart();
};

export const addToCartAction = async (id: string) => {
  return await addToCart(id);
};
