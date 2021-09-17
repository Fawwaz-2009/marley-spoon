import React from 'react';
import { Recipe } from '../interfaces/index';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Tag } from '../dependencies';

const RecipeDetails: React.FC<RecipeDetailsPageProps> = ({ recipe }) => {
  const { title, description, photo, tags, chef } = recipe;

  return (
    <main className='bg-white max-w-xs mx-auto my-10 sm:max-w-3xl lg:max-w-5xl'>
      <Image src={photo.url} alt={photo.alt} width={photo.width} height={photo.height} />
      <div className='max-w-lg p-4'>
        <h1 className='text-4xl bold'>{title}</h1>
        <div className='my-2 flex justify-start gap-5'>
          {tags &&
            tags.map(tag => (
              <Tag key={tag} text={tag}>
                {tag}
              </Tag>
            ))}
        </div>
        <h2 className='text-3xl bold mt-10 mb-4'>{"What's cooking"}</h2>
        <ReactMarkdown>{description}</ReactMarkdown>
        <hr className='my-4' />
        <p>
          Shared with you by <span className='text-green-500'>{chef ? chef.name : 'Marley Spoon'}</span>
        </p>
      </div>
    </main>
  );
};

interface RecipeDetailsPageProps {
  recipe: Recipe;
}

export default RecipeDetails;
