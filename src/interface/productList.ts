interface IRating {
  rate: number;
  count: number;
}

export interface IProductDetail {
  id: number | "";
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating?: IRating;
}

export interface IProductListItem {
  rating: IRating;
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  images: string[];
  thumbnail: string;
}
