import { Product, ProductList } from "./zodSchemas";

export const getProducts = async () => {
  try {
    const response = await fetch(
      new Request(`${process.env.NEXT_URL}/api/products`),
      {
        method: "GET",
      }
    );
    const products = await response.json();

    const validatedProducts = ProductList.parse(products.data);
    return validatedProducts;
  } catch (error) {
    console.error("Error fetching products", error);
  }
};

export const getProduct = async (id: string) => {
  try {
    const response = await fetch(
      new Request(`${process.env.NEXT_URL}/api/product/${id}`),
      {
        method: "GET",
      }
    );
    const product = await response.json();
    const validatedProduct = Product.parse(product);
    return validatedProduct;
  } catch (error) {
    console.error("Error fetching product", error);
  }
};
