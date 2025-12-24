export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  image: string;
  images?: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  sizes?: string[];
  colors?: string[];
  featured?: boolean;
  new?: boolean;
}

export interface CartItem extends Product {
    quantity: number;
    selectedSize?: string;
    selectedColor?: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  productCount: number;
}