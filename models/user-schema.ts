import { z } from "zod";

export const userRegisterSchema = z.object({
  email: z.string().email().trim().toLowerCase(),
});

export const userLoginSchema = z.object({
  email: z.string().email().trim().toLowerCase(),
  password: z
    .string()
    .min(4, { message: "Password must be 4 characters long" }),
});

export type userRegister = z.infer<typeof userRegisterSchema>;

export type userLogin = z.infer<typeof userLoginSchema>;
