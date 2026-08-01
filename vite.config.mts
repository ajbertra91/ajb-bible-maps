import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig(({ command, isPreview }) => ({
  base: command === "build" || isPreview ? "/ajb-bible-maps/" : "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        notFound: resolve(import.meta.dirname, "404.html"),
      },
    },
  },
}));
