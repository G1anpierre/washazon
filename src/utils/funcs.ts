import { CartType } from "@/types";

export const getCartQuantity = (state: CartType) => {
  return state.products.reduce((acc, product) => {
    return acc + product.quantity;
  }, 0);
};
