import React from 'react';
import Head from 'next/head'


const Seo: React.FC<SeoProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
    </Head>
  );
};

interface SeoProps {
  title: string;
  description: string;
}

export default Seo;
