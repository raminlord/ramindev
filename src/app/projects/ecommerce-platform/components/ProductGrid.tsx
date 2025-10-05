'use client';

import { motion } from 'framer-motion';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export default function ProductGrid({ products, onAddToCart }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12"
      >
        <div className="text-gray-400 text-lg">No products found</div>
        <div className="text-gray-500 mt-2">Try adjusting your filters or search</div>
      </motion.div>
    );
  }

  return (
    <motion.div
      layout
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden group"
        >
          {/* Product Image */}
          <div className="relative overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            {!product.inStock && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="text-white font-semibold bg-red-500 px-3 py-1 rounded">
                  Out of Stock
                </span>
              </div>
            )}
            <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-sm">
              ${product.price}
            </div>
          </div>

          {/* Product Info */}
          <div className="p-4">
            <h3 className="font-semibold text-gray-800 mb-2 line-clamp-1">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {'★'.repeat(Math.floor(product.rating))}
                {'☆'.repeat(5 - Math.floor(product.rating))}
              </div>
              <span className="text-gray-500 text-sm ml-2">({product.rating})</span>
            </div>

            {/* Add to Cart Button */}
            <motion.button
              onClick={() => onAddToCart(product)}
              disabled={!product.inStock}
              className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                product.inStock
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              whileHover={product.inStock ? { scale: 1.02 } : {}}
              whileTap={product.inStock ? { scale: 0.98 } : {}}
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </motion.button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}