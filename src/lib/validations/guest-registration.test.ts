import { describe, expect, it } from "vitest";

import type { Guest } from "@/types/guest";

import { guestRegistrationSchema } from "./guest-registration";

const guest: Guest = {
  fullName: "Jane Doe",
  email: "janedoe@email.com",
  phone: "+1 555 555 1234",
  meeting: "029fe605-6a3d-43e7-af53-f6b5cca07bd7",
  message: "Hello",
  newsletterOptIn: "true",
};

function createGuest(input: Partial<Guest>) {
  const newGuest = { ...guest, ...input };

  return newGuest;
}

describe("valid guest", () => {
  it("accepts a valid registration", () => {
    const result = guestRegistrationSchema.safeParse(guest);
    expect(result.success).toBe(true);
  });
});

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
    const newGuest = createGuest({ fullName: name });
    const result = guestRegistrationSchema.safeParse(newGuest);
    expect(result.success).toBe(expected);
  });
});
