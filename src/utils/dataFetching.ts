// src/utils/dataFetching.ts

// This is a placeholder. Replace with your actual data fetching logic.
// Example using fetch:

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch('/api/products'); // Replace with your API endpoint

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Log the fetched data to check its structure
    console.log('Fetched products data:', data);

    // Basic data validation (modify as needed based on your data structure)
    if (!Array.isArray(data)) {
      throw new Error('Data is not an array');
    }

    const products: Product[] = data.map((item: any) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      imageUrl: item.imageUrl,
    }));

    // Log the formatted products data
    console.log('Formatted products data:', products);

    return products;

  } catch (error: any) {
    console.error('Error fetching products:', error);
    // Consider returning a default empty array or re-throwing the error
    return [];
  }
};

// Example using a static array (for demonstration purposes)
// export const fetchProducts = async (): Promise<Product[]> => {
//   console.log('Using static data for products');
//   const products: Product[] = [
//     { id: '1', name: 'Product 1', price: 29.99, imageUrl: 'https://images.unsplash.com/photo-1523381294911-8cdfc3fe172b?w=200&h=200&fit=crop&auto=format&dpr=2' },
//     { id: '2', name: 'Product 2', price: 39.99, imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop&auto=format&dpr=2' },
//   ];
//   return Promise.resolve(products);
// };

// Add more data fetching functions as needed
