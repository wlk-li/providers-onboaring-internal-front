import { z } from "zod";

const paginationLinkSchema = z.object({
  url: z.string().nullable(),
  label: z.string(),
  page: z.number().nullable(),
  active: z.boolean(),
});

const paginatedResponseSchema = z.object({
  meta: z.object({
    currentPage: z.number(),
    from: z.number(),
    lastPage: z.number(),
    links: z.array(paginationLinkSchema),
    path: z.string(),
    perPage: z.number(),
    to: z.number(),
    total: z.number(),
  }),
});

export const parsePaginatedResponse = <T>(schema: z.ZodType<T>, response: unknown) => {
  return paginatedResponseSchema.extend({ data: schema }).parse(response);
};
