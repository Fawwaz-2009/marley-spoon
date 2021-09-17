import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <>
      <header className='h-24 bg-white flex py-4 justify-center'>
        <Link href={`/`}>
          <a className='flex'>
            <Image src='https://marleyspoon.com/images/ms/svg/logo-martha-marley-spoon-389f42c71a.svg' alt='marley spoon logo' width={994} height={364} className='h-full w-auto' />
          </a>
        </Link>
      </header>
    </>
  );
};



export default Header;
