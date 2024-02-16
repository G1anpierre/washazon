export const getProducts = async () => {
    const response = await fetch(new Request(`${process.env.NEXT_URL}/api/products`),{
      method: 'GET',
    });
    const products = await response.json();
    return products;
}

export const getProduct = async (id: string) => {
    const response = await fetch(new Request(`${process.env.NEXT_URL}/api/product/${id}`),{
      method: 'GET',
    });
    const product = await response.json();
    return product;
}