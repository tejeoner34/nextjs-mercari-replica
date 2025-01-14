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
