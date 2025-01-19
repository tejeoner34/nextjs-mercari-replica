import { fetchProductDetail } from '@/app/utils/api';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import Image from 'next/image';

type ItemDetailPageProps = {
  params: Promise<{ id: string }>;
};
export default async function page({ params }: ItemDetailPageProps) {
  const productDetail = await fetchProductDetail((await params).id);
  console.log(productDetail);

  return (
    <div className="flex justify-center">
      <Carousel className="w-full max-w-xs relative">
        <CarouselContent>
          {productDetail.images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="relative aspect-square">
                    <Image src={image} alt="image detail" objectFit="cover" layout="fill" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute  bottom-7 right-12">
          <CarouselNext />
          <CarouselPrevious />
        </div>
      </Carousel>
    </div>
  );
}
