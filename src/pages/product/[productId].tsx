import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Carousel } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'react-toastify';
import { ShoppingCart, Star } from 'lucide-react';

// Placeholder product data type
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[]; // Array of image URLs
  sizes: number[];
  rating: number;
}

// Placeholder function to fetch product data by ID
const fetchProduct = async (productId: string): Promise<Product | null> => {
  // Replace with your actual data fetching logic (e.g., from Firebase)
  // Simulating an API call with a delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Dummy product data
  const dummyProduct: Product = {
    id: productId,
    name: `Awesome Shoe ${productId}`,
    description: 'This is a fantastic shoe for all your needs. Comfortable and stylish!',
    price: 99.99,
    images: [
      `https://images.unsplash.com/photo-1542296636-e39d541b1a01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60`,
      `https://images.unsplash.com/photo-1543163521-1bf7c6ca5195?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60`,
      `https://images.unsplash.com/photo-1515955656352-a1dfc1ef7d77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60`,
    ],
    sizes: [7, 8, 9, 10, 11],
    rating: 4.5,
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.5 }
    }
  };

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0, opacity: 1,
      transition: { duration: 0.5, delay: 0.2 }
    }
  };

  const detailsVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0, opacity: 1,
      transition: { duration: 0.5, delay: 0.2 }
    }
  };

  return dummyProduct;
};

import { Skeleton } from '@/components/ui/skeleton';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadProduct = async () => {
      setIsLoading(true);
      if (productId) {
        try {
          const data = await fetchProduct(productId);
          setProduct(data);
        } catch (error) {
          console.error("Failed to fetch product:", error);
          // Handle error appropriately, e.g., show an error message
        } finally {
          setIsLoading(false);
        }
      }
    };

    loadProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size.');
      return;
    }

    // Add to cart logic here (e.g., update local storage or context)
    toast.success(`${quantity} x ${product?.name} (Size ${selectedSize}) added to cart!`);
  };

  if (isLoading) {
    return (
      <motion.div
        className="container mx-auto p-8 flex flex-col md:flex-row gap-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="md:w-1/2">
          <Skeleton className="w-full h-[400px]" />
        </div>
        <div className="md:w-1/2 flex flex-col gap-4">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="h-24" />
          <Skeleton className="h-10 w-1/4" />
          <Skeleton className="h-10 w-1/2" />
        </div>
      </motion.div>
    );
  }

  if (!product) {
    return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center items-center h-screen">Product Not Found</motion.div>;
  }

  return (
    <motion.div
      className="container mx-auto p-8 flex flex-col md:flex-row gap-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    variants={containerVariants}
    >
      <motion.div className="md:w-1/2" variants={imageVariants}>
        <Carousel images={product.images} />
      </motion.div>
      <motion.div className="md:w-1/2 flex flex-col gap-4" variants={detailsVariants}>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <div className="flex items-center gap-2">
          <Star className="text-yellow-500" size={20} />
          <span>{product.rating}</span>
        </div>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-xl font-semibold">Price: ${product.price.toFixed(2)}</p>

        <div>
          <Label htmlFor="size">Size:</Label>
          <div className="flex gap-2 mt-2">
            {product.sizes.map((size) => (
              <Button
                key={size}
                variant={selectedSize === size ? 'default' : 'outline'}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <Label htmlFor="quantity">Quantity:</Label>
          <div className="flex items-center gap-2 mt-2">
            <Button variant="outline" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</Button>
            <Input
              type="number"
              id="quantity"
              value={quantity.toString()}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-20 text-center"
            />
            <Button variant="outline" onClick={() => setQuantity(quantity + 1)}>+</Button>
          </div>
        </div>

        <Button className="bg-primary text-white hover:bg-primary/90" onClick={handleAddToCart}>
          <ShoppingCart className="mr-2" size={16} />
          Add to Cart
        </Button>
      </div>
    </motion.div>
  );
}

export default ProductDetails;
