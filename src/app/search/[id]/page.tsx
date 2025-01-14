import { fetchProductsResumePerId } from '@/app/utils/api';
import { ProductDetailResume } from '@/models/models';
import Image from 'next/image';

type SerachPageProps = {
  params: Promise<{ id: string }>;
};

export default async function page({ params }: SerachPageProps) {
  const searchId = await (await params).id;
  const decodedName = searchId ? decodeURIComponent(searchId as string) : '';
  const productsResume: ProductDetailResume[] = await fetchProductsResumePerId(searchId);

  return (
    <>
      <h1>{decodedName}検索結果</h1>
      <main>
        <div></div>

        <div className="grid grid-cols-3 gap-4">
          {productsResume.map((product) => (
            <div key={product.id} className="relative aspect-square overflow-hidden">
              {/* Parent container is square and maintains aspect ratio */}
              <Image
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover" // Makes image fill and crop to fit the square
                width={300}
                height={300}
              />
              <p className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded">
                ${product.price}
              </p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
