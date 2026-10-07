type DateTimeFormat = "date" | "time" | "datetime";

type FormatDateTimeOptions = {
  format?: DateTimeFormat;
  timeZone?: string;
  includeTimeZone?: boolean;
};

export function formatDateTime(
  value: string | Date | null | undefined,
  {
    format = "datetime",
    timeZone = "America/Los_Angeles",
    includeTimeZone = false,
  }: FormatDateTimeOptions = {},
) {
  if (!value) return "TBD";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Invalid date";
  }

  const baseOptions: Intl.DateTimeFormatOptions = {
    timeZone,
    ...(includeTimeZone && { timeZoneName: "short" }),
  };

  if (format === "date") {
    return new Intl.DateTimeFormat("en-US", {
      ...baseOptions,
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  }

  if (format === "time") {
    return new Intl.DateTimeFormat("en-US", {
      ...baseOptions,
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(date);
  }

  return new Intl.DateTimeFormat("en-US", {
    ...baseOptions,
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}

export function formatMeetingDateTime(
  startsAt: string | Date | null | undefined,
) {
  if (!startsAt) return "TBD";

  const date = new Date(startsAt);

  if (Number.isNaN(date.getTime())) {
    return "Invalid date";
  }

  const datePart = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "America/Los_Angeles",
  }).format(date);

  const timePart = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "America/Los_Angeles",
    timeZoneName: "short",
  }).format(date);

  return `${datePart} • ${timePart}`;
}
