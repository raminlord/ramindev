'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import FilterSidebar from './components/FilterSidebar';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import SearchBar from './components/SearchBar';
import Checkout from './components/Checkout';
import { Product, CartItem } from './types';
import { motion, AnimatePresence } from 'framer-motion';

// داده‌های نمونه محصولات
const sampleProducts: Product[] = [
  {
    id: 1,
    name: 'iPhone 14 Pro',
    price: 999,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop',
    description: 'Latest iPhone with advanced camera system',
    rating: 4.8,
    inStock: true
  },
  {
    id: 2,
    name: 'MacBook Air M2',
    price: 1199,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&h=500&fit=crop',
    description: 'Powerful and lightweight laptop',
    rating: 4.7,
    inStock: true
  },
  {
    id: 3,
    name: 'Nike Air Max',
    price: 120,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    description: 'Comfortable running shoes',
    rating: 4.5,
    inStock: true
  },
  {
    id: 4,
    name: 'Sony Headphones',
    price: 299,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    description: 'Noise cancelling wireless headphones',
    rating: 4.6,
    inStock: false
  },
  {
    id: 5,
    name: 'Designer Watch',
    price: 450,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    description: 'Luxury automatic watch',
    rating: 4.9,
    inStock: true
  },
  {
    id: 6,
    name: 'Gaming Keyboard',
    price: 150,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop',
    description: 'Mechanical RGB gaming keyboard',
    rating: 4.4,
    inStock: true
  },
  {
    id: 7,
    name: 'Summer Dress',
    price: 65,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop',
    description: 'Elegant summer floral dress',
    rating: 4.3,
    inStock: true
  },
  {
    id: 8,
    name: 'Smart Watch',
    price: 350,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1579586337278-3f436c8e939d?w=500&h=500&fit=crop',
    description: 'Fitness and health tracking smartwatch',
    rating: 4.5,
    inStock: true
  },
  {
    id: 9,
    name: 'Leather Jacket',
    price: 280,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop',
    description: 'Genuine leather biker jacket',
    rating: 4.7,
    inStock: true
  },
  {
    id: 10,
    name: 'Camera Lens',
    price: 800,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&h=500&fit=crop',
    description: 'Professional photography lens',
    rating: 4.8,
    inStock: true
  },
  {
    id: 11,
    name: 'Sunglasses',
    price: 180,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop',
    description: 'Polarized UV protection sunglasses',
    rating: 4.4,
    inStock: true
  },
  {
    id: 12,
    name: 'Wireless Earbuds',
    price: 199,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1590658165737-15a047b8b5e0?w=500&h=500&fit=crop',
    description: 'True wireless stereo earbuds',
    rating: 4.6,
    inStock: true
  }
];

export default function ECommercePlatform() {
  const [products] = useState<Product[]>(sampleProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(sampleProducts);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotification, setShowNotification] = useState(true);

  // فیلتر کردن محصولات بر اساس دسته‌بندی و جستجو
  useEffect(() => {
    let filtered = products;

    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => 
        selectedCategories.includes(product.category)
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategories, searchQuery, products]);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderComplete = () => {
    setCart([]); // خالی کردن سبد خرید پس از تکمیل سفارش
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Notification Banner */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="bg-blue-600 text-white py-3 px-4"
          >
            <div className="container mx-auto flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm md:text-base">
                  <strong>Demo Project:</strong> This is a sample e-commerce platform built with Next.js and TypeScript. 
                  The actual project was customized for a fashion brand with unique features.
                </p>
              </div>
              <button
                onClick={() => setShowNotification(false)}
                className="flex-shrink-0 p-1 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="Close notification"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Header cartItemsCount={getTotalItems()} onCartClick={() => setIsCartOpen(true)} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <FilterSidebar
              selectedCategories={selectedCategories}
              onCategoryChange={setSelectedCategories}
            />
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              resultsCount={filteredProducts.length}
            />
            
            <ProductGrid
              products={filteredProducts}
              onAddToCart={addToCart}
            />
          </div>
        </div>
      </div>

      {/* Cart Sidebar */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={handleCheckout}
      />

      {/* Checkout Modal */}
      <Checkout
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cart}
        onOrderComplete={handleOrderComplete}
      />
    </div>
  );
}