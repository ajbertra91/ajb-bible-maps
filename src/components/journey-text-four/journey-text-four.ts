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
  host: AJBBibleMapJourneyTextFour,
): TemplateResult {
  const showHideCss = {
    "p0-is-visible": host.position === 0,
    "p1-is-visible": host.position > 0 && host.position <= 50,
    "p2-is-visible": host.position > 0 && host.position <= 5,
    "p3-is-visible": host.position > 5 && host.position <= 10,
    "p4-is-visible": host.position > 10 && host.position <= 15,
    "p5-is-visible": host.position > 15 && host.position <= 20,
    "p6-is-visible": host.position > 20 && host.position <= 25,
    "p7-is-visible": host.position > 25 && host.position <= 30,
    "p8-is-visible": host.position > 30 && host.position <= 35,
    "p9-is-visible": host.position > 35 && host.position <= 40,
    "p10-is-visible": host.position > 40 && host.position <= 45,
    "p11-is-visible": host.position > 45 && host.position <= 50,
    "p12-is-visible": host.position > 50 && host.position <= 100,
    "p13-is-visible": host.position > 50 && host.position <= 55,
    "p14-is-visible": host.position > 55 && host.position <= 60,
    "p15-is-visible": host.position > 60 && host.position <= 65,
    "p16-is-visible": host.position > 65 && host.position <= 70,
    "p17-is-visible": host.position > 70 && host.position <= 75,
    "p18-is-visible": host.position > 75 && host.position <= 80,
    "p19-is-visible": host.position > 80 && host.position <= 85,
    "p20-is-visible": host.position > 85 && host.position <= 90,
    "p21-is-visible": host.position > 90 && host.position <= 95,
    "p22-is-visible": host.position > 95 && host.position <= 100,
  };
  return host.journey?.type === 4
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
              <strong>Acts 27</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p2 ${classMap(showHideCss)}">
              And when it was determined that we should sail into Italy, they
              delivered Paul and certain other prisoners unto one named Julius,
              a centurion of Augustus' band.[1] And entering into a ship of
              Adramyttium, we launched...one Aristarchus, a Macedonian of
              Thessalonica, being with us.[2]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p1 ${classMap(showHideCss)}">
              <strong>Acts 27</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p3 ${classMap(showHideCss)}">
              And the next day we touched at <strong>Sidon</strong>. And Julius
              courteously entreated Paul, and gave him liberty to go unto his
              friends to refresh himself.[3]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p1 ${classMap(showHideCss)}">
              <strong>Acts 27</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p4 ${classMap(showHideCss)}">
              And when we had launched from thence, we sailed under
              <strong>Cyprus</strong>, because the winds were contrary.[4] And
              when we had sailed over the sea of Cilicia and Pamphylia, we came
              to <strong>Myra</strong>, a city of Lycia.[5]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p1 ${classMap(showHideCss)}">
              <strong>Acts 27</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p5 ${classMap(showHideCss)}">
              And there the centurion found a ship of Alexandria sailing into
              Italy; and he put us therein.[6] ...scarce were come over against
              Cnidus...we sailed under Crete, over against Salmone[7]...came
              unto a place which is called The
              <strong>fair havens</strong>; nigh whereunto was the city of
              <strong>Lasea</strong>.[8]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p1 ${classMap(showHideCss)}">
              <strong>Acts 27</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p6 ${classMap(showHideCss)}">
              ...Paul admonished them,[9] And said unto them, Sirs, I perceive
              that this voyage will be with hurt and much damage, not only of
              the lading and ship, but also of our lives.[10]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p1 ${classMap(showHideCss)}">
              <strong>Acts 27</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p7 ${classMap(showHideCss)}">
              ...there arose against it a tempestuous wind, called
              Euroclydon.[14] And when the ship was caught, and could not bear
              up into the wind, we let her drive.[15] ...neither sun nor stars
              in many days appeared...all hope that we should be saved was then
              taken away.[20]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p1 ${classMap(showHideCss)}">
              <strong>Acts 27</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p8 ${classMap(showHideCss)}">
              And now I exhort you to be of good cheer: for there shall be no
              loss of any man's life among you, but of the ship.[22] For there
              stood by me this night the angel of God...[23] Saying, Fear not,
              Paul; thou must be brought before Caesar: and, lo, God hath given
              thee all them that sail with thee.[24]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p1 ${classMap(showHideCss)}">
              <strong>Acts 27</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p9 ${classMap(showHideCss)}">
              But when the fourteenth night was come, as we were driven up and
              down in <strong>Adria</strong>, about midnight the shipmen deemed
              that they drew near to some country.[27]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p1 ${classMap(showHideCss)}">
              <strong>Acts 27</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p10 ${classMap(showHideCss)}">
              ...Paul besought them all to take meat...[33] Wherefore I pray you
              to take some meat: for this is for your health: for there shall
              not an hair fall from the head of any of you.[34]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p1 ${classMap(showHideCss)}">
              <strong>Acts 27</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p11 ${classMap(showHideCss)}">
              ...they ran the ship aground; and the forepart stuck fast, and
              remained unmoveable, but the hinder part was broken with the
              violence of the waves.[41] ...they escaped all safe to land.[44]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p12 ${classMap(showHideCss)}">
              <strong>Acts 28</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p13 ${classMap(showHideCss)}">
              And when they were escaped, then they knew that the island was
              called <strong>Melita</strong>.[1] And the barbarous people shewed
              us no little kindness: for they kindled a fire, and received us
              every one, because of the present rain, and because of the
              cold.[2]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p12 ${classMap(showHideCss)}">
              <strong>Acts 28</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p14 ${classMap(showHideCss)}">
              ...there came a viper out of the heat, and fastened on his
              hand.[3] ...he shook off the beast into the fire, and felt no
              harm.[5] ...they changed their minds, and said that he was a
              god.[6]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p12 ${classMap(showHideCss)}">
              <strong>Acts 28</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p15 ${classMap(showHideCss)}">
              ...possessions of the chief man of the island, whose name was
              Publius; who received us, and lodged us three days courteously.[7]
              ...the father of Publius lay sick of a fever and of a bloody flux:
              to whom Paul entered in, and prayed, and laid his hands on him,
              and healed him.[8]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p12 ${classMap(showHideCss)}">
              <strong>Acts 28</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p16 ${classMap(showHideCss)}">
              Who also honoured us with many honours; and when we departed, they
              laded us with such things as were necessary.[10] And after three
              months we departed in a ship of Alexandria, which had wintered in
              the isle, whose sign was Castor and Pollux.[11]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p12 ${classMap(showHideCss)}">
              <strong>Acts 28</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p17 ${classMap(showHideCss)}">
              And landing at <strong>Syracuse</strong>, we tarried there three
              days.[12] And from thence we fetched a compass, and came to
              <strong>Rhegium</strong>...the south wind blew, and we came the
              next day to <strong>Puteoli</strong>[13]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p12 ${classMap(showHideCss)}">
              <strong>Acts 28</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p18 ${classMap(showHideCss)}">
              Where we found brethren, and were desired to tarry with them seven
              days: and so we went toward Rome.[14] ...the brethren heard of us,
              they came to meet us as far as
              <strong>Appii forum</strong>, and
              <strong>The three taverns</strong>: whom when Paul saw, he thanked
              God, and took courage.[15]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p12 ${classMap(showHideCss)}">
              <strong>Acts 28</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p19 ${classMap(showHideCss)}">
              And when we came to <strong>Rome</strong>, the centurion delivered
              the prisoners to the captain of the guard: but Paul was suffered
              to dwell by himself with a soldier that kept him.[16]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p12 ${classMap(showHideCss)}">
              <strong>Acts 28</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p20 ${classMap(showHideCss)}">
              ...Paul called the chief of the Jews together...[17] For this
              cause therefore have I called for you, to see you, and to speak
              with you: because that for the hope of Israel I am bound with this
              chain.[20]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p12 ${classMap(showHideCss)}">
              <strong>Acts 28</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p21 ${classMap(showHideCss)}">
              ...there came many to him into his lodging; to whom he expounded
              and testified the kingdom of God, persuading them concerning
              Jesus, both out of the law of Moses, and out of the prophets, from
              morning till evening.[23] And some believed the things which were
              spoken, and some believed not.[24]
            </p>
          </div>
          <div class="ajb-bible-map__text-target position-absolute">
            <p class="ajb-text mb-0 p12 ${classMap(showHideCss)}">
              <strong>Acts 28</strong> [KJV]
            </p>
            <p class="ajb-text mt-0 mb-0 p22 ${classMap(showHideCss)}">
              And Paul dwelt two whole years in his own hired house, and
              received all that came in unto him,[30] Preaching the kingdom of
              God, and teaching those things which concern the Lord Jesus
              Christ, with all confidence, no man forbidding him.[31]
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
  element(ajbBibleMapJourneyTextFourElement),
);
export { ajbBibleMapJourneyTextFourElement, type AJBBibleMapJourneyTextFour };
