import { getProducts } from "@/utils/api";
import React from "react";
import styles from "./GalleryPage.module.css";
import { Product } from "@/components/product/Product";
import Link from "next/link";

const GalleryPage = async () => {
  const products = await getProducts();

  return (
    <section className={styles.container}>
      {
        <ul className={styles.layout}>
          {products?.map((product: any) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <Product product={product} />
            </Link>
          ))}
        </ul>
      }
    </section>
  );
};

export default GalleryPage;
