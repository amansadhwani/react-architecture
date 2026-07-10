import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters"),

  email: z.email("Please enter a valid email address"),

  role: z.enum(["Admin", "User", "Manager"]),
});

export type UserFormValues = z.infer<typeof userSchema>;
