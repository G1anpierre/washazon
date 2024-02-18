import { productsStatic } from "@/static";
import { NextResponse } from "next/server";

const getProductById = async (id: number) => {
  const product = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productsStatic.find((product) => product.id === id));
    }, 1000);
  });
  return product;
};

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const product = await getProductById(Number(params.id));
  return NextResponse.json(product);
};
