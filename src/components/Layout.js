import Link from 'next/link';
import Heading from '@/components/Heading';
export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      {/* <nav className='navbar'>
            <Link className='navbar__link' href="/">Home</Link>
            <Link className='navbar__link 'href="/about">About</Link>
        </nav> */}
    </>
  );
}
