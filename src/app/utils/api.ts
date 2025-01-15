import { Categorie, ProductDetail, ProductDetailResume } from '@/models/models';

const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001' // Development URL
    : '';

export async function fetchCategories() {
  try {
    const res = await fetch(baseUrl + '/api/products');
    const categories: Categorie[] = await res.json();
    return categories;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchProductsResumePerId(id: string): Promise<ProductDetailResume[]> {
  try {
    const res = await fetch(baseUrl + '/api/products/' + id);
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchProductDetail(id: string): Promise<ProductDetail> {
  try {
    const res = await fetch(baseUrl + '/api/products/product-detail/' + id);
    return await res.json();
  } catch (error) {
    console.log(error);
    throw new Error();
  }
}
