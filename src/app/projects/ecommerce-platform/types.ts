export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  rating: number;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface FilterState {
  categories: string[];
  priceRange: [number, number];
  inStock: boolean;
}

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  zipCode: string;
}

export interface PaymentMethod {
  type: 'credit-card' | 'paypal' | 'bank-transfer';
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  nameOnCard?: string;
}