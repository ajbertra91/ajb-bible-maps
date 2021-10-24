export function changeCaseKebab(str: string): string {
  return str
    .replace(/\s+/g, "-")
    .replace(/[{()}]/g, "")
    .toLowerCase();
}
