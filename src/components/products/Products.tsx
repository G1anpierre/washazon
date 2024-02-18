import { ProductListType, ProductType } from "@/types";
import Link from "next/link";
import React from "react";
import { Product } from "../product/Product";
import styles from "./Products.module.css";

type ProductProps = {
  fetchInfo: () => Promise<ProductListType | undefined>;
};

export const Products = async ({ fetchInfo }: ProductProps) => {
  const products = await fetchInfo();
  return (
    <ul className={styles.layout}>
      {products?.map((product: ProductType) => (
        <Link href={`/product/${product.id}`} key={product.id}>
          <Product product={product} />
        </Link>
      ))}
    </ul>
  );
};
