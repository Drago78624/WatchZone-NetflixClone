import { z } from "zod";

export const userRegisterSchema = z.object({
  email: z.string().email().trim().toLowerCase(),
});

export const userLoginSchema = z.object({
  email: z.string().email().trim().toLowerCase(),
  password: z
    .string()
    .min(4, {
      message: "Your password must contain between 4 and 60 characters.",
    })
    .max(60, {
      message: "Your password must contain between 4 and 60 characters.",
    }),
});

export type userRegister = z.infer<typeof userRegisterSchema>;

export type userLogin = z.infer<typeof userLoginSchema>;
