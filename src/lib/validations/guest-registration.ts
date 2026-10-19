import { z } from "zod";

export const guestRegistrationSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, "Full name is required")
    .max(100, "Full name must not exceed 100 characters"),
  email: z
    .email("Please enter a valid email address")
    .min(3, "Email must be at least 3 characters")
    .max(254, "Email must not exceed 254 characters"),
  phone: z
    .string()
    .trim()
    .max(30, "Phone number must not exceed 30 characters")
    .optional(),
  meeting: z.uuid("Please select a meeting"),
  message: z
    .string()
    .trim()
    .max(2000, "Message must not exceed 2,000 characters")
    .optional(),
  newsletterOptIn: z
    .literal("true")
    .optional()
    .transform((value) => value === "true"),
});
