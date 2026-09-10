import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Files starting with _ (like _template.md) are ignored.
const caseStudies = defineCollection({
  loader: glob({ base: './src/content/case-studies', pattern: '**/[^_]*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    // draft: dev only. public: everywhere. restricted: everywhere, with a note.
    status: z.enum(['draft', 'public', 'restricted']).default('draft'),
    role: z.string().optional(),
    timeframe: z.string().optional(),
  }),
});

export const collections = { 'case-studies': caseStudies };
