export function truncateString(str: string, maxLength: number) {
  if (!str) return "";
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  }
  return str;
}
