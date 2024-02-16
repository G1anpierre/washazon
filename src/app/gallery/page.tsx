import { getProducts } from '@/utils/api';
import React from 'react'
import styles from './GalleryPage.module.css'
import { Product } from '@/components/product/Product';


const GalleryPage = async () => {
    const products = await getProducts()

  return (

    <div className={styles.container}>{
        <ul className={styles.layout}>
            {products.data?.map((product: any) => (
                <Product key={product.id} product={product} />
            )
            )}
        </ul>        
    }</div>
  )
}

export default GalleryPage