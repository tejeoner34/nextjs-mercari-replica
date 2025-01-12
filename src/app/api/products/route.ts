import { Categorie } from '@/models/models';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(categories);
}

const categories: Categorie[] = [
  {
    name: '人気',
    products: [
      {
        name: 'Nintendo Switch',
        imageUrl: 'https://picsum.photos/200/300',
      },
      {
        name: 'PlayStation 5',
        imageUrl: 'https://picsum.photos/300/200',
      },
      {
        name: 'iPhone 14',
        imageUrl: 'https://picsum.photos/300/200',
      },
      {
        name: 'MacBook Pro',
        imageUrl: 'https://picsum.photos/400/300',
      },
      {
        name: 'Samsung Galaxy S23 Ultra',
        imageUrl: 'https://picsum.photos/300/200',
      },
      {
        name: 'Apple Watch Series 8',
        imageUrl: 'https://picsum.photos/200/200',
      },
      {
        name: 'Sony WH-1000XM5',
        imageUrl: 'https://picsum.photos/250/250',
      },
      {
        name: 'Instant Pot',
        imageUrl: 'https://picsum.photos/300/200',
      },
      {
        name: 'Dyson V15 Detect',
        imageUrl: 'https://picsum.photos/300/200',
      },
      {
        name: 'Nintendo Switch Lite',
        imageUrl: 'https://picsum.photos/200/300',
      },
    ],
  },
  {
    name: 'ファッション',
    products: [
      {
        name: 'ブランドバッグ',
        imageUrl: 'https://picsum.photos/200/300',
      },
      {
        name: 'スニーカー',
        imageUrl: 'https://picsum.photos/300/200',
      },
      {
        name: 'デニムジャケット',
        imageUrl: 'https://picsum.photos/250/250',
      },
      {
        name: '腕時計',
        imageUrl: 'https://picsum.photos/200/300',
      },
      {
        name: 'ワンピース',
        imageUrl: 'https://picsum.photos/300/200',
      },
      {
        name: 'Tシャツ',
        imageUrl: 'https://picsum.photos/200/300',
      },
      {
        name: 'サングラス',
        imageUrl: 'https://picsum.photos/200/300',
      },
      {
        name: '帽子',
        imageUrl: 'https://picsum.photos/200/300',
      },
      {
        name: 'スカート',
        imageUrl: 'https://picsum.photos/300/200',
      },
    ],
  },
  {
    name: '家電',
    products: [
      {
        name: 'ロボット掃除機',
        imageUrl: 'https://picsum.photos/300/200',
      },
      {
        name: 'スマートウォッチ',
        imageUrl: 'https://picsum.photos/200/300',
      },
      {
        name: 'デジタルカメラ',
        imageUrl: 'https://picsum.photos/250/250',
      },
      {
        name: '冷蔵庫',
        imageUrl: 'https://picsum.photos/300/200',
      },
      {
        name: 'テレビ',
        imageUrl: 'https://picsum.photos/300/200',
      },
      {
        name: '空気清浄機',
        imageUrl: 'https://picsum.photos/250/250',
      },
      {
        name: '炊飯器',
        imageUrl: 'https://picsum.photos/200/300',
      },
      {
        name: 'ドライヤー',
        imageUrl: 'https://picsum.photos/200/300',
      },
    ],
  },
];

console.log(categories);
