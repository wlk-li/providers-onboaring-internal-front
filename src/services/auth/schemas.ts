import { z } from "zod";

export const getLoginPayloadSchema = () => {
  return z.object({
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters",
    }),
  });
};

export const loginResponseSchema = z.object({
  accessToken: z.string(),
  tokenType: z.string(),
  expiresIn: z.number(),
});
