import { is } from "base-ui-utilities/lib/is-type";

export function changeCaseTitle(str: string): string {
  if (is.nil(str)) return "";

  const result = str.toLowerCase().replace(/\-+/g, " ").split(" ");
  for (let i = 0; i < result.length; i++) {
    result[i] = result[i][0].toUpperCase() + result[i].slice(1);
  }
  return result.join(" ");
}
