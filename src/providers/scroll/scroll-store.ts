import { createStore, StatusStoreState } from "base-web-components-store";
import { Journey } from "./scroll-store-model";

interface ScrollStoreState extends StatusStoreState {
  journey: Journey | null;
}

const scrollStore = createStore<ScrollStoreState>({
  journey: null,
  status: "READY",
  statusDetails: "",
});

export { scrollStore, ScrollStoreState };
