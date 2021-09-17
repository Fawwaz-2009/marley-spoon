import Link from 'next/link';
import React from 'react';
import Header from '../components/Header';
import Seo from '../components/Seo';

const PageNotFound: React.FC = () => {
  return (
    <>
      <Seo title='Marley Spoon Home page' description='Original Recipes Weekly - Fresh Ingredients - Free &amp; Convenient Delivery - Skip any Week - Cancel Anytime.' />
      <Header />
      <main>
        <h1 className='text-4xl text-center my-8'>
          {"Oops! We can't find this page, You can go back to the home page from"}{' '}
          <Link href='/'>
            <a>here</a>
          </Link>
        </h1>
      </main>
    </>
  );
};

export default PageNotFound;
