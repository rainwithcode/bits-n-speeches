import { describe, expect, it } from "vitest";

import { formatDate, FormatDateProps } from "./format";

type TestCase = {
  input: FormatDateProps;
  expected: string;
  description: string;
};

describe("format date", () => {
  const inputs: TestCase[] = [
    {
      input: { date: new Date("2026-11-12T10:00:00-08:00"), format: "long" },
      expected: "Thursday, November 12, 2026",
      description: "returns a long date",
    },
    {
      input: { date: new Date("2026-11-12T10:00:00-08:00") },
      expected: "11/12/2026",
      description: "returns a short date by default",
    },
    {
      input: { date: new Date("2026-11-12T10:00:00-08:00"), format: "short" },
      expected: "11/12/2026",
      description: "returns a short date",
    },
    {
      input: { date: new Date("2026-01-01T10:00:00-08:00"), format: "long" },
      expected: "Thursday, January 1, 2026",
      description: "returns dates at the beginning of the year",
    },
    {
      input: { date: new Date("2026-12-31T10:00:00-08:00"), format: "long" },
      expected: "Thursday, December 31, 2026",
      description: "returns dates at the end of the year",
    },
  ];

  it.each(inputs)("$description", ({ expected, input }) => {
    const result = formatDate(input);
    expect(result).toBe(expected);
  });
});
