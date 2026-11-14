type DateFormat = "short" | "long";
type DateTimeFormat = "date" | "time" | "datetime";

type FormatDateTimeOptions = {
  format?: DateTimeFormat;
  dateFormat?: DateFormat;
  timeZone?: string;
  includeTimeZone?: boolean;
};

export type FormatDateProps = {
  date: Date;
  format?: DateFormat;
};

const DEFAULT_TIME_ZONE = "America/Los_Angeles";
const LOCALE = "en-US";

export function formatDateTime(
  value: string | Date | null | undefined,
  {
    format = "datetime",
    dateFormat = "long",
    timeZone = DEFAULT_TIME_ZONE,
    includeTimeZone = false,
  }: FormatDateTimeOptions = {},
) {
  if (!value) return "TBD";

  const date = value instanceof Date ? value : new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Invalid date";
  }

  const baseOptions: Intl.DateTimeFormatOptions = {
    timeZone,
    ...(includeTimeZone && { timeZoneName: "short" }),
  };

  const options: Intl.DateTimeFormatOptions = {
    ...baseOptions,
    ...(format === "time"
      ? {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }
      : format === "date"
        ? dateFormat === "short"
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
            }
        : {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          }),
  };

  return new Intl.DateTimeFormat(LOCALE, options).format(date);
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
