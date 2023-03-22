import { z, defineCollection } from "astro:content";

function customSlug(id: string) {
  return id; // placeholder for future enhancements
}

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cover: z.string().optional(),
    published: z.date(),
    draft: z.boolean().default(false),
  }),
  slug: ({ id, defaultSlug }) => {
    return customSlug(id) || defaultSlug;
  },
});

export const collections = { blog };
