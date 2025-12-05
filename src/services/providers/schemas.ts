import { z } from "zod";

export const specialtySchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const clinicSchema = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
    // address: z.string(),
    // state: z.string().length(2),
    // zipCode: z.string(),
    // phone: z.string(),
  }),
);

export const providerSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.email(),
  phone: z.string(),
  gender: z.enum(["male", "female", "other"]),
  about: z.string(),
  languages: z.array(z.string()),
  profilePic: z.url(),
  specialty: specialtySchema,
  clinic: clinicSchema,
  isFavorited: z.boolean(),
});

export const providersListSchema = z.array(providerSchema);

// export const providerFiltersSchema = z.object({
//   specialty_id: z.number().optional(),
//   gender: z.enum(["male", "female", "other"]).optional(),
//   clinic_id: z.number().optional(),
//   favorited: z.boolean().optional(),
// });
