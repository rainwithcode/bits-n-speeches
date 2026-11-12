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
