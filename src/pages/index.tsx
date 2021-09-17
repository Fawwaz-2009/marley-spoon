import { GetStaticProps } from 'next';
import React from 'react';
import Header from '../components/Header';
import Seo from '../components/Seo';
import { Recipe, getRecipes, RecipeCard } from '../features/recipes';

const IndexPage: React.FC<IndexPageProps> = ({ recipes }) => {
  return (
    <>
      <Seo title='Marley Spoon Home page' description='Original Recipes Weekly - Fresh Ingredients - Free &amp; Convenient Delivery - Skip any Week - Cancel Anytime.' />
      <Header />
      <main>
        <h1 className='text-4xl text-center my-8'>Our Weekly Menu</h1>
        <ul className='mx-auto max-w-md grid grid-cols-1 gap-8 md:grid-cols-2 md:max-w-4xl my-8'>
          {recipes.map(recipe => (
            <li key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const recipes = await getRecipes();
  if (recipes === undefined) {
    throw new Error('failed to fet recipes from CMS');
  }
  return {
    props: { recipes },
    revalidate: 10
  };
};

interface IndexPageProps {
  recipes: Recipe[];
}

export default IndexPage;
