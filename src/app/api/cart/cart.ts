import { CartType } from "@/types";
import { getProduct } from "@/utils/api";

const cart: CartType = {
  products: [
    {
      id: 5,
      name: "QuickWash Elite",
      price: 449.99,
      image: "https://placeholder.com/300",
      quantity: 1,
    },
  ],
};

export const getCart = async () => {
  return cart;
};

export const addToCart = async (id: string) => {
  const product = await getProduct(id);
  if (!product) return cart;
  if (
    product &&
    !cart.products.find((cartProduct) => cartProduct.id === product.id)
  ) {
    cart.products.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  } else {
    const existingProduct = cart.products.find(
      (cartProduct) => cartProduct.id === product.id
    );
    if (existingProduct) {
      existingProduct.quantity += 1;
    }
  }
  return cart;
};

export const removeFromCart = (id: number) => {
  cart.products = cart.products.filter((product) => product.id !== id);
  return cart;
};

export const updateQuantity = (id: number, quantity: number) => {
  const product = cart.products.find((product) => product.id === id);
  if (product) {
    product.quantity = quantity;
  }
  return cart;
};

export const clearCart = () => {
  cart.products = [];
  return cart;
};
