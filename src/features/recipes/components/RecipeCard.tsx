import Link from 'next/link';
import React from 'react';
import { Recipe } from '../interfaces';
import Image from 'next/image';

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const { id, title, photo, calories } = recipe;

  return (
    <Link href={`/recipes/${id}/`}>
      <a className=' bg-white'>
        <div>
          <Image src={photo.url} alt={photo.alt} width={photo.width} height={photo.height} />
          <div className='p-4 flex flex-col justify-around h-28'>
            <h2 className='text-xl self-start place-self-start justify-self-start h-10 text-black '>{title}</h2>
            <p className='italic font-serif text-right text-gray-600'> calories - {calories}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

interface RecipeCardProps {
  recipe: Recipe;
}
