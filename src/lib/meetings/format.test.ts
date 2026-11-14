import { describe, expect, it } from "vitest";

import { formatDateTime, FormatDateTimeOptions } from "./format";

type TestCase = {
  date: string | Date | null | undefined;
  dateTimeOptions?: FormatDateTimeOptions;
  expected: string;
  description: string;
};

describe("format date", () => {
  const inputs: TestCase[] = [
    {
      date: new Date("2026-11-12T10:00:00-08:00"),
      dateTimeOptions: { format: "date", dateFormat: "long" },
      expected: "Thursday, November 12, 2026",
      description: "returns a long date",
    },
    {
      date: new Date("2026-11-12T10:00:00-08:00"),
      dateTimeOptions: { format: "date" },
      expected: "Thursday, November 12, 2026",
      description: "returns a long date by default",
    },
    {
      date: new Date("2026-11-12T10:00:00-08:00"),
      dateTimeOptions: { format: "date", dateFormat: "short" },
      expected: "11/12/2026",
      description: "returns a short date",
    },
    {
      date: new Date("2026-01-01T10:00:00-08:00"),
      dateTimeOptions: { format: "date", dateFormat: "long" },
      expected: "Thursday, January 1, 2026",
      description: "returns dates at the beginning of the year",
    },
    {
      date: new Date("2026-12-31T10:00:00-08:00"),
      dateTimeOptions: { format: "date", dateFormat: "long" },
      expected: "Thursday, December 31, 2026",
      description: "returns dates at the end of the year",
    },
  ];

  it.each(inputs)("$description", ({ expected, date, dateTimeOptions }) => {
    const result = formatDateTime(date, dateTimeOptions);
    expect(result).toBe(expected);
  });
});
