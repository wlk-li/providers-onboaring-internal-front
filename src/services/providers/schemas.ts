import { z } from "zod";

import { GENDER_FILTER } from "./constants";

export const specialtySchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const clinicSchema = z.object({
  id: z.number(),
  name: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string(),
  phone: z.string(),
});

export const providerSchema = z.object({
  id: z.number(),
  name: z.string(),
  profilePic: z.url(),
  specialty: specialtySchema,
  clinics: z.array(clinicSchema),
  isFavorited: z.boolean(),
});

export const providerDetailSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.email(),
  phone: z.string(),
  gender: z.enum(["male", "female", "other"]),
  about: z.string(),
  languages: z.array(z.string()),
  profilePic: z.url(),
  specialty: specialtySchema,
  clinics: z.array(clinicSchema),
  isFavorited: z.boolean(),
});

export const providersListSchema = z.array(providerSchema);

export const providerFiltersSchema = z.object({
  search: z.string().optional().catch(undefined),
  specialtyId: z.coerce.number().positive().optional().catch(undefined),
  gender: z.enum(GENDER_FILTER).optional().catch(undefined),
  clinicId: z.coerce.number().positive().optional().catch(undefined),
  favorited: z.boolean().optional(),
});
