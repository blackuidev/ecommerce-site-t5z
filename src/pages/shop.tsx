import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shoe } from '@/types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, SortAsc, SortDesc } from 'lucide-react';

const initialShoes: Shoe[] = [
  { id: '1', name: 'Running Shoe', imageUrl: 'https://images.unsplash.com/photo-1542296636-e398514dc671?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', price: 99.99, category: 'Running' },
  { id: '2', name: 'Basketball Shoe', imageUrl: 'https://images.unsplash.com/photo-1606086473633-7c6465549a96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', price: 129.99, category: 'Basketball' },
  { id: '3', name: 'Casual Sneaker', imageUrl: 'https://images.unsplash.com/photo-1560769629-975ef68e9d82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', price: 79.99, category: 'Casual' },
  { id: '4', name: 'Training Shoe', imageUrl: 'https://images.unsplash.com/photo-1616763355603-9798c5f6e26c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80', price: 109.99, category: 'Training' },
  { id: '5', name: 'Skate Shoe', imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', price: 89.99, category: 'Skate' },
  { id: '6', name: 'Hiking Boot', imageUrl: 'https://images.unsplash.com/photo-1562183241-b937e9857752?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', price: 149.99, category: 'Hiking' },
];


const ShopPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<number[]>([0, 200]);
  const [categories, setCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'priceAsc' | 'priceDesc' | null>(null);
  const [shoes, setShoes] = useState(initialShoes);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handlePriceChange = (values: number[]) => {
    setPriceRange(values);
  };

  const handleCategoryChange = (category: string) => () => {
    setCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const handleSortChange = (value: 'priceAsc' | 'priceDesc' | null) => {
    setSortBy(value);
  };

  const filteredShoes = shoes.filter((shoe) => {
    const searchMatch = shoe.name.toLowerCase().includes(searchTerm.toLowerCase());
    const priceMatch = shoe.price >= priceRange[0] && shoe.price <= priceRange[1];
    const categoryMatch = categories.length === 0 || categories.includes(shoe.category);
    return searchMatch && priceMatch && categoryMatch;
  });

  const sortedShoes = [...filteredShoes].sort((a, b) => {
    if (sortBy === 'priceAsc') {
      return a.price - b.price;
    } else if (sortBy === 'priceDesc') {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  const categoryOptions = ['Running', 'Basketball', 'Casual', 'Training', 'Skate', 'Hiking'];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-6 text-center">Shop Shoes</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Filters */}
          <aside className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <h2 className="text-lg font-semibold mb-3">Filters</h2>

              {/* Search */}
              <div className="mb-4">
                <Label htmlFor="search" className="block text-sm font-medium text-gray-700">Search</Label>
                <div className="relative">
                  <Input
                    type="text"
                    id="search"
                    placeholder="Search for shoes..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="pl-10"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="h-5 w-5 text-gray-500" />
                  </div>
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-4">
                <Label className="block text-sm font-medium text-gray-700">Price Range</Label>
                <Slider
                  min={0}
                  max={200}
                  step={10}
                  defaultValue={priceRange}
                  onValueChange={handlePriceChange}
                  value={priceRange}
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              {/* Categories */}             
              <div className="mb-4">
                <Label className="block text-sm font-medium text-gray-700">Categories</Label>
                <ScrollArea className="h-[200px] rounded-md border p-2">
                {categoryOptions.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={category}
                      checked={categories.includes(category)}
                      onCheckedChange={handleCategoryChange(category)}
                    />
                    <Label htmlFor={category} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {category}
                    </Label>
                  </div>
                ))}
                </ScrollArea>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="md:col-span-3">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Products</h2>
              <div className="flex items-center space-x-2">
                <Label htmlFor="sort" className="text-sm font-medium text-gray-700">Sort By:</Label>
                <Select value={sortBy || ''} onValueChange={(value) => handleSortChange(value as any)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Relevance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="priceAsc">Price: Low to High</SelectItem>
                    <SelectItem value="priceDesc">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedShoes.length > 0 ? (
                sortedShoes.map((shoe) => (
                  <motion.div key={shoe.id} variants={cardVariants} initial="hidden" animate="visible">
                    <Card className="overflow-hidden bg-white/10 backdrop-blur-md border-white/20 hover:scale-105 transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold">{shoe.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4">
                        <img src={shoe.imageUrl} alt={shoe.name} className="w-full h-48 object-cover rounded-md mb-4" />
                        <CardDescription>${shoe.price.toFixed(2)}</CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              ) : (
                <p>No shoes found matching your criteria.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;

interface Shoe {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  category: string;
}
