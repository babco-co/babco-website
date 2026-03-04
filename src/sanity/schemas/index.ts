import { type SchemaTypeDefinition } from "sanity";
import { aiService } from "./documents/aiService";
import { aiPage } from "./documents/aiPage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [aiService, aiPage],
};
