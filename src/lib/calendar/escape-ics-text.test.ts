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
      input:
        "I have a big exam tomorrow; I am studying late tonight to prepare.",
      expected:
        "I have a big exam tomorrow\\; I am studying late tonight to prepare.",
      description: "replaces ; with \\;",
    },
    {
      input: "Hello, World",
      expected: "Hello\\, World",
      description: "replaces , with \\,",
    },
    {
      input: `Weekly Toastmasters meeting.
Agenda:
- Prepared speeches
- Evaluations`,
      expected:
        "Weekly Toastmasters meeting.\\nAgenda:\\n- Prepared speeches\\n- Evaluations",
      description: "replaces new lines with \\n,",
    },
    {
      input: "Meeting\\\\Notes",
      expected: "Meeting\\\\\\\\Notes",
      description: "escapes multiple occurrences of the same character",
    },
  ];

  it.each(inputs)("$description", ({ expected, input }) => {
    const result = escapeIcsText(input);

    expect(result).toBe(expected);
  });
});
