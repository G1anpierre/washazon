import { getProducts } from "@/utils/api";
import React from "react";
import styles from "./GalleryPage.module.css";
import { Products } from "@/components/products/Products";

const GalleryPage = async () => {
  return (
    <section className={styles.container}>
      <Products fetchInfo={getProducts} />
    </section>
  );
};

export default GalleryPage;
