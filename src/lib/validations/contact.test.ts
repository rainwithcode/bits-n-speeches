import { describe, expect, it } from "vitest";

import type { Inquiry } from "@/types/guest";

import { contactSchema } from "./contact";

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
describe("name validation", () => {
  const nameInputs = [
    // name boundaries
    { name: "", expected: false, description: "rejects an empty name" },
    {
      name: " ",
      expected: false,
      description: "rejects a whitespace-only name",
    },
    {
      name: "A",
      expected: true,
      description: "accepts a name with 1 character",
    },
    {
      name: "A".repeat(100),
      expected: true,
      description: "accepts a name with 100 characters",
    },
    {
      name: "A".repeat(101),
      expected: false,
      description: "rejects a name with 101 characters",
    },
    // name characters
    {
      name: "Jane Doe",
      expected: true,
      description: "accepts a name with basic Latin letters and spaces",
    },
    {
      name: "Mary-Jane",
      expected: true,
      description: "accepts a name with a hyphen",
    },
    {
      name: "O'Connor",
      expected: true,
      description: "accepts a name with a straight apostrophe",
    },
    {
      name: "D’Arcy",
      expected: true,
      description: "accepts a name with a curly apostrophe",
    },
    {
      name: "José María",
      expected: true,
      description: "accepts a name with accented letters",
    },
    {
      name: "José María",
      expected: true,
      description: "accepts a name with periods and initials",
    },
    {
      name: "李小龍",
      expected: true,
      description: "accepts a name with non-Latin characters",
    },
    {
      name: "Jane123",
      expected: false,
      description: "rejects a name with numbers",
    },
    {
      name: "Jane@Doe",
      expected: false,
      description: "rejects unsupported special characters",
    },
  ];

  it.each(nameInputs)("$description", ({ name, expected }) => {
    const newInquiry = createInquiry({ fullName: name });
    const result = contactSchema.safeParse(newInquiry);
    expect(result.success).toBe(expected);
  });
});

describe("email validation", () => {
  const emailInputs = [
    // email boundaries
    { email: "", expected: false, description: "rejects an empty email" },
    {
      email: " ",
      expected: false,
      description: "rejects a whitespace-only email",
    },
    {
      email: "a@b",
      expected: false,
      description: "rejects an email with less than 3 characters",
    },
    {
      email: `${"a".repeat(242)}@example.com`,
      expected: true,
      description: "accepts an email with 154 characters",
    },
    {
      email: `${"a".repeat(243)}@example.com`,
      expected: false,
      description: "rejects an email with more than 154 characters",
    },
    // accepted emails
    {
      email: "jane@example.com",
      expected: true,
      description: "accepts a standard email",
    },
    {
      email: "jane+test@example.com",
      expected: true,
      description: "accepts an email with a plus sign",
    },
    {
      email: "jane@sub.example.com",
      expected: true,
      description: "accepts an email with a subdomain",
    },
    {
      email: "jane@sub.example.com",
      expected: true,
      description: "accepts an email with a subdomain",
    },
    // invalid emails
    {
      email: "janedoe",
      expected: false,
      description: "rejects an email with a missing @ and domain",
    },
    {
      email: "janedoe@",
      expected: false,
      description: "rejects an email with a missing domain",
    },
    {
      email: "@example.com",
      expected: false,
      description: "rejects an email with a missing local part",
    },
    {
      email: "jane@example",
      expected: false,
      description: "rejects an email with a missing top-level domain",
    },
    {
      email: "jane doe@example.com",
      expected: false,
      description: "rejects an email with a whitespace",
    },
  ];
  it.each(emailInputs)("$description", ({ email, expected }) => {
    const newInquiry = createInquiry({ email: email });
    const result = contactSchema.safeParse(newInquiry);
    expect(result.success).toBe(expected);
  });
});
