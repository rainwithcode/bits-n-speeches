import { describe, expect, it } from "vitest";

import { escapeHtml } from "./escapeHtml";

describe("escape html validation", () => {
  const inputs = [
    {
      input: "",
      expected: "",
      description: "Returns an empty string",
    },
    {
      input: "You & I",
      expected: "You &amp; I",
      description: "Replaces & with &amp",
    },
    {
      input: "5 < 10",
      expected: "5 &lt; 10",
      description: "Replaces < with &lt;",
    },
    {
      input: "10 > 5",
      expected: "10 &gt; 5",
      description: "Replaces > with &gt;",
    },
    {
      input: 'I already said "no".',
      expected: "I already said &quot;no&quot;.",
      description: 'Replaces " with &quot;',
    },

    {
      input: "I'm not sure.",
      expected: "I&#039;m not sure.",
      description: "Replaces ' with &#039;",
    },
    {
      input: "Hello world!",
      expected: "Hello world!",
      description: "Returns unchanged text without special characters",
    },
    {
      input: "&&",
      expected: "&amp;&amp;",
      description: "Escapes multiple occurrences of the same character",
    },
  ];

  it.each(inputs)("$description", ({ expected, input }) => {
    const result = escapeHtml(input);

    expect(result).toBe(expected);
  });
});
