import { Categorie } from '@/models/models';

const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000' // Development URL
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
