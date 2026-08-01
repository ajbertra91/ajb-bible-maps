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
  host: AJBBibleMapJourneyTextThree,
): TemplateResult {
  const showHideCss = {
    "p0-is-visible": host.position === 0,
    "p1-is-visible": host.position > 0 && host.position <= 5,
    "p2-is-visible": host.position > 0 && host.position <= 5,
    "p3-is-visible": host.position > 5 && host.position <= 25,
    "p4-is-visible": host.position > 5 && host.position <= 10,
    "p5-is-visible": host.position > 10 && host.position <= 15,
    "p6-is-visible": host.position > 15 && host.position <= 20,
    "p7-is-visible": host.position > 20 && host.position <= 25,
    "p8-is-visible": host.position > 25 && host.position <= 65,
    "p9-is-visible": host.position > 25 && host.position <= 30,
    "p10-is-visible": host.position > 30 && host.position <= 35,
    "p11-is-visible": host.position > 35 && host.position <= 40,
    "p12-is-visible": host.position > 40 && host.position <= 45,
    "p13-is-visible": host.position > 45 && host.position <= 50,
    "p14-is-visible": host.position > 50 && host.position <= 55,
    "p15-is-visible": host.position > 55 && host.position <= 60,
    "p16-is-visible": host.position > 60 && host.position <= 65,
    "p17-is-visible": host.position > 65 && host.position <= 100,
    "p18-is-visible": host.position > 65 && host.position <= 70,
    "p19-is-visible": host.position > 70 && host.position <= 75,
    "p20-is-visible": host.position > 75 && host.position <= 80,
    "p21-is-visible": host.position > 80 && host.position <= 85,
    "p22-is-visible": host.position > 85 && host.position <= 90,
    "p23-is-visible": host.position > 90 && host.position <= 95,
    "p24-is-visible": host.position > 95 && host.position <= 100,
  };
  return host.journey?.type === 3
    ? html`
        <section class="ajb-bible-map__text-container p-0">
          <div class="ajb-bible-map__text-target position-absolute">
            <p
              class="ajb-bible-map__instructions mt-0 p0 ${classMap(
                showHideCss,
              )}"
            >
              Scroll down to begin Paul's missionary journeys
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p1 ${classMap(showHideCss)}">
              <strong>Acts 18</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p2 ${classMap(showHideCss)}">
              And after he had spent some time there, he departed, and went over
              all the country of <strong>Galatia</strong> and
              <strong>Phrygia</strong> in order, strengthening all the
              disciples.[23]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p3 ${classMap(showHideCss)}">
              <strong>Acts 19</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p4 ${classMap(showHideCss)}">
              Paul having passed through the upper coasts came to
              <strong>Ephesus</strong>: and finding certain disciples[1]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p3 ${classMap(showHideCss)}">
              <strong>Acts 19</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p5 ${classMap(showHideCss)}">
              And he went into the synagogue, and spake boldly for the space of
              three months, disputing and persuading the things concerning the
              kingdom of God.[8]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p3 ${classMap(showHideCss)}">
              <strong>Acts 19</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p6 ${classMap(showHideCss)}">
              ...he departed from them, and separated the disciples, disputing
              daily in the school of one Tyrannus.[9] And this continued by the
              space of two years; so that all they which dwelt in Asia heard the
              word of the Lord Jesus, both Jews and Greeks.[10]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p3 ${classMap(showHideCss)}">
              <strong>Acts 19</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p7 ${classMap(showHideCss)}">
              And the same time there arose no small stir about that way.[23]
              For a certain man named Demetrius, a silversmith, which made
              silver shrines for Diana, brought no small gain unto the
              craftsmen[24]...they were full of wrath, and cried out, saying,
              Great is Diana of the <strong>Ephesians</strong>.[28]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p8 ${classMap(showHideCss)}">
              <strong>Acts 20</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p9 ${classMap(showHideCss)}">
              And after the uproar was ceased, Paul called unto him the
              disciples, and embraced them, and departed for to go into
              <strong>Macedonia</strong>.[1]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p8 ${classMap(showHideCss)}">
              <strong>Acts 20</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p10 ${classMap(showHideCss)}">
              And when he had gone over those parts, and had given them much
              exhortation, he came into <strong>Greece</strong>[2]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p8 ${classMap(showHideCss)}">
              <strong>Acts 20</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p11 ${classMap(showHideCss)}">
              And there abode three months. And when the Jews laid wait for him,
              as he was about to sail into Syria, he purposed to return through
              <strong>Macedonia</strong>.[3]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p8 ${classMap(showHideCss)}">
              <strong>Acts 20</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p12 ${classMap(showHideCss)}">
              And we sailed away from Philippi...and came unto them to
              <strong>Troas</strong> in five days; where we abode seven days.[6]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p8 ${classMap(showHideCss)}">
              <strong>Acts 20</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p13 ${classMap(showHideCss)}">
              And there sat in a window a certain young man named Eutychus...
              and as Paul was long preaching, he sunk down...[9] And Paul went
              down, and fell on him, and embracing him said, Trouble not
              yourselves; for his life is in him.[10]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p8 ${classMap(showHideCss)}">
              <strong>Acts 20</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p14 ${classMap(showHideCss)}">
              ...we sailed unto <strong>Assos</strong>...[13] And when he met
              with us at Assos, we took him in, and came to
              <strong>Mitylene</strong>.[14]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p8 ${classMap(showHideCss)}">
              <strong>Acts 20</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p15 ${classMap(showHideCss)}">
              And we sailed thence, and came the next day over against
              <strong>Chios</strong>; and the next day we arrived at
              <strong>Samos</strong>, and tarried at Trogyllium; and the next
              day we came to <strong>Miletus</strong>.[15]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p8 ${classMap(showHideCss)}">
              <strong>Acts 20</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p16 ${classMap(showHideCss)}">
              And from Miletus he sent to Ephesus, and called the elders of the
              church.[17] ...they all wept sore, and fell on Paul's neck, and
              kissed him,[37] Sorrowing most of all for the words which he
              spake, that they should see his face no more.[38]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p17 ${classMap(showHideCss)}">
              <strong>Acts 21</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p18 ${classMap(showHideCss)}">
              ...we came with a straight course unto Coos, and the day following
              unto <strong>Rhodes</strong>, and from thence unto
              <strong>Patara</strong>[1]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p17 ${classMap(showHideCss)}">
              <strong>Acts 21</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p19 ${classMap(showHideCss)}">
              And finding a ship sailing over unto Phenicia, we went aboard, and
              set forth.[2] Now when we had discovered Cyprus...we sailed into
              Syria, and landed at <strong>Tyre</strong>: for there the ship was
              to unlade her burden.[3]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p17 ${classMap(showHideCss)}">
              <strong>Acts 21</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p20 ${classMap(showHideCss)}">
              And finding disciples, we tarried there seven days: who said to
              Paul through the Spirit, that he should not go up to Jerusalem.[4]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p17 ${classMap(showHideCss)}">
              <strong>Acts 21</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p21 ${classMap(showHideCss)}">
              And when we had finished our course from Tyre, we came to
              <strong>Ptolemais</strong>, and saluted the brethren, and abode
              with them one day.[7]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p17 ${classMap(showHideCss)}">
              <strong>Acts 21</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p22 ${classMap(showHideCss)}">
              And the next day...we came unto
              <strong>Caesarea</strong>: and we entered into the house of Philip
              the evangelist...and abode with him.[8]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p17 ${classMap(showHideCss)}">
              <strong>Acts 21</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p23 ${classMap(showHideCss)}">
              ...there came down from Judaea a certain prophet, named
              Agabus.[10] And when he was come unto us, he took Paul's girdle,
              and bound his own hands and feet, and said, Thus saith the Holy
              Ghost, So shall the Jews at Jerusalem bind the man that owneth
              this girdle, and shall deliver him into the hands of the
              Gentiles.[11]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p17 ${classMap(showHideCss)}">
              <strong>Acts 21</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p24 ${classMap(showHideCss)}">
              Then Paul answered, What mean ye to weep and to break mine heart?
              for I am ready not to be bound only, but also to die at Jerusalem
              for the name of the Lord Jesus.[13] ...we took up our carriages,
              and went up to <strong>Jerusalem</strong>.[15] ...the brethren
              received us gladly.[17]
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
  element(ajbBibleMapJourneyTextThreeElement),
);
export { ajbBibleMapJourneyTextThreeElement, type AJBBibleMapJourneyTextThree };
