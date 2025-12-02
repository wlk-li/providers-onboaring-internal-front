import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  emailAddress: z.string().email(),
});
export type User = z.infer<typeof userSchema>;

export const userApiSchema = z
  .object({
    id: z.number(),
    name: z.string(),
    email_address: z.string().email(),
  })
  .transform((data) => {
    return {
      id: data.id,
      name: data.name,
      emailAddress: data.email_address,
    } satisfies User;
  });

export const hasMinLength = (value: string) => {
  return value.length >= 8;
};

export const hasNumber = (value: string) => {
  return /\d/.test(value);
};

export const hasLetter = (value: string) => {
  return /[a-zA-Z]/.test(value);
};

export const getUserSchema = () => {
  return userSchema
    .omit({ id: true })
    .extend({
      emailAddress: z.string().email("Invalid email address"),
      password: z
        .string()
        .refine(hasMinLength, { message: "Password is too weak" })
        .refine(hasNumber, { message: "Password is too weak" })
        .refine(hasLetter, { message: "Password is too weak" }),
      passwordConfirmation: z.string(),
    })
    .refine(
      (values) => {
        return values.password === values.passwordConfirmation;
      },
      {
        message: "Passwords do not match",
        path: ["passwordConfirmation"],
      },
    );
};
