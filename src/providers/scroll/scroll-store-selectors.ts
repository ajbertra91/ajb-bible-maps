import { ScrollStoreState } from "./scroll-store";
import { Journey } from "./scroll-store-model";

function scrollStoreJourneySelector(state: ScrollStoreState): Journey {
  return state?.journey;
}

export { scrollStoreJourneySelector };
