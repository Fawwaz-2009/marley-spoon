import { Recipe } from '../interfaces';
import { mapRawRecipesToRecipes } from './mapper';

const SPACE_ID = process.env.NEXT_PUBLIC_SPACE_ID;
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

const HOST_URL = 'https://cdn.contentful.com';
export function getRecipes(): Promise<void | Recipe[]> {
  if (SPACE_ID == undefined || ACCESS_TOKEN == undefined) throw new Error('Environmental variables NEXT_PUBLIC_SPACE_ID or NEXT_PUBLIC_ACCESS_TOKEN were not provided');
  const parts = [HOST_URL, 'spaces', SPACE_ID, 'environments', 'master', 'entries'];
  const params = new URLSearchParams({
    access_token: ACCESS_TOKEN,
    content_type: 'recipe'
  });
  const url = parts.join('/') + '?' + params;
  return fetch(url)
    .then(response => response.json())
    .then(mapRawRecipesToRecipes)
    .then(result => result)
    .catch(error => console.error('error', error));
}

export async function getRecipe(slug: string): Promise<void | Recipe> {
  const recipes = await getRecipes();
  if (recipes === undefined) {
    throw new Error('failed to fet recipes from CMS');
  }
  return recipes.find(singleRecipe => singleRecipe.id === slug);
}
