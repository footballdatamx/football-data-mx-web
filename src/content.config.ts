import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const schemaEstandar = z.object({
  title: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()).default([]),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: schemaEstandar,
});

const articulos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articulos" }),
  schema: schemaEstandar,
});

const analisisPro = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/analisis-pro" }),
  schema: schemaEstandar,
});

export const collections = { blog, articulos, analisisPro };
