import z from "zod";

export const Spect = z.object({
  key: z.string(),
  name: z.string(),
  value: z.string(),
  isTopSpec: z.boolean(),
  unit: z.string().optional(),
});

export const Product = z.object({
  id: z.number(),
  name: z.string(),
  brand: z.string(),
  capacity: z.string(),
  price: z.number(),
  image: z.string(),
  description: z.string(),
  specs: z.array(Spect),
});

export const ProductList = z.array(Product);

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
