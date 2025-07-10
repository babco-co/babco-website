import { type SchemaTypeDefinition } from "sanity";
import { aiServiceType } from "./aiServiceType";
import { aiPageHeroType } from "./aiPageHeroType";
import { aiPageType } from "./aiPageType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [aiServiceType, aiPageHeroType, aiPageType],
};
