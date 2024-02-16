import React from 'react'
import styles from './ProductPage.module.css'
import { getProduct } from '@/utils/api'
import Image from 'next/image';
import { Button } from '@/components/button/Button';


type ProductPageProps = {
    params: {
        id: string
    }
}

const ProductPage = async ({params}: ProductPageProps) => {
    const product = await getProduct(params.id)
  return (
    <div className={styles.container}>
        <section className={styles.imageSection}>
            <div className={styles.imageContainer}>
                <Image src={product.image} alt={product.name} width={300} height={300} className={styles.image} />
            </div>
        </section>
        <section className={styles.informationSection}>
            <h2>{product.brand}</h2>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <Button>Add to Cart</Button>
        </section>
    </div>
  )
}

export default ProductPage