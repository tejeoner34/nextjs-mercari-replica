import Image from 'next/image';
import { IoIosSearch } from 'react-icons/io';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-background min-h-20 p-3 flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <div></div>

        <Image src="/images/logo-white.svg" alt="logo" width={100} height={100} />

        <IoIosSearch size={25} />
      </div>
      <div>
        <nav className="flex justify-between items-center">
          <ul className="flex gap-5">
            <li>
              <Link href="/">register</Link>
            </li>
            <li>
              <Link href="/products">login</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/products">Language</Link>
            </li>
          </ul>
        </nav>
        <div></div>
      </div>
    </header>
  );
}
