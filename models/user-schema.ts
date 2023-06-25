import { z } from "zod";

export const userRegisterSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(2, { message: "First name must be 2 or more characters long" }),
    lastName: z
      .string()
      .trim()
      .min(2, { message: "Last name must be 2 or more characters long" }),
    email: z.string().email().trim().toLowerCase(),
    password: z.string().min(10),
    confirmPassword: z.string().min(10),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });

export const userLoginSchema = z.object({
  email: z.string().email().trim().toLowerCase(),
  password: z.string().min(4),
});

export type userRegister = z.infer<typeof userRegisterSchema>;

export type userLogin = z.infer<typeof userLoginSchema>;
