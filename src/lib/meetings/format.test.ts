import { describe, expect, it } from "vitest";

import {
  formatDate,
  FormatDateOptions,
  formatTime,
  FormatTimeOptions,
} from "./format";

type DateInput = {
  date: string | Date;
  formatDateOptions?: FormatDateOptions;
  expected: string;
  description: string;
};

type TimeInput = {
  date: string | Date;
  formatTimeOptions?: FormatTimeOptions;
  expected: string;
  description: string;
};

describe("format date", () => {
  const inputs: DateInput[] = [
    {
      date: new Date("2026-11-12T10:00:00-08:00"),
      formatDateOptions: { format: "long" },
      expected: "Thursday, November 12, 2026",
      description: "returns a long date",
    },
    {
      date: new Date("2026-11-12T10:00:00-08:00"),
      expected: "Thursday, November 12, 2026",
      description: "returns a long date by default",
    },
    {
      date: new Date("2026-11-12T10:00:00-08:00"),
      formatDateOptions: { format: "short" },
      expected: "11/12/2026",
      description: "returns a short date",
    },
    {
      date: new Date("2026-01-01T10:00:00-08:00"),
      formatDateOptions: { format: "long" },
      expected: "Thursday, January 1, 2026",
      description: "returns dates at the beginning of the year",
    },
    {
      date: new Date("2026-12-31T10:00:00-08:00"),
      formatDateOptions: { format: "long" },
      expected: "Thursday, December 31, 2026",
      description: "returns dates at the end of the year",
    },
    {
      date: new Date("2026-12-32T10:00:00-08:00"),
      formatDateOptions: { format: "long" },
      expected: "Invalid date",
      description: "returns invalid date when day is invalid",
    },
  ];

  it.each(inputs)("$description", ({ expected, date, formatDateOptions }) => {
    const result = formatDate(date, formatDateOptions);
    expect(result).toBe(expected);
  });
});

describe("format time", () => {
  const inputs: TimeInput[] = [
    {
      date: new Date("2026-11-12T10:00:00-08:00"),
      expected: "10:00 AM",
      description: "returns a time",
    },
    {
      date: new Date("2026-11-12T12:00:00-08:00"),
      expected: "12:00 PM",
      description: "returns noon",
    },
    {
      date: new Date("2026-11-12T23:59:00-08:00"),
      expected: "11:59 PM",
      description: "returns the last minute of the day",
    },
    {
      date: new Date("2026-11-12T24:00:00-08:00"),
      expected: "12:00 AM",
      description: "returns midnight",
    },
    {
      date: new Date("2026-11-12T10:00:59-08:00"),
      expected: "10:00 AM",
      description: "ignores seconds when formatting time",
    },
    {
      date: new Date("2026-11-12T25:00:59-08:00"),
      expected: "Invalid date",
      description: "returns invalid date when time is invalid",
    },
  ];

  it.each(inputs)("$description", ({ expected, date, formatTimeOptions }) => {
    const result = formatTime(date, formatTimeOptions);
    expect(result).toBe(expected);
  });
});
