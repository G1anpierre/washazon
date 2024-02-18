import React from "react";
import styles from "./Product.module.css";
import Image from "next/image";
import { ProductType } from "@/types";

type ProductProps = {
  product: ProductType;
};

export const Product = ({ product }: ProductProps) => {
  return (
    <li key={product.id} className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className={styles.image}
        />
      </div>
      <h2>{product.name}</h2>
      <p>
        {product.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
    </li>
  );
};
