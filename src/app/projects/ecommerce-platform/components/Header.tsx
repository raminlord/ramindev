'use client';

import { motion } from 'framer-motion';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export default function Header({ cartItemsCount, onCartClick }: HeaderProps) {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
            <span className="text-xl font-bold text-gray-800">ShopEase</span>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Products', 'Categories', 'Deals', 'About'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Cart Button */}
          <motion.button
            onClick={onCartClick}
            className="relative p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21" />
            </svg>
            {cartItemsCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
              >
                {cartItemsCount}
              </motion.span>
            )}
          </motion.button>
        </div>
      </div>
    </header>
  );
}