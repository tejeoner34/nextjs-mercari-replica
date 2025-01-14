import { ProductDetailResume } from '@/models/models';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  console.log(params.id);
  return NextResponse.json(productList);
}

const productList: ProductDetailResume[] = [
  {
    id: '1',
    name: 'Nintendo Switch',
    price: 299.99,
    imageUrl: 'https://picsum.photos/200/300',
  },
  {
    id: '2',
    name: 'PlayStation 5',
    price: 499.99,
    imageUrl: 'https://picsum.photos/300/200',
  },
  {
    id: '3',
    name: 'Xbox Series X',
    price: 499.99,
    imageUrl: 'https://picsum.photos/250/250',
  },
  {
    id: '4',
    name: 'Steam Deck',
    price: 399.99,
    imageUrl: 'https://picsum.photos/300/200',
  },
  {
    id: '5',
    name: 'Meta Quest 3',
    price: 349.99,
    imageUrl: 'https://picsum.photos/250/250',
  },
  {
    id: '6',
    name: 'Apple Vision Pro',
    price: 3499.99,
    imageUrl: 'https://picsum.photos/300/200',
  },
];
