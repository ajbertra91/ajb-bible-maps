import "./components";
import { scrollStoreUpdateJourneyAction } from "./providers/scroll";
// import "./bootstrap";
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;
    const clientHeight = document.querySelector("body").clientHeight;
    const pctComplete = (scrollY / (clientHeight - innerHeight)) * 100;
    console.log("pctComplete: ", pctComplete);
    let title = "";
    let position = 0;
    if (pctComplete <= 50) {
        title = "paul-first-journey";
        position = (pctComplete * 100) / 50;
        scrollStoreUpdateJourneyAction("j1a", { title, position, color: "red" });
        scrollStoreUpdateJourneyAction("j1b", {
            title,
            position: 0,
            color: "gray",
        });
    }
    else if (pctComplete > 50) {
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
