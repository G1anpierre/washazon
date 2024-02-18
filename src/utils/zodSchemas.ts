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
