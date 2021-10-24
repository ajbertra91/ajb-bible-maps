import { createStore } from "base-web-components-store";
const scrollStore = createStore({
    journey: null,
    status: "READY",
    statusDetails: "",
});
export { scrollStore };
