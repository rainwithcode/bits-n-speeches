export function toTitleCase(str: string) {
  return str
    .toLowerCase()
    .split(" ")
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
    .join(" ");
}
