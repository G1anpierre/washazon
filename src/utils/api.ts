export const getProducts = async () => {
    const response = await fetch(new Request(`${process.env.NEXT_URL}/api/products`),{
      method: 'GET',
    });
    const products = await response.json();
    return products;
}