import React from "react";
import styles from "./ProductPage.module.css";
import { getProduct } from "@/utils/api";
import Image from "next/image";
import { Button } from "@/components/button/Button";
import { Accordion } from "@/components/accordion/Accordion";
import { addToCartAction } from "@/actions/cart-actions";
import { SeeSpecifications } from "@/components/seeSpecifications/SeeSpecifications";

type ProductPageProps = {
  params: {
    id: string;
  };
};

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.id);
  if (!product) return;

  return (
    <>
      <div className={styles.container}>
        <section className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className={styles.image}
            />
          </div>
        </section>
        <section className={styles.informationSection}>
          <h2>{product.brand}</h2>
          <h3>{product.name}</h3>

          <SeeSpecifications />
          <p>
            {product.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          <Button productId={`${product.id}`} serverAction={addToCartAction}>
            Add to Cart
          </Button>
        </section>
      </div>
      <Accordion
        description={product.description}
        specifications={product.specs}
      />
    </>
  );
};

export default ProductPage;
