import React from 'react';
import { Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">About Us</h3>
            <p className="text-gray-600 dark:text-gray-400">We are dedicated to providing high-quality shoes and exceptional customer service. Shop our latest collection today!</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Newsletter</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Stay up-to-date with our new arrivals and exclusive offers.</p>
            <div className="flex items-center">
              <Input type="email" placeholder="Enter your email" className="rounded-l-md" />
              <Button className="rounded-r-md hover:bg-primary/90 transition-all duration-300">Subscribe</Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 dark:text-gray-500">© {new Date().getFullYear()} Shoe Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
