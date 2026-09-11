import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const caseStudies = defineCollection({
  loader: glob({ base: './src/content/case-studies', pattern: '**/[^_]*.md' }),
  schema: z.object({
    title: z.string(), summary: z.string(), order: z.number(),
    status: z.enum(['draft', 'public', 'restricted']).default('draft'),
    role: z.string().optional(), timeframe: z.string().optional(),
    category: z.string().default('Product direction'),
    result: z.string().optional(),
    brief: z.array(z.object({ label: z.string(), text: z.string() })).length(3).optional(),
    diagram: z.object({ title: z.string(), caption: z.string(), steps: z.array(z.object({title: z.string(), detail: z.string()})).min(2) }).optional(),
  }),
});
export const collections = { 'case-studies': caseStudies };
