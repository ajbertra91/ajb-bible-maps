const globby = require("globby");
const rimraf = require("rimraf");

globby(["dist/", "public/*.{js,css,html}", "!public/environment.js"])
  .then(function then(paths) {
    paths.map(function map(item) {
      rimraf.sync(item)
    });
  });