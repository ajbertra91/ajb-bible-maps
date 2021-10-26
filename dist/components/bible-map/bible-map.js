import { html } from "lit-html";
import { define, element } from "base-web-components-core";
import { lit } from "base-web-components-lit-html";
import "../base-map";
import "../journey-text-one";
import "../journey-text-two";
import "../nav";
function AJBBibleMapTemplate() {
    return html `
    <section class="ajb-bible-map__map">
      <h1 class="ajb-bible-map__title">Bible Maps</h1>
      <ajb-bible-map-base-map></ajb-bible-map-base-map>
    </section>
    <ajb-bible-map-journey-text-one></ajb-bible-map-journey-text-one>
    <ajb-bible-map-journey-text-two></ajb-bible-map-journey-text-two>

    <ajb-bible-map-nav></ajb-bible-map-nav>
  `;
}
const ajbBibleMapElement = {
    render: lit(AJBBibleMapTemplate),
};
define("ajb-bible-map", element(ajbBibleMapElement));
export { ajbBibleMapElement };
