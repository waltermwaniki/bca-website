import { z, defineCollection } from 'astro:content';

const blogs = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: ({ image }) => z.object({
        title: z.string(),
        tags: z.array(z.string()).optional(),
        image: image(),
        pubDate: z.date(),
        isDraft: z.boolean(),
        isExternal: z.boolean(),
        url: z.string().optional(),
    }),
});

export const collections = {
    'blogs': blogs,
};