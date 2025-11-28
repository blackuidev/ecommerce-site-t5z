import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all duration-300">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900">ShoeStore</Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Home</Link>
          <Link to="/shop" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Shop</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Contact</Link>
        </nav>

        {/* Cart Icon */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-5 w-5 text-gray-600 hover:text-gray-900 transition-colors duration-200" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">0</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
