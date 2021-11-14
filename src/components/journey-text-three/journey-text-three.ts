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

interface AJBBibleMapJourneyTextThree extends HTMLElement {
  journey: Journey;
  position: number;
  render: VoidFunction;
}

function AJBBibleMapJourneyTextThreeTemplate(
  host: AJBBibleMapJourneyTextThree
): TemplateResult {
  const showHideCss = {
    "p0-is-visible": host.position === 0,
    "p1-is-visible": host.position > 0 && host.position < 8.93,
  };
  return host.journey?.type === 3
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

const ajbBibleMapJourneyTextThreeElement: CustomElement<AJBBibleMapJourneyTextThree> =
  {
    journey: connect(scrollStore, scrollStoreJourneySelector),
    position: ({ journey }: AJBBibleMapJourneyTextThree): number => {
      const result = 0;
      if (journey?.type === 3) {
        return journey?.j3a?.position;
      }
      return result;
    },
    render: lit(AJBBibleMapJourneyTextThreeTemplate),
  };

define(
  "ajb-bible-map-journey-text-three",
  element(ajbBibleMapJourneyTextThreeElement)
);
export { ajbBibleMapJourneyTextThreeElement, AJBBibleMapJourneyTextThree };
