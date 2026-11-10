export type Guest = {
  fullName: string;
  email: string;
  phone?: string;
  meeting: string;
  message?: string | undefined;
  newsletterOptIn?: "true";
};
