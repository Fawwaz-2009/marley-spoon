import { Recipe, RecipeRaw, RecipesRaw } from '../interfaces';


export function mapRawRecipesToRecipes(rawRecipes: RecipesRaw): Recipe[] {
  return rawRecipes.items.map(rawRecipe => {
    const chef = getChefIfExist(rawRecipe.fields.chef?.sys?.id, rawRecipes.includes.Entry);
    const tags = getTagsIfExist(rawRecipe.fields.tags, rawRecipes.includes.Entry);
    const photo = getPhoto(rawRecipe.fields.photo.sys.id, rawRecipe.fields.title, rawRecipes.includes.Asset);
    return {
      id: rawRecipe.sys.id,
      title: rawRecipe.fields.title,
      description: rawRecipe.fields.description,
      calories: rawRecipe.fields.calories,
      chef,
      photo,
      tags
    };
  });
}

function getChefIfExist(chefId: string | undefined, entries: RecipesRaw['includes']['Entry']): null | Recipe['chef'] {
  if (chefId === undefined) return null;
  return entries
    .filter(rawEntry => rawEntry.sys.id === chefId)
    .map(rawChef => ({
      name: rawChef.fields.name
    }))[0];
}

function getTagsIfExist(rawTagsLinks: RecipeRaw['fields']['tags'] | undefined, entries: RecipesRaw['includes']['Entry']): null | Recipe['tags'] {
  if (rawTagsLinks === undefined) return null;
  return rawTagsLinks.map(tagLink => entries.find(entry => entry.sys.id === tagLink.sys.id)).map(tagRaw => tagRaw!.fields.name);
}

function getPhoto(photoId: string, alt: string, assets: RecipesRaw['includes']['Asset']): Recipe['photo'] {
  return assets
    .filter(rawAsset => rawAsset.sys.id === photoId)
    .map(rawPhoto => ({
      width: rawPhoto.fields.file.details.image.width,
      height: rawPhoto.fields.file.details.image.height,
      url: 'https:' + rawPhoto.fields.file.url,
      alt
    }))[0];
}
