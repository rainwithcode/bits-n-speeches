import z from "zod";

export const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, "Full name is required")
    .max(100, "Full name must not exceed 100 characters"),
  email: z
    .email("Please enter a valid email address")
    .min(3, "Email must be at least 3 characters")
    .max(254, "Email must not exceed 254 characters"),
  subject: z
    .string()
    .trim()
    .min(1, "Subject is required")
    .max(150, "Subject must not exceed 150 characters"),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(2000, "Message must not exceed 2,000 characters"),
  newsletterOptIn: z
    .literal("true")
    .optional()
    .transform((value) => value === "true"),
});
