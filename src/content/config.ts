import { z, defineCollection } from 'astro:content';

const blogs = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: ({ image }) => z.object({
        title: z.string(),
        image: image(),
        tags: z.array(z.string()).optional(),
        pubDate: z.date(),
        excerpt: z.string().max(800).optional(),
        isDraft: z.boolean(),
        isExternal: z.boolean(),
        url: z.string().optional(),
    }),
});

export const collections = {
    'blogs': blogs,
};