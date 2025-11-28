import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}        
        <Link to="/" className="text-2xl font-semibold text-gray-800">ShoeStore</Link>

        {/* Search Bar (Hidden on small screens) */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-1">
          <Search className="h-5 w-5 text-gray-500 mr-2" />
          <input type="text" placeholder="Search..." className="bg-transparent outline-none w-64" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-4">
          <Link to="/shop" className="text-gray-700 hover:text-gray-900">Shop</Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-3">
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-gray-900" />
            <span className="absolute top-[-6px] right-[-6px] bg-red-500 text-white rounded-full text-xs px-1">3</span>
          </Link>
          <Link to="/profile">
            <User className="h-6 w-6 text-gray-700 hover:text-gray-900" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
