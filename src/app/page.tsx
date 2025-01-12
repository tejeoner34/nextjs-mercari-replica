import CategoryItem from '@/components/ui/categoryItem';
import { fetchCategories } from './utils/api';

export default async function Home() {
  const categories = await fetchCategories();
  return (
    <div>
      <main>
        {categories.map((categorie) => (
          <CategoryItem key={categorie.name} category={categorie} />
        ))}
      </main>
    </div>
  );
}
