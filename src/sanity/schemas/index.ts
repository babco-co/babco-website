import { type SchemaTypeDefinition } from "sanity";
import { aiServiceType } from "./documents/ai-service";
import { aiPageHeroType } from "./documents/ai-page-hero";
import { aiPageType } from "./documents/ai-page";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [aiServiceType, aiPageHeroType, aiPageType],
};
