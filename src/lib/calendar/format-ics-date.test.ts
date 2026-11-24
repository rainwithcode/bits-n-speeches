import { describe, expect, it } from "vitest";

import { formatIcsDate } from "./format-ics-date";

describe("format ics date", () => {
  const inputs = [
    {
      input: new Date("2026-11-16T18:00:00.000Z"),
      expected: "20261116T180000Z",
      description: "formats a double digit month and day",
    },
    {
      input: new Date("2026-01-05T09:30:00.000Z"),
      expected: "20260105T093000Z",
      description: "formats a single digit month and day",
    },
    {
      input: new Date("2026-11-16T00:00:00.000Z"),
      expected: "20261116T000000Z",
      description: "formats beginning of the day",
    },
    {
      input: new Date("2026-11-16T12:00:00.000Z"),
      expected: "20261116T120000Z",
      description: "formats noon",
    },
    {
      input: new Date("2026-11-16T23:59:59.000Z"),
      expected: "20261116T235959Z",
      description: "formats last minute of the day",
    },
  ];
  it.each(inputs)("$description", ({ expected, input }) => {
    expect(formatIcsDate(input)).toBe(expected);
  });
});
