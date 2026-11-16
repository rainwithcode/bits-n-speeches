type DateFormat = "short" | "long";

export type FormatDateOptions = {
  format?: DateFormat;
  timeZone?: string;
};

export function formatDate(
  value: string | Date,
  { format = "long", timeZone = "America/Los_Angeles" }: FormatDateOptions = {},
): string {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "Invalid date";

  const options: Intl.DateTimeFormatOptions =
    format === "short"
      ? {
          month: "numeric",
          day: "numeric",
          year: "numeric",
        }
      : {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        };

  return new Intl.DateTimeFormat("en-US", {
    ...options,
    timeZone,
  }).format(date);
}

export type FormatTimeOptions = {
  timeZone?: string;
  includeTimeZone?: boolean;
};

export function formatTime(
  value: string | Date,
  {
    timeZone = "America/Los_Angeles",
    includeTimeZone = false,
  }: FormatTimeOptions = {},
): string {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "Invalid date";

  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone,
    ...(includeTimeZone && { timeZoneName: "short" }),
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
