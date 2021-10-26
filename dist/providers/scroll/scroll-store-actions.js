import { scrollStore } from "./scroll-store";
export function scrollStoreResetAction() {
    scrollStore.resetState();
}
export function scrollStoreUpdateJourneyTypeAction(type) {
    scrollStore.setState((state) => {
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
export function scrollStoreUpdateJourneyAction(part, journeyPart) {
    scrollStore.setState((state) => {
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
