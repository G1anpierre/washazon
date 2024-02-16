import { productsStatic } from "@/static";
import { NextResponse } from "next/server";

const getData = async () => {
    const products = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({data: productsStatic});
        }), 1000})
    return products;
}

export const GET = async () => {
    const products = await getData();
    return NextResponse.json(products);
}