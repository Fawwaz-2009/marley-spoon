import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import Header from '../../components/Header';
import Seo from '../../components/Seo';
import { Recipe, getRecipes, RecipeDetails, getRecipe } from '../../features/recipes';

const RecipeDetailsPage: React.FC<RecipeDetailsPageProps> = ({ recipe }) => {
  const { title, description } = recipe;

  return (
    <>
      <Seo title={`Recipe - ${title}`} description={description} />
      <Header />
      <RecipeDetails recipe={recipe} />
    </>
  );
};

interface RecipeDetailsPageProps {
  recipe: Recipe;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const recipes = await getRecipes();
  if (recipes === undefined) {
    throw new Error('failed to fet recipes from CMS');
  }

  const paths = recipes.map(recipe => ({
    params: { slug: recipe.id }
  }));

  return {
    paths,
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params === undefined) throw new Error('Could not find slug passed by getStaticPaths');
  const recipe = await getRecipe(params.slug as string);

  if (recipe === undefined) {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    };
  }
  return {
    props: { recipe },
    revalidate: 10
  };
};

export default RecipeDetailsPage;
