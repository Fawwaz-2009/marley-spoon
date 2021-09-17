//#region RecipesRaw
export interface RecipesRaw {
  sys: RecipesRawSys;
  total: number;
  skip: number;
  limit: number;
  items: RecipeRaw[];
  includes: {
    Entry: {
      metadata: Metadata;
      sys: AssetSys;
      fields: EntryFields;
    }[];
    Asset: {
      metadata: Metadata;
      sys: AssetSys;
      fields: {
        title: string;
        file: {
          url: string;
          details: {
            size: number;
            image: {
              width: number;
              height: number;
            };
          };
          fileName: string;
          contentType: string;
        };
      };
    }[];
  };
}

export interface RecipeRaw {
  metadata: Metadata;
  sys: AssetSys;
  fields: {
    title: string;
    photo: ContentfulSys;
    calories: number;
    description: string;
    tags?: ContentfulSys[];
    chef?: ContentfulSys;
  };
}

interface Metadata {
  tags: any[];
}

interface AssetSys {
  space: ContentfulSys;
  id: string;
  type: LinkTypeEnum;
  createdAt: Date;
  updatedAt: Date;
  environment: ContentfulSys;
  revision: number;
  locale: Locale;
  contentType?: ContentfulSys;
}

interface ContentfulSys {
  sys: {
    id: string;
    type: PurpleType;
    linkType: LinkTypeEnum;
  };
}

enum LinkTypeEnum {
  Asset = "Asset",
  ContentType = "ContentType",
  Entry = "Entry",
  Environment = "Environment",
  Space = "Space",
}

enum PurpleType {
  Link = "Link",
}

enum Locale {
  EnUS = "en-US",
}

interface EntryFields {
  name: string;
}

interface RecipesRawSys {
  type: string;
}

//#endregion

//#region Recipe
export interface Recipe {
  id: string;
  title: string;
  description: string;
  calories: number;
  chef: null |{
    name: string;
  }
  photo: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  tags: null | string[];
}
//#endregion
