export interface Categorie {
  name: string;
  products: Product[];
}

export interface Product {
  name: string;
  imageUrl: string;
}

export interface ProductDetailResume {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export interface ProductDetail extends ProductDetailResume {
  description: string;
  size: number;
  media: ProductMediaData;
}

export interface ProductMediaData {
  likes: number;
  comments: number;
}
