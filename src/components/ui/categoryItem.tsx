import { Categorie } from '@/models/models';
import Image from 'next/image';

type categoryItemProps = {
  category: Categorie;
};
export default function CategoryItem({ category: { name, products } }: categoryItemProps) {
  return (
    <div>
      <div>
        <h3>{name}</h3>
      </div>
      <div className="flex gap-6 overflow-x-auto">
        {products.map(({ name, imageUrl }) => (
          <div key={name}>
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <Image src={imageUrl} alt={name} width={100} height={100} className="w-full h-full" />
            </div>
            <h4>{name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
