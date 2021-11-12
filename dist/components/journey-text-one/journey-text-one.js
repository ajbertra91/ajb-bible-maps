import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import { define, element } from "base-web-components-core";
import { lit } from "base-web-components-lit-html";
import { connect } from "base-web-components-store";
import "../base-map";
import { scrollStore, scrollStoreJourneySelector, } from "../../providers/scroll";
function AJBBibleMapJourneyTextOneTemplate(host) {
    console.log("host.position: ", host.position);
    const showHideCss = {
        "p0-is-visible": host.position === 0,
        "p1-is-visible": host.position > 0 && host.position < 44.0,
        "p2-is-visible": host.position > 0 && host.position <= 17.85,
        "p3-is-visible": host.position > 0 && host.position <= 17.85,
        "p4-is-visible": host.position > 0 && host.position <= 17.85,
        "p5-is-visible": host.position > 0 && host.position <= 17.85,
        "p6-is-visible": host.position > 17.85 && host.position <= 30.46,
        "p7-is-visible": host.position > 30.46 && host.position <= 37.5,
        "p8-is-visible": host.position > 37.5 && host.position <= 44.0,
        "p9-is-visible": host.position > 0 && host.position >= 44.0,
        "p10-is-visible": host.position > 44.0 && host.position <= 45.8,
        "p11-is-visible": host.position > 45.8 && host.position <= 50,
        "p12-is-visible": host.position > 50 && host.position <= 64.12,
        "p13-is-visible": host.position > 64.12 && host.position <= 100,
    };
    return host.journey?.type === 1
        ? html `
        <section class="ajb-bible-map__text-container p-2">
          <div class="ajb-bible-map__text-target position-absolute">
            <p
              class="ajb-bible-map__instructions mt-0 p0 ${classMap(showHideCss)}"
            >
              Scroll down to begin Paul's missionary journeys
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 mt-0 p1 ${classMap(showHideCss)}">
              <strong>Acts 13</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 mt-0 p2 ${classMap(showHideCss)}">
              Now there were in the church that was at
              <strong>Antioch</strong>...Barnabas...and Saul.[1]
            </p>
            <p class="ajb-text mt-0 mb-0 mt-0 p3 ${classMap(showHideCss)}">
              So they, being sent forth by the Holy Ghost, departed unto
              <strong>Seleucia</strong>; and from thence they sailed to
              Cyprus.[4]
            </p>
            <p class="ajb-text mt-0 mb-0 mt-0 p4 ${classMap(showHideCss)}">
              And when they were at <strong>Salamis</strong>, they preached the
              word of God...[5]
            </p>
            <p class="ajb-text mt-0 mb-0 mt-0 p5 ${classMap(showHideCss)}">
              And when they had gone through the isle unto
              <strong>Paphos</strong>...[6]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 mt-0 p1 ${classMap(showHideCss)}">
              <strong>Acts 13</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 mt-0 p6 ${classMap(showHideCss)}">
              Now when Paul and his company loosed from Paphos, they came to
              <strong>Perga</strong> in Pamphylia...[13]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 mt-0 p1 ${classMap(showHideCss)}">
              <strong>Acts 13</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 mt-0 p7 ${classMap(showHideCss)}">
              But when they departed from Perga, they came to
              <strong>Antioch</strong> in Pisidia, and went into the synagogue
              on the sabbath day...[14]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 mt-0 p1 ${classMap(showHideCss)}">
              <strong>Acts 13</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 mt-0 p8 ${classMap(showHideCss)}">
              But they shook off the dust of their feet against them, and came
              unto
              <strong>Iconium</strong>.[51]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 mt-0 p9 ${classMap(showHideCss)}">
              <strong>Acts 14</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 mt-0 p10 ${classMap(showHideCss)}">
              And when there was an assault made both of the Gentiles, and also
              of the Jews with their rulers, to use them despitefully, and to
              stone them, They were ware of it, and fled unto
              <strong>Lystra</strong> and <strong>Derbe</strong>, cities of
              Lycaonia, and unto the region that lieth round about: And there
              they preached the gospel...[5-7]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 mt-0 p9 ${classMap(showHideCss)}">
              <strong>Acts 14</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 mt-0 p11 ${classMap(showHideCss)}">
              And there came thither certain Jews from Antioch and Iconium, who
              persuaded the people, and, having stoned Paul, drew him out of the
              city, supposing he had been dead. Howbeit, as the disciples stood
              round about him, he rose up, and came into the city: and the next
              day he departed with Barnabas to <strong>Derbe</strong>.[19,20]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 mt-0 p9 ${classMap(showHideCss)}">
              <strong>Acts 14</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 mt-0 p12 ${classMap(showHideCss)}">
              And when they had preached the gospel to that city, and had taught
              many, they returned again to <strong>Lystra</strong>, and to
              <strong>Iconium</strong>, and <strong>Antioch</strong>...[21]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 mt-0 p9 ${classMap(showHideCss)}">
              <strong>Acts 14</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 mt-0 p13 ${classMap(showHideCss)}">
              And after they had passed throughout Pisidia, they came to
              Pamphylia. And when they had preached the word in
              <strong>Perga</strong>, they went down into
              <strong>Attalia</strong>: And thence sailed to
              <strong>Antioch</strong>...[24-26]
            </p>
          </div>
        </section>
      `
        : html ``;
}
const ajbBibleMapJourneyTextOneElement = {
    journey: connect(scrollStore, scrollStoreJourneySelector),
    position: ({ journey }) => {
        const result = 0;
        if (journey?.type === 1) {
            if (journey?.j1a?.position > 0 && journey?.j1a?.position < 100) {
                return journey?.j1a?.position / 2;
            }
            if (journey?.j1b?.position > 0 && journey?.j1b?.position <= 100) {
                return journey?.j1b?.position / 2 + 50;
            }
        }
        return result;
    },
    render: lit(AJBBibleMapJourneyTextOneTemplate),
};
define("ajb-bible-map-journey-text-one", element(ajbBibleMapJourneyTextOneElement));
export { ajbBibleMapJourneyTextOneElement };
