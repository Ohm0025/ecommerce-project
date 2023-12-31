export interface IProductDetail {
  id: number | "";
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating?: number;
  stock: number;
  images: string[];
  brand: string;
  discountPercentage: number;
}

export interface IProductListItem {
  rating: number;
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  images: string[];
  thumbnail: string;
  stock: number;
  discountPercentage: number;
  brand?: string;
}
