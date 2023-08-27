import { Image } from "sanity";

export interface Product {
  _id: string;
  name: string;
  price: number;
  totalPrice: number;
  subcat: string;
  image: Array<Image>;
  userId: string;
  quantity: number;
}

export interface CartItem {
  product: Product;
  qty: number;
}

export interface SanityProducts {
  map(arg0: (p: any, index: any) => import("react").JSX.Element): import("react").ReactNode;
  _id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  productcare: Array<string>;
  slug: {
    current: string;
  };
  image: Array<Image>;
  subcat: string;
}