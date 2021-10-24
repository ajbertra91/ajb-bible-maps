import { config as dconfig } from "dotenv-flow";
import livereload from "rollup-plugin-livereload";
import { createMpaConfig } from "@open-wc/building-rollup";
import deepmerge from "deepmerge";
dconfig({});

const baseConfig = createMpaConfig({
  developmentMode: false, // set to true to disable code minify
  legacyBuild: true,
  outputDir: "public",
  polyfillsLoader: {
    polyfills: {
      coreJs: true,
      fetch: true,
      systemjs: true,
      webcomponents: true
    }
  },
  html: {
    minify: false,
    flatten: true,
    inject: false,
    publicPath: `${process.env.CONTEXT_PATH}`,
    transform: [
      html => html.replace(/.\/polyfills/g, `${process.env.CONTEXT_PATH}/polyfills`),
      html => html.replace("polyfills/core-js", `${process.env.CONTEXT_PATH}/polyfills/core-js`),
      html => html.replace(`crossorigin="anonymous"`, `crossorigin="use-credentials"`),
      // html => html.replace("home.css", `${process.env.CONTEXT_PATH}/home.css`),
    ]
  },
  injectServiceWorker: false,
  workbox: false
});

const development = process.env.ROLLUP_WATCH;
// Watch the public/ directory and refresh the browser on changes when not in production
development && baseConfig.plugins.push(livereload("public"));

baseConfig.output[0].sourcemap = false;
baseConfig.output[1].sourcemap = false;
const config = [];
["home", "page-not-found"].forEach(page => {
  config.push(
    deepmerge(baseConfig, {
      input: `./dist/${page}.html`
    })
  );
});
export default config;