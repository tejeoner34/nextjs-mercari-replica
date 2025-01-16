import { fetchProductDetail } from '@/app/utils/api';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

type ItemDetailPageProps = {
  params: Promise<{ id: string }>;
};
export default async function page({ params }: ItemDetailPageProps) {
  const productDetail = await fetchProductDetail((await params).id);

  return (
    <div className="flex justify-center">
      <Carousel className="w-full max-w-xs relative">
        <CarouselContent>
          {productDetail.images.map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute  bottom-5">
          <CarouselNext />
          <CarouselPrevious />
        </div>
      </Carousel>
    </div>
  );
}
