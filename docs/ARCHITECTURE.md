# AJB Bible Maps - Architecture

Interactive visualization of Paul's four missionary journeys from Acts. Scroll-driven narrative with map animation.

## High Level

```
Browser
  ├─ home.html + home.ts (entry)
  ├─ scroll events → store updates
  └─ render → components
  
Store (Redux-like)
  └─ Journey state (type, position, color per segment)
  
Components (Web Components + Lit HTML)
  ├─ bible-map (root container)
  ├─ base-map (SVG map rendering)
  └─ journey-text-{1-4} (text overlays, subscribe to store)
```

## File Structure

```
src/
  ├─ home.ts               Entry point, scroll listener, dispatches actions
  ├─ page-not-found.ts     404 page
  ├─ environment.ts        Config injection
  │
  ├─ components/
  │  ├─ bible-map/         Root container, composes all journey text + map
  │  ├─ base-map/          SVG map with path drawing for all 4 journeys
  │  ├─ journey-text-{1-4}/ Text overlay per journey, visibility keyed to scroll %
  │  ├─ nav/               Navigation (journey type selector)
  │  └─ common/
  │     └─ helpers/        Utility functions (case converters)
  │
  └─ providers/
     └─ scroll/            Store + selectors for scroll-driven state
        ├─ scroll-store.ts        Redux store instance
        ├─ scroll-store-model.ts  Journey, JourneyPart types
        ├─ scroll-store-actions.ts Mutations (updateJourney, updateJourneyType)
        └─ scroll-store-selectors.ts Queries
```

## Data Flow

1. User scrolls → scroll event fires
2. Event handler (home.ts) calculates scroll % complete
3. Dispatches `scrollStoreUpdateJourneyAction()` with position + color
4. Store updates state: `{ type, j1a, j1b, j2a, j3a, j4a }`
5. Components subscribe → re-render via Lit HTML

Journey state:
- `type`: 1-4 (which missionary journey selected)
- `j1a`, `j1b`: Part A & B of first journey (split at 50% scroll)
- `j2a`, `j3a`, `j4a`: Single part per journey
- Each part: `{ title, position (0-100%), color (red/gray) }`

## Components

### bible-map
Root component. Imports + renders all journey text + base-map. Custom element: `<ajb-bible-map>`.

### base-map
SVG rendering. Contains paths for all 4 journeys. Updates styles based on store position + color. Large file.

### journey-text-{1-4}
Text overlays (Bible verses from Acts). Visibility via CSS class binding keyed to scroll %. Subscribe to store. Template uses `classMap` directive to show/hide paragraphs at different scroll positions.

Example (journey-text-one):
- p0: Show at start (instructions)
- p1-p4: Acts 13 narrative (0-17.85%)
- p5-p8: Acts 13 continued (17.85-44%)
- p9-p13: Acts 14 narrative (44-100%)

### nav
Navigation. Selector to change journey type (1-4).

## Build

**TypeScript → dist/** (via `tsc`)
**Sass → public/** (via `node-sass` + `postcss` for autoprefixer)
**Rollup bundle** → production JS (legacy build enabled)

Entry: `home.html` → `home.ts` + compiled CSS
Output: Minified, polyfilled, multi-page support.

### Commands

- `npm run build` — Clean, lint, compile all (TS + CSS + bundle)
- `npm run bundle` — Bundle with Rollup (production)
- `npm run dev` — Build + watch (live reload via Rollup plugin)

## Dependencies

**Runtime:**
- `lit-html` — Template rendering
- `base-web-components-core` — Custom element def + lifecycle
- `base-web-components-lit-html` — Lit HTML adapter for base-web-components
- `base-web-components-store` — Redux store wrapper
- `base-ui-data-providers` — Store utilities
- `base-ui-utilities` — Type checks, helpers
- `micromodal` — Modal dialogs
- `svg-path-properties` — SVG path metrics

**Build:**
- Rollup + @open-wc/building-rollup
- TypeScript
- Sass + PostCSS
- ESLint + Prettier + Stylelint

## Key Patterns

**Web Components via base-web-components:**
```ts
const component = {
  render: lit(TemplateFunction)
};
define("custom-element-name", element(component));
```

**Store subscription:**
```ts
scrollStore.subscribe((state: ScrollStoreState) => {
  // Re-render on state change
});
```

**Connect component to store:**
```ts
import { connect } from "base-web-components-store";
// In component: connect(host, store, selector);
```

**Lit HTML + classMap for visibility:**
```ts
const showHideCss = {
  "is-visible": condition,
  "is-hidden": !condition
};
html`<p class="${classMap(showHideCss)}">Text</p>`;
```

## Environments

Config via `.env` file + `environments/*.template.js`. Rollup injects `CONTEXT_PATH` for static asset routing.

## Known State

- 4 journeys implemented (Acts 13-14, 18-19, 19-20, 27-28)
- First journey split into 2 parts (j1a, j1b) at 50% scroll
- Text keyed to specific scroll %, tightly coupled to scroll velocity
- SVG paths computed once on load
- No backend API (all data static)
