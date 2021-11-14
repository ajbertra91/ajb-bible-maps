import { is } from "base-ui-utilities/lib/is-type";
import "./components";
import {
  scrollStore,
  ScrollStoreState,
  scrollStoreUpdateJourneyAction,
  scrollStoreUpdateJourneyTypeAction,
} from "./providers/scroll";

scrollStoreUpdateJourneyTypeAction(1);

scrollStore.subscribe((state: ScrollStoreState): void => {
  if (is.nil(state.journey)) {
    window.scrollTo({ top: 0, left: 0 });
  }
});

window.addEventListener("scroll", () => {
  const type = scrollStore.getState()?.journey?.type;

  const scrollY: number = window.scrollY;
  const innerHeight: number = window.innerHeight;
  const clientHeight: number = document.querySelector("body").clientHeight;
  const pctComplete: number = (scrollY / (clientHeight - innerHeight)) * 100;

  console.log("pctComplete: ", pctComplete);

  let title: string = "";
  let position: number = 0;
  if (type === 1) {
    if (pctComplete <= 50) {
      title = "paul-first-journey";
      position = (pctComplete * 100) / 50;
      scrollStoreUpdateJourneyAction("j1a", { title, position, color: "red" });
      scrollStoreUpdateJourneyAction("j1b", {
        title,
        position: 0,
        color: "gray",
      });
    } else if (pctComplete > 50) {
      title = "paul-first-journey";
      position = ((pctComplete - 50) * 100) / 50;
      scrollStoreUpdateJourneyAction("j1a", {
        title,
        position: 100,
        color: "gray",
      });
      scrollStoreUpdateJourneyAction("j1b", { title, position, color: "red" });
    }
  } else if (type === 2) {
    title = "paul-second-journey";
    position = pctComplete;
    scrollStoreUpdateJourneyAction("j2a", { title, position, color: "red" });
  } else if (type === 3) {
    title = "paul-third-journey";
    position = pctComplete;
    scrollStoreUpdateJourneyAction("j3a", { title, position, color: "red" });
  } else if (type === 4) {
    title = "paul-fourth-journey";
    position = pctComplete;
    scrollStoreUpdateJourneyAction("j4a", { title, position, color: "red" });
  }
});
