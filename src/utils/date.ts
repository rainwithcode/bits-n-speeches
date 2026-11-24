export function getStartOfDayInLA() {
  const now = new Date();

  const dateParts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);

  const parts = Object.fromEntries(
    dateParts.map(({ type, value }) => [type, value]),
  );

  // Get midnight in Los Angeles, accounting for daylight saving time.
  const localDate = `${parts.year}-${parts.month}-${parts.day}T00:00:00`;

  // Convert the Los Angeles midnight to its UTC equivalent.
  const offset = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    timeZoneName: "longOffset",
  })
    .formatToParts(now)
    .find(({ type }) => type === "timeZoneName")?.value;

  const match = offset?.match(/GMT([+-])(\d{2}):?(\d{2})/);

  if (!match) throw new Error("Unable to determine LA timezone offset");

  const [, sign, hours, minutes] = match;
  const offsetMinutes =
    (Number(hours) * 60 + Number(minutes)) * (sign === "+" ? 1 : -1);

  const midnightUTC = new Date(localDate + "Z");
  midnightUTC.setUTCMinutes(midnightUTC.getUTCMinutes() - offsetMinutes);

  return midnightUTC.toISOString();
}
