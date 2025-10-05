'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { CartItem, ShippingAddress, PaymentMethod } from '../types';

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onOrderComplete: () => void;
}

type CheckoutStep = 'shipping' | 'payment' | 'review' | 'confirmation';

export default function Checkout({ isOpen, onClose, cartItems, onOrderComplete }: CheckoutProps) {
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('shipping');
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    zipCode: ''
  });
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>({
    type: 'credit-card'
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingCost = 9.99;
  const tax = totalPrice * 0.08;
  const finalTotal = totalPrice + shippingCost + tax;

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('review');
  };

  const processOrder = async () => {
    setIsProcessing(true);
    
    // شبیه‌سازی پردازش سفارش
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setCurrentStep('confirmation');
    onOrderComplete();
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setCurrentStep('shipping');
      setIsProcessing(false);
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
          />
          
          {/* Checkout Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-2xl font-bold text-gray-800">Checkout</h2>
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Progress Steps */}
              <div className="px-6 py-4 border-b">
                <div className="flex items-center justify-between">
                  {(['shipping', 'payment', 'review', 'confirmation'] as CheckoutStep[]).map((step, index) => (
                    <div key={step} className="flex items-center flex-1">
                      <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                        getStepIndex(currentStep) >= index 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-200 text-gray-500'
                      }`}>
                        {getStepIndex(currentStep) > index ? (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          index + 1
                        )}
                      </div>
                      <span className={`ml-2 text-sm ${
                        getStepIndex(currentStep) >= index 
                          ? 'text-blue-600 font-semibold' 
                          : 'text-gray-500'
                      }`}>
                        {stepLabels[step]}
                      </span>
                      {index < 3 && (
                        <div className={`flex-1 h-1 mx-4 ${
                          getStepIndex(currentStep) > index ? 'bg-blue-600' : 'bg-gray-200'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                <AnimatePresence mode="wait">
                  {currentStep === 'shipping' && (
                    <motion.div
                      key="shipping"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <ShippingForm
                        address={shippingAddress}
                        onChange={setShippingAddress}
                        onSubmit={handleShippingSubmit}
                      />
                    </motion.div>
                  )}

                  {currentStep === 'payment' && (
                    <motion.div
                      key="payment"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <PaymentForm
                        method={paymentMethod}
                        onChange={setPaymentMethod}
                        onSubmit={handlePaymentSubmit}
                        onBack={() => setCurrentStep('shipping')}
                      />
                    </motion.div>
                  )}

                  {currentStep === 'review' && (
                    <motion.div
                      key="review"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <ReviewStep
                        cartItems={cartItems}
                        shippingAddress={shippingAddress}
                        paymentMethod={paymentMethod}
                        totalPrice={totalPrice}
                        shippingCost={shippingCost}
                        tax={tax}
                        finalTotal={finalTotal}
                        onBack={() => setCurrentStep('payment')}
                        onConfirm={processOrder}
                        isProcessing={isProcessing}
                      />
                    </motion.div>
                  )}

                  {currentStep === 'confirmation' && (
                    <motion.div
                      key="confirmation"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Order Confirmed!</h3>
                      <p className="text-gray-600 mb-6">
                        Thank you for your purchase. Your order has been successfully placed.
                      </p>
                      <p className="text-sm text-gray-500 mb-6">
                        Order #: {Math.random().toString(36).substr(2, 9).toUpperCase()}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleClose}
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Continue Shopping
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// کامپوننت‌های فرعی

function ShippingForm({ 
  address, 
  onChange, 
  onSubmit 
}: { 
  address: ShippingAddress;
  onChange: (address: ShippingAddress) => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  const handleChange = (field: keyof ShippingAddress, value: string) => {
    onChange({ ...address, [field]: value });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Shipping Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
          <input
            type="text"
            required
            value={address.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
          <input
            type="text"
            required
            value={address.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            required
            value={address.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
          <input
            type="tel"
            required
            value={address.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
        <input
          type="text"
          required
          value={address.address}
          onChange={(e) => handleChange('address', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
          <input
            type="text"
            required
            value={address.city}
            onChange={(e) => handleChange('city', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
          <input
            type="text"
            required
            value={address.country}
            onChange={(e) => handleChange('country', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
          <input
            type="text"
            required
            value={address.zipCode}
            onChange={(e) => handleChange('zipCode', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Continue to Payment
        </motion.button>
      </div>
    </form>
  );
}

function PaymentForm({
  method,
  onChange,
  onSubmit,
  onBack
}: {
  method: PaymentMethod;
  onChange: (method: PaymentMethod) => void;
  onSubmit: (e: React.FormEvent) => void;
  onBack: () => void;
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Method</h3>
      
      <div className="space-y-4">
        {[
          { id: 'credit-card', name: 'Credit Card', icon: '💳' },
          { id: 'paypal', name: 'PayPal', icon: '🔵' },
          { id: 'bank-transfer', name: 'Bank Transfer', icon: '🏦' }
        ].map((payment) => (
          <label key={payment.id} className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name="payment-method"
              value={payment.id}
              checked={method.type === payment.id}
              onChange={() => onChange({ ...method, type: payment.id as any })}
              className="w-4 h-4 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-lg">{payment.icon}</span>
            <span className="text-gray-700">{payment.name}</span>
          </label>
        ))}
      </div>

      {method.type === 'credit-card' && (
        <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
              <input
                type="text"
                placeholder="123"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name on Card</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      )}

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Review Order
        </motion.button>
      </div>
    </form>
  );
}

function ReviewStep({
  cartItems,
  shippingAddress,
  paymentMethod,
  totalPrice,
  shippingCost,
  tax,
  finalTotal,
  onBack,
  onConfirm,
  isProcessing
}: {
  cartItems: CartItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: PaymentMethod;
  totalPrice: number;
  shippingCost: number;
  tax: number;
  finalTotal: number;
  onBack: () => void;
  onConfirm: () => void;
  isProcessing: boolean;
}) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Review Your Order</h3>
      
      {/* Order Items */}
      <div className="space-y-4">
        <h4 className="font-semibold text-gray-700">Items</h4>
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
              <div>
                <div className="font-medium text-gray-800">{item.name}</div>
                <div className="text-sm text-gray-500">Qty: {item.quantity}</div>
              </div>
            </div>
            <div className="font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
          </div>
        ))}
      </div>

      {/* Shipping Address */}
      <div>
        <h4 className="font-semibold text-gray-700 mb-2">Shipping Address</h4>
        <p className="text-gray-600">
          {shippingAddress.firstName} {shippingAddress.lastName}<br />
          {shippingAddress.address}<br />
          {shippingAddress.city}, {shippingAddress.country} {shippingAddress.zipCode}<br />
          {shippingAddress.phone}
        </p>
      </div>

      {/* Payment Method */}
      <div>
        <h4 className="font-semibold text-gray-700 mb-2">Payment Method</h4>
        <p className="text-gray-600 capitalize">{paymentMethod.type.replace('-', ' ')}</p>
      </div>

      {/* Order Summary */}
      <div className="border-t pt-4 space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${shippingCost.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg border-t pt-2">
          <span>Total</span>
          <span>${finalTotal.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <motion.button
          onClick={onConfirm}
          disabled={isProcessing}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isProcessing ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Processing...</span>
            </div>
          ) : (
            'Confirm Order'
          )}
        </motion.button>
      </div>
    </div>
  );
}

// Helper functions
const stepLabels = {
  shipping: 'Shipping',
  payment: 'Payment',
  review: 'Review',
  confirmation: 'Confirmation'
};

function getStepIndex(step: CheckoutStep): number {
  const steps: CheckoutStep[] = ['shipping', 'payment', 'review', 'confirmation'];
  return steps.indexOf(step);
}