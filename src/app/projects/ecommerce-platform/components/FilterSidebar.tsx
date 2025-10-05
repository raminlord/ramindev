'use client';

import { motion } from 'framer-motion';

interface FilterSidebarProps {
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
}

const categories = [
  { id: 'electronics', name: 'Electronics', count: 8 },
  { id: 'fashion', name: 'Fashion', count: 4 },
  { id: 'home', name: 'Home & Garden', count: 0 },
  { id: 'sports', name: 'Sports', count: 0 },
  { id: 'books', name: 'Books', count: 0 },
];

export default function FilterSidebar({ selectedCategories, onCategoryChange }: FilterSidebarProps) {
  const toggleCategory = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      onCategoryChange(selectedCategories.filter(id => id !== categoryId));
    } else {
      onCategoryChange([...selectedCategories, categoryId]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-6">Filters</h2>

      {/* Categories */}
      <div className="mb-8">
        <h3 className="font-semibold text-gray-700 mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <motion.label
              key={category.id}
              className="flex items-center space-x-3 cursor-pointer group"
              whileHover={{ x: 4 }}
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.id)}
                onChange={() => toggleCategory(category.id)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-gray-600 group-hover:text-gray-800 transition-colors">
                {category.name}
              </span>
              <span className="text-sm text-gray-400">({category.count})</span>
            </motion.label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <h3 className="font-semibold text-gray-700 mb-4">Price Range</h3>
        <div className="space-y-4">
          <div>
            <input
              type="range"
              min="0"
              max="1000"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>$0</span>
              <span>$1000</span>
            </div>
          </div>
        </div>
      </div>

      {/* Availability */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-4">Availability</h3>
        <motion.label className="flex items-center space-x-3 cursor-pointer group">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
          <span className="text-gray-600 group-hover:text-gray-800 transition-colors">
            In Stock Only
          </span>
        </motion.label>
      </div>
    </motion.div>
  );
}