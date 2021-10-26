import { html, TemplateResult } from "lit-html";
import { define, element, CustomElement } from "base-web-components-core";
import { lit } from "base-web-components-lit-html";
import {
  scrollStore,
  scrollStoreUpdateJourneyTypeAction,
} from "../../providers/scroll";

interface AJBBibleMapNav extends HTMLElement {
  render: VoidFunction;
}

function handleClick(e: Event, type: number): void {
  e.preventDefault();
  scrollStore.resetState();
  scrollStoreUpdateJourneyTypeAction(type);
}

function AJBBibleMapNavTemplate(): TemplateResult {
  return html`
    <section class="ajb-bible-map__nav">
      <input
        type="checkbox"
        href="#"
        class="menu-open"
        name="menu-open"
        id="menu-open"
      />
      <label class="menu-open-button" for="menu-open">
        <span class="hamburger hamburger-1"></span>
        <span class="hamburger hamburger-2"></span>
        <span class="hamburger hamburger-3"></span>
      </label>

      <a href="#" class="menu-item" @click="${(e: Event) => handleClick(e, 1)}">
        <i class="fa fa-bar-chart"></i>
      </a>
      <a href="#" class="menu-item" @click="${(e: Event) => handleClick(e, 2)}">
        <i class="fa fa-plus"></i>
      </a>
      <a href="#" class="menu-item" @click="${(e: Event) => handleClick(e, 3)}">
        <i class="fa fa-heart"></i>
      </a>
      <a href="#" class="menu-item" @click="${(e: Event) => handleClick(e, 4)}">
        <i class="fa fa-envelope"></i>
      </a>

      <!-- filters -->
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="shadowed-goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="10"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
            <feColorMatrix
              in="shadow"
              mode="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2"
              result="shadow"
            />
            <feOffset in="shadow" dx="1" dy="1" result="shadow" />
            <feComposite in2="shadow" in="goo" result="goo" />
            <feComposite in2="goo" in="SourceGraphic" result="mix" />
          </filter>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="10"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feComposite in2="goo" in="SourceGraphic" result="mix" />
          </filter>
        </defs>
      </svg>
    </section>
  `;
}

const ajbBibleMapNavElement: CustomElement<AJBBibleMapNav> = {
  render: lit(AJBBibleMapNavTemplate),
};

define("ajb-bible-map-nav", element(ajbBibleMapNavElement));
export { ajbBibleMapNavElement, AJBBibleMapNav };
