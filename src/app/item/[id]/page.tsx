import { fetchProductDetail } from '@/app/utils/api';

type ItemDetailPageProps = {
  params: Promise<{ id: string }>;
};
export default async function page({ params }: ItemDetailPageProps) {
  console.log(await fetchProductDetail((await params).id));

  return <div>asdsaasd</div>;
}
