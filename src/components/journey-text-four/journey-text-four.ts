import { html, TemplateResult } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import { define, element, CustomElement } from "base-web-components-core";
import { lit } from "base-web-components-lit-html";
import { connect } from "base-web-components-store";
import "../base-map";
import { Journey } from "../../providers/scroll/scroll-store-model";
import {
  scrollStore,
  scrollStoreJourneySelector,
} from "../../providers/scroll";

interface AJBBibleMapJourneyTextFour extends HTMLElement {
  journey: Journey;
  position: number;
  render: VoidFunction;
}

function AJBBibleMapJourneyTextFourTemplate(
  host: AJBBibleMapJourneyTextFour
): TemplateResult {
  const showHideCss = {
    "p0-is-visible": host.position === 0,
    "p1-is-visible": host.position > 0 && host.position < 8.93,
  };
  return host.journey?.type === 4
    ? html`
        <section class="ajb-bible-map__text-container p-0">
          <div class="ajb-bible-map__text-target position-absolute">
            <p
              class="ajb-bible-map__instructions mt-0 p0 ${classMap(
                showHideCss
              )}"
            >
              Scroll down to begin Paul's missionary journeys
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p1 ${classMap(showHideCss)}">
              <strong>Acts 21</strong> [KJV]
            </p>
          </div>
        </section>
      `
    : html``;
}

const ajbBibleMapJourneyTextFourElement: CustomElement<AJBBibleMapJourneyTextFour> =
  {
    journey: connect(scrollStore, scrollStoreJourneySelector),
    position: ({ journey }: AJBBibleMapJourneyTextFour): number => {
      const result = 0;
      if (journey?.type === 4) {
        return journey?.j4a?.position;
      }
      return result;
    },
    render: lit(AJBBibleMapJourneyTextFourTemplate),
  };

define(
  "ajb-bible-map-journey-text-four",
  element(ajbBibleMapJourneyTextFourElement)
);
export { ajbBibleMapJourneyTextFourElement, AJBBibleMapJourneyTextFour };
