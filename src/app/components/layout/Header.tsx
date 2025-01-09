import Image from 'next/image';
import { IoIosSearch } from 'react-icons/io';
import Link from 'next/link';
import SearchDialog from './SearchDialog';

export default function Header() {
  return (
    <>
      <header className="bg-background min-h-20 p-3 flex flex-col gap-5 border-b border-solid border-border">
        <div className="flex justify-between items-center">
          <div></div>
          <Image src="/images/logo-white.svg" alt="logo" width={100} height={100} />
          <SearchDialog child={<IoIosSearch size={25} />} />
        </div>
        <div>
          <nav className="flex justify-between items-center">
            <h3>メルカリへようこそ！</h3>
            <ul className="flex gap-5">
              <li>
                <Link href="/" className="text-link">
                  register
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-link">
                  login
                </Link>
              </li>
            </ul>
          </nav>
          <div></div>
        </div>
      </header>
    </>
  );
}
