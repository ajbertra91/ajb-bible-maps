import { svg } from "lit-html";
import { svgPathProperties } from "svg-path-properties";
export function getSVGPath(color, path, position) {
    const length = new svgPathProperties(path).getTotalLength();
    const currentLength = (length * position) / 100;
    return svg `
    <path
      class="journey-path"
      d="${path}"
      style="fill:none;"
      stroke="${color}"
      stroke-width="3"
      stroke-dashoffset="${length - currentLength}"
      stroke-dasharray="${length}"
      stroke-linecap="round"
      fill-rule="nonzero"
    ></path>
  `;
}
