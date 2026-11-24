import { describe, expect, it } from "vitest";

import { escapeIcsText } from "./escape-ics-text";

describe("escape ics text", () => {
  const inputs = [
    {
      input: "",
      expected: "",
      description: "returns an empty string",
    },
    {
      input: "Meeting\\Notes",
      expected: "Meeting\\\\Notes",
      description: "replaces \\ with \\\\",
    },
    {
      input: "Meeting\\Notes",
      expected: "Meeting\\\\Notes",
      description: "replaces \\ with \\\\",
    },
  ];

  it.each(inputs)("$description", ({ expected, input }) => {
    const result = escapeIcsText(input);

    expect(result).toBe(expected);
  });
});
