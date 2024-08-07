// eslint-disable-next-line no-undef
module.exports = {
  e2e: {
    "tags": "@e2e",
    "dryRun": false,
    "formatOptions": {
      "snippetInterface": "async-await"
    },
    "paths": [
      "./src/tests/features/**/*.feature"
    ],
    "require": [
      "./src/tests/steps/**/*.ts",
      "./src/tests/hooks/hooks.ts"
    ],
    "requireModule": [
      "ts-node/register"
    ],
    "format": [],
    "publishQuiet": false,
    "parallel": 1
  }
}