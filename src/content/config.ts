import { z, defineCollection } from "astro:content";

function customSlug(id: string) {
  return id; // placeholder for future enhancements
}

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().default("https://res.cloudinary.com/dwjfacaod/image/upload/v1673331417/public/share_vwcfsm.jpg"),
    author: z.string().default("Eric Dew"),
    publishedDate: z.date(),
    updatedDate: z.string().transform((str: string) => new Date(str)).optional(),
    draft: z.boolean().default(false),
  }),
  slug: ({ id, defaultSlug }) => {
    return customSlug(id) || defaultSlug;
  },
});

export const collections = { articles };
