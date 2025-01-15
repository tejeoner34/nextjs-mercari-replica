import { ProductDetail } from '@/models/models';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
): Promise<Response> {
  const productDetail: ProductDetail | undefined = productList.find(
    (product) => product.id === params.id
  );
  if (!productDetail) {
    return NextResponse.json(
      {
        error: 'Not found',
      },
      { status: 404 }
    );
  }
  return NextResponse.json(productDetail);
}

const productList: ProductDetail[] = [
  {
    id: '1',
    name: 'Nintendo Switch',
    price: 299.99,
    imageUrl: 'https://www.nintendo.co.jp/switch/images/top/nintendo_switch_main_01.jpg',
    description: 'Play games at home or on the go with this hybrid console.',
    size: 1,
    media: { likes: 1000, comments: 50 },
  },
  {
    id: '2',
    name: 'PlayStation 5',
    price: 499.99,
    imageUrl: 'https://www.playstation.com/en-us/ps5/assets/images/hero/ps5_hero_01-en-us.png',
    description: 'Experience lightning-fast loading speeds and immersive gaming on PS5.',
    size: 2,
    media: { likes: 1500, comments: 80 },
  },
  {
    id: '3',
    name: 'Xbox Series X',
    price: 499.99,
    imageUrl: 'https://www.xbox.com/en-US/consoles/xbox-series-x', // Replace with a specific image URL
    description: 'The most powerful Xbox console ever.',
    size: 3,
    media: { likes: 800, comments: 40 },
  },
  {
    id: '4',
    name: 'Steam Deck',
    price: 399.99,
    imageUrl: 'https://store.steampowered.com/hardware/steam_deck', // Replace with a specific image URL
    description: 'Powerful on-the-go PC gaming.',
    size: 1,
    media: { likes: 1200, comments: 100 },
  },
  {
    id: '5',
    name: 'Meta Quest 3',
    price: 349.99,
    imageUrl: 'https://www.meta.com/en-gb/quest/coming-soon/', // Replace with a specific image URL
    description: 'The next generation of VR gaming.',
    size: 2,
    media: { likes: 700, comments: 30 },
  },
  {
    id: '6',
    name: 'Apple Vision Pro',
    price: 3499.99,
    imageUrl: 'https://www.apple.com/realitypro/compare/', // Replace with a specific image URL
    description: 'Experience mixed reality with Apple Vision Pro.',
    size: 4,
    media: { likes: 2000, comments: 200 },
  },
];
