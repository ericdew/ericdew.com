import { z, defineCollection } from "astro:content";

function customSlug(id: string) {
  return id; // placeholder for future enhancements
}

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cover: z.string().optional(),
    author: z.string().default("Eric Dew"),
    published: z.date(),
    updated: z.string().transform((str: string) => new Date(str)).optional(),
    draft: z.boolean().default(false),
  }),
  slug: ({ id, defaultSlug }) => {
    return customSlug(id) || defaultSlug;
  },
});

export const collections = { blog };
