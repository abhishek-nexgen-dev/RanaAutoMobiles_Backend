export interface IProduct {
  name: string;
  description: string;
  price: number;
  model_No: string;
  discountPrice?: number;
  currency: string;
  inStock: boolean;
  rating: {
    score: number;
    count: number;
  };
  images: string[];
  colors: {
    name: string;
    hex: string;
    images: string[];
  }[];
  sizes: string[];
  category: string;
  tags?: string[];
  flags?: {
    label: string;
    type: 'info' | 'success' | 'warning' | 'error';
    icon?: string;
  }[];
  createdAt: Date;
  updatedAt: Date;
}
