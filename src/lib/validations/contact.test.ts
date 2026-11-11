import type { Inquiry } from "@/types/guest";

const inquiry: Inquiry = {
  fullName: "Jane Doe",
  email: "janedoe@email.com",
  subject: "Need info",
  message: "Hello",
  newsletterOptIn: "true",
};

function createInquiry(input: Partial<Inquiry>) {
  const newInquiry = { ...inquiry, ...input };

  return newInquiry;
}
