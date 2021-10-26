import { scrollStore, ScrollStoreState } from "./scroll-store";
import { JourneyPart, JPart } from "./scroll-store-model";

export function scrollStoreResetAction(): void {
  scrollStore.resetState();
}

export function scrollStoreUpdateJourneyTypeAction(type: number): void {
  scrollStore.setState((state: ScrollStoreState): ScrollStoreState => {
    return {
      ...state,
      ...{
        journey: {
          ...state.journey,
          type,
        },
      },
      status: "READY",
    };
  });
}

export function scrollStoreUpdateJourneyAction(
  part: JPart,
  journeyPart: JourneyPart
): void {
  scrollStore.setState((state: ScrollStoreState): ScrollStoreState => {
    return {
      ...state,
      ...{
        journey: {
          ...state.journey,
          [part]: journeyPart,
        },
        status: "READY",
      },
    };
  });
}
