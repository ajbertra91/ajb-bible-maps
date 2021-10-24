import "./components";
import { scrollStoreUpdateJourneyAction } from "./providers/scroll";
// import "./bootstrap";

window.addEventListener("scroll", () => {
  const scrollY: number = window.scrollY;
  const innerHeight: number = window.innerHeight;
  const clientHeight: number = document.querySelector("body").clientHeight;
  const pctComplete: number = (scrollY / (clientHeight - innerHeight)) * 100;

  console.log("pctComplete: ", pctComplete);

  let title: string = "";
  let position: number = 0;
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
});
