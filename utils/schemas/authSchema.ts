import { z } from "zod";

export const RegisterFormSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name is too long"),

  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name is too long"),

  email: z.email({ message: "Invalid email address" }),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(128, "Password is too long"),
});

export const LoginFormSchema = z.object({
  email: z.email({ message: "Invalid email address" }),

  password: z.string().min(1, "Password must not be empty"),
});
