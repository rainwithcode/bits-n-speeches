export type Guest = {
  fullName: string;
  email: string;
  phone?: string;
  meeting: string;
  message?: string | undefined;
  newsletterOptIn?: string | boolean | undefined;
};

export type Inquiry = Omit<Guest, "phone" | "meeting"> &
  Required<Pick<Guest, "message">> & {
    subject: string;
  };
