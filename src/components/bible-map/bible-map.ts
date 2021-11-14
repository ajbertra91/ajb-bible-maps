import { html, TemplateResult } from "lit-html";
import { define, element, CustomElement } from "base-web-components-core";
import { lit } from "base-web-components-lit-html";
import "../base-map";
import "../journey-text-one";
import "../journey-text-two";
import "../journey-text-three";
import "../journey-text-four";
import "../nav";

interface AJBBibleMap extends HTMLElement {
  render: VoidFunction;
}

function AJBBibleMapTemplate(): TemplateResult {
  return html`
    <section class="ajb-bible-map__map">
      <h1 class="ajb-bible-map__title">Bible Maps</h1>
      <ajb-bible-map-base-map></ajb-bible-map-base-map>
    </section>
    <ajb-bible-map-journey-text-one></ajb-bible-map-journey-text-one>
    <ajb-bible-map-journey-text-two></ajb-bible-map-journey-text-two>
    <ajb-bible-map-journey-text-three></ajb-bible-map-journey-text-three>
    <ajb-bible-map-journey-text-four></ajb-bible-map-journey-text-four>

    <ajb-bible-map-nav></ajb-bible-map-nav>
  `;
}

const ajbBibleMapElement: CustomElement<AJBBibleMap> = {
  render: lit(AJBBibleMapTemplate),
};

define("ajb-bible-map", element(ajbBibleMapElement));
export { ajbBibleMapElement, AJBBibleMap };
