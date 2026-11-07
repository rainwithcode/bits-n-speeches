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
