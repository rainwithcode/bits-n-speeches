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
    const newGuest = createGuest({ email: email });
    const result = guestRegistrationSchema.safeParse(newGuest);
    expect(result.success).toBe(expected);
  });
});

describe("phone number validation", () => {
  const phoneInputs = [
    // phone number boundaries
    {
      phone: "",
      expected: true,
      description: "accepts an empty phone number",
    },
    {
      phone: "   ",
      expected: true,
      description: "accepts a whitespace-only phone number",
    },
    {
      phone: undefined,
      expected: true,
      description: "accepts an omitted phone number",
    },
    {
      phone: "1".repeat(30),
      expected: true,
      description: "accepts a phone number with 30 characters",
    },
    {
      phone: "1".repeat(31),
      expected: false,
      description: "rejects a phone number with 31 characters",
    },
    // accepted phone numbers
    {
      phone: "09171234567",
      expected: true,
      description: "accepts a local phone number",
    },
    {
      phone: "+639171234567",
      expected: true,
      description: "accepts an international phone number",
    },
    {
      phone: "+1 555 555 1234",
      expected: true,
      description: "accepts a phone number with spaces",
    },
    {
      phone: "(555) 555-1234",
      expected: true,
      description: "accepts parentheses and hyphens",
    },
    {
      phone: "555.555.1234",
      expected: true,
      description: "accepts periods as separators",
    },
    // invalid phone numbers
    {
      phone: "abc123456",
      expected: false,
      description: "rejects alphabetic characters",
    },
    {
      phone: "555@5551234",
      expected: false,
      description: "rejects unsupported special characters",
    },
    {
      phone: "+63+9171234567",
      expected: false,
      description: "rejects multiple plus signs",
    },
  ];

  it.each(phoneInputs)("$description", ({ phone, expected }) => {
    const newGuest = createGuest({ phone });
    const result = guestRegistrationSchema.safeParse(newGuest);

    expect(result.success).toBe(expected);
  });
});

describe("meeting validation", () => {
  const meetingInputs = [
    { meeting: "", expected: false, description: "rejects an empty selection" },
    {
      meeting: "58a4c055-4039-479f-98cc-bfcb266e1408",
      expected: true,
      description: "accepts a uuid",
    },
    {
      meeting: "58a4c055-4039",
      expected: false,
      description: "rejects an invalid uuid",
    },
    {
      meeting: "123",
      expected: false,
      description: "rejects a non-uuid value",
    },
  ];

  it.each(meetingInputs)("$description", ({ meeting, expected }) => {
    const newGuest = createGuest({
      meeting: meeting,
    });
    const result = guestRegistrationSchema.safeParse(newGuest);
    expect(result.success).toBe(expected);
  });
});

describe("message validation", () => {
  const messageInputs = [
    {
      message: "",
      expected: true,
      description: "accepts an empty message",
    },
    {
      message: " ",
      expected: true,
      description: "accepts a whitespace-only message",
    },
    {
      message: " hello ",
      expected: true,
      description: "accepts a message with surrounding whitespace",
    },
    {
      message: undefined,
      expected: true,
      description: "accepts an omitted message",
    },
    {
      message: "Hello",
      expected: true,
      description: "accepts a valid message",
    },
    {
      message: "12345",
      expected: true,
      description: "accepts a message with numbers",
    },
    {
      message: "A".repeat(2000),
      expected: true,
      description: "accepts a message with 2000 characters",
    },
    {
      message: "A".repeat(2001),
      expected: false,
      description: "accepts a message with 2001 characters",
    },
  ];

  it.each(messageInputs)("$description", ({ message, expected }) => {
    const newGuest = createGuest({
      message: message,
    });
    const result = guestRegistrationSchema.safeParse(newGuest);
    expect(result.success).toBe(expected);
  });
});

describe("newsletter opt in validation", () => {
  const newsletterOptInInputs = [
    // valid values
    {
      newsletterOptIn: undefined,
      expected: true,
      description: "accepts an empty value",
    },
    {
      newsletterOptIn: "true",
      expected: true,
      description: "accepts the string true",
    },
    // invalid values
    {
      newsletterOptIn: "TRUE",
      expected: false,
      description: "rejects the string TRUE",
    },
    {
      newsletterOptIn: "false",
      expected: false,
      description: "rejects the string false",
    },
    {
      newsletterOptIn: "yes",
      expected: false,
      description: "rejects an unexpected string value",
    },
    {
      newsletterOptIn: true,
      expected: false,
      description: "rejects a boolean true",
    },
    {
      newsletterOptIn: false,
      expected: false,
      description: "rejects a boolean false",
    },
  ];

  it.each(newsletterOptInInputs)(
    "$description",
    ({ newsletterOptIn, expected }) => {
      const newGuest = createGuest({
        newsletterOptIn: newsletterOptIn,
      });
      const result = guestRegistrationSchema.safeParse(newGuest);
      expect(result.success).toBe(expected);
    },
  );
});
