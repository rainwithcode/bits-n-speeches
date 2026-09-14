import { z } from "zod";

export const guestRegistrationSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required"),
  email: z.email("Please enter a valid email address"),
  phone: z.string().trim().optional(),
  meeting: z.string().trim().min(1, "Please select a meeting"),
  mesage: z.string().trim().optional(),
});
