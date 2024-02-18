import { productsStatic } from "@/static";
import { ProductList } from "@/utils/zodSchemas";

const getProductsBySearchTerm = async (searchTerm: string) => {
  const products = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        productsStatic.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }, 1000);
  });
  return products;
};

export const getSearchTerm = async (searchTerm: string) => {
  try {
    const products = await getProductsBySearchTerm(searchTerm);
    const validatedProducts = ProductList.parse(products);
    return validatedProducts;
  } catch (error) {
    console.error("Error fetching products", error);
  }
};
