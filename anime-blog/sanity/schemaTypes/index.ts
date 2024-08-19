import { type SchemaTypeDefinition } from "sanity";
import { post } from "../schemes/post";
import { tag } from "../schemes/tag";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, tag],
};
