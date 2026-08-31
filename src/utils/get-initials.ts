export default function getInitials(name: string) {
  const nameParts = name.split(/\s+/);
  const initials =
    nameParts.length > 1
      ? `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase()
      : nameParts[0][0].toUpperCase();
  return initials;
}
