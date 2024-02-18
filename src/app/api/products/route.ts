import { productsStatic } from "@/static";
import { NextResponse } from "next/server";

const getProducts = async () => {
  const products = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: productsStatic });
    }),
      1000;
  });
  return products;
};

export const GET = async () => {
  const products = await getProducts();
  return NextResponse.json(products);
};
