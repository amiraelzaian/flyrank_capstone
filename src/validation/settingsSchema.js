import { z } from "zod";

export const settingsSchema = z.object({
  fullName: z.string().trim().min(1, { message: "Full Name is required." }),

  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required." })
    .email({ message: "Please enter a valid email address." }),

  password: z
    .string()
    .min(8, { message: "Password must contain at least 8 characters." }),
});
