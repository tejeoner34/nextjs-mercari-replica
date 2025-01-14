import { Categorie } from '@/models/models';
import Image from 'next/image';
import Link from 'next/link';

type categoryItemProps = {
  category: Categorie;
};
export default function CategoryItem({ category: { name, products } }: categoryItemProps) {
  return (
    <div className="p-5 flex flex-col gap-3">
      <div>
        <h3>{name}</h3>
      </div>
      <div className="flex gap-6 overflow-x-scroll no-scrollbar">
        {products.map(({ name, imageUrl }) => (
          <Link key={name} href={`/search/${name}`}>
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <Image src={imageUrl} alt={name} width={100} height={100} className="w-full h-full" />
            </div>
            <h4 className="text-center pt-2">{name}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
}
