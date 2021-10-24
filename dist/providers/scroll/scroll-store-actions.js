import { scrollStore } from "./scroll-store";
export function scrollStoreResetAction() {
    scrollStore.resetState();
}
export function scrollStoreUpdateJourneyAction(part, journeyPart) {
    scrollStore.setState((state) => {
        return {
            ...state,
            ...{
                journey: {
                    ...state.journey,
                    [part]: journeyPart,
                },
            },
        };
    });
}
