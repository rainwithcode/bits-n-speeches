import type { UUID } from "crypto";

export type Guest = {
  fullName: string;
  email: string;
  phone: string;
  meeting: UUID;
  message: string;
  newsletterOptIn?: "true";
};
