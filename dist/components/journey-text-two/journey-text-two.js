import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import { define, element } from "base-web-components-core";
import { lit } from "base-web-components-lit-html";
import { connect } from "base-web-components-store";
import "../base-map";
import { scrollStore, scrollStoreJourneySelector, } from "../../providers/scroll";
function AJBBibleMapJourneyTextTwoTemplate(host) {
    console.log("host.position: ", host.position);
    const showHideCss = {
        "p0-is-visible": host.position === 0,
        "p1-is-visible": host.position > 0 && host.position < 8.93,
        "p2-is-visible": host.position > 0 && host.position <= 8.93,
        "p3-is-visible": host.position > 8.93 && host.position <= 15.26,
        "p4-is-visible": host.position > 8.93 && host.position <= 15.26,
        "p5-is-visible": host.position > 15.26 && host.position <= 29.56,
        "p6-is-visible": host.position > 29.56 && host.position <= 31.63,
        "p7-is-visible": host.position > 31.63 && host.position <= 34.23,
        "p8-is-visible": host.position > 34.23 && host.position <= 34.53,
        "p9-is-visible": host.position > 34.53 && host.position <= 37.52,
        "p10-is-visible": host.position > 37.52 && host.position <= 38.89,
        "p11-is-visible": host.position > 38.89 && host.position <= 50.42,
        "p12-is-visible": host.position > 50.42 && host.position <= 52.27,
        "p13-is-visible": host.position > 52.27 && host.position <= 61.95,
        "p14-is-visible": host.position > 61.95 && host.position <= 85.8,
        "p15-is-visible": host.position > 85.8 && host.position <= 88,
        "p16-is-visible": host.position > 88 && host.position <= 100,
    };
    return host.journey?.type === 2
        ? html `
    <section class="ajb-bible-map__text-target p-2">
      <div class="ajb-bible-map__text-target position-absolute">
        <p class="ajb-bible-map__instructions mt-0 p0 ${classMap(showHideCss)}">
          Scroll down to begin Paul's missionary journeys
        </p>
      </div>
      <div class="ajb-bible-map__text-target position-absolute">
        <p class="ajb-text mb-0 p1 ${classMap(showHideCss)}">
          <strong>Acts 15</strong> [KJV]
        </p>
        <p class="ajb-text mt-0 mb-0 p2 ${classMap(showHideCss)}">
          And Paul chose Silas, and departed, being recommended by the brethren unto the grace of God.[40]
        </p>
        <p class="ajb-text mt-0 mb-0 p2 ${classMap(showHideCss)}">
          And he went through Syria and Cilicia, confirming the churches.[41]
        </p>
      </div>
      <div class="ajb-bible-map__text-target position-absolute"></div>
        <p class="ajb-text mb-0 p4 ${classMap(showHideCss)}">
          <strong>Acts 16</strong> [KJV]
        </p>
        <p class="ajb-text mt-0 mb-0 p4 ${classMap(showHideCss)}">
          Then came he to Derbe and Lystra: and, behold, a certain disciple was there, named Timotheus...[1]
        </p>
        <p class="ajb-text mt-0 mb-0 p4 ${classMap(showHideCss)}">
          Him would Paul have to go forth with him...[3]
        </p>
        <p class="ajb-text mt-0 mb-0 p4 ${classMap(showHideCss)}">
          And as they went through the cities, they delivered them the decrees for to keep, that were ordained of the apostles and
          elders which were at Jerusalem. [4]
        </p>
        <p class="ajb-text mt-0 mb-0 p4 ${classMap(showHideCss)}">
          And so were the churches established in the faith, and increased in number daily.[5]
        </p>
      </div>
      <div class="ajb-bible-map__text-target position-absolute">
        <p class="ajb-text mb-0 p5 ${classMap(showHideCss)}">
          <strong>Acts 16</strong> [KJV]
        </p>
        <p class="ajb-text mt-0 mb-0 p5 ${classMap(showHideCss)}">
          Now when they had gone throughout Phrygia and the region of Galatia, and were forbidden of the Holy Ghost to preach the
          word in Asia,[6]
        </p>
        <p class="ajb-text mt-0 mb-0 p5 ${classMap(showHideCss)}">
          After they were come to Mysia, they assayed to go into Bithynia: but the Spirit suffered them not.[7]
        </p>
        <p class="ajb-text mt-0 mb-0 p5 ${classMap(showHideCss)}">
          And they passing by Mysia came down to Troas.[8]
        </p>
      </div>
      <div class="ajb-bible-map__text-target position-absolute">
        <p class="ajb-text mb-0 p6 ${classMap(showHideCss)}">
          <strong>Acts 16</strong> [KJV]
        </p>
        <p class="ajb-text mt-0 mb-0 p6 ${classMap(showHideCss)}">
          ...loosing from Troas, we came with a straight course to Samothracia...[11]
        </p>
        <p class="ajb-text mt-0 mb-0 p7 ${classMap(showHideCss)}">
          and the next day to Neapolis;[11]
        </p>
        <p class="ajb-text mt-0 mb-0 p8 ${classMap(showHideCss)}">
          And from thence to Philippi, which is the chief city of that part of Macedonia, and a colony: and we were in that city
          abiding certain days.[12]
        </p>
      </div>
      <div class="ajb-bible-map__text-target position-absolute">
        <p class="ajb-text mb-0 p9 ${classMap(showHideCss)}">
          <strong>Acts 16</strong> [KJV]
        </p>
        <p class="ajb-text mb-0 p9 ${classMap(showHideCss)}">
          ...they caught Paul and Silas, and drew them into the marketplace unto the rulers...[19]
        </p>
        <p class="ajb-text mb-0 p9 ${classMap(showHideCss)}">
          ...the magistrates rent off their clothes, and commanded to beat them....[22]
        </p>
        <p class="ajb-text mb-0 p9 ${classMap(showHideCss)}">
          ...And when they had laid many stripes upon them, they cast them into prison....[23]
        </p>
        <p class="ajb-text mb-0 p9 ${classMap(showHideCss)}">
          ...they came and besought them, and brought them out, and desired them to depart out of the city...[39]
        </p>
        <p class="ajb-text mb-0 p9 ${classMap(showHideCss)}">
          <strong>Acts 17</strong> [KJV]
        </p>
        <p class="ajb-text mb-0 p9 ${classMap(showHideCss)}">
          Now when they had passed through Amphipolis and Apollonia, they came to Thessalonica[1]
        </p>
      </div>
      <div class="ajb-bible-map__text-target position-absolute">
        <p class="ajb-text mb-0 p10 ${classMap(showHideCss)}">
          <strong>Acts 17</strong> [KJV]
        </p>
        <p class="ajb-text mb-0 p10 ${classMap(showHideCss)}">
          But the Jews which believed not, moved with envy, took unto them certain lewd fellows of the baser sort, and gathered a
          company, and set all the city on an uproar[5]
        </p>
        <p class="ajb-text mb-0 p10 ${classMap(showHideCss)}">
          And the brethren immediately sent away Paul and Silas by night unto Berea[10]
        </p>
      </div>
      <div class="ajb-bible-map__text-target position-absolute">
        <p class="ajb-text mb-0 p11 ${classMap(showHideCss)}">
          <strong>Acts 17</strong> [KJV]
        </p>
        <p class="ajb-text mb-0 p11 ${classMap(showHideCss)}">
          These were more noble than those in Thessalonica, in that they received the word with all readiness of mind, and searched
          the scriptures daily, whether those things were so.[11]
        </p>
        <p class="ajb-text mb-0 p11 ${classMap(showHideCss)}">
          But when the Jews of Thessalonica had knowledge that the word of God was preached of Paul at Berea, they came thither
          also, and stirred up the people.[13]
        </p>
        <p class="ajb-text mb-0 p11 ${classMap(showHideCss)}">
          And then immediately the brethren sent away Paul to go as it were to the sea...[14]
        </p>
        <p class="ajb-text mb-0 p11 ${classMap(showHideCss)}">
          And they that conducted Paul brought him unto Athens[15]
        </p>
      </div>
      <div class="ajb-bible-map__text-target position-absolute">
        <p class="ajb-text mb-0 p12 ${classMap(showHideCss)}">
          <strong>Acts 18</strong> [KJV]
        </p>
        <p class="ajb-text mb-0 p12 ${classMap(showHideCss)}">
          After these things Paul departed from Athens, and came to Corinth[1]
        </p>
        <p class="ajb-text mb-0 p12 ${classMap(showHideCss)}">
          And he continued there a year and six months, teaching the word of God among them. [11]
        </p>
      </div>
      <div class="ajb-bible-map__text-target position-absolute">
        <p class="ajb-text mb-0 p13 ${classMap(showHideCss)}">
          <strong>Acts 18</strong> [KJV]
        </p>
        <p class="ajb-text mb-0 p13 ${classMap(showHideCss)}">
          having shorn his head in Cenchrea: for he had a vow. [18] And he came to Ephesus[19]
        </p>
      </div>
      <div class="ajb-bible-map__text-target position-absolute">
        <p class="ajb-text mb-0 p14 ${classMap(showHideCss)}">
          <strong>Acts 18</strong> [KJV]
        </p>
        <p class="ajb-text mb-0 p14 ${classMap(showHideCss)}">
          ...he sailed from Ephesus.[21] And when he had landed at Caesarea[22]
        </p>
      </div>
      <div class="ajb-bible-map__text-target position-absolute">
        <p class="ajb-text mb-0 p15 ${classMap(showHideCss)}">
          <strong>Acts 18</strong> [KJV]
        </p>
        <p class="ajb-text mb-0 p15 ${classMap(showHideCss)}">
          ...gone up, and saluted the church...[22]
        </p>
      </div>
      <div class="ajb-bible-map__text-target position-absolute">
        <p class="ajb-text mb-0 p16 ${classMap(showHideCss)}">
          <strong>Acts 18</strong> [KJV]
        </p>
        <p class="ajb-text mb-0 p16 ${classMap(showHideCss)}">
          ...he went down to Antioch.[23]
        </p>
      </div>
    </section>
  `
        : html ``;
}
const ajbBibleMapJourneyTextTwoElement = {
    journey: connect(scrollStore, scrollStoreJourneySelector),
    position: ({ journey }) => {
        const result = 0;
        if (journey?.type === 2) {
            return journey?.j2a?.position;
        }
        return result;
    },
    render: lit(AJBBibleMapJourneyTextTwoTemplate),
};
define("ajb-bible-map-journey-text-two", element(ajbBibleMapJourneyTextTwoElement));
export { ajbBibleMapJourneyTextTwoElement };
