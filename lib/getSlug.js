import { createRequire } from "module";

const require = createRequire(import.meta.url);

// const { slugify } = require("transliteration");
const uslug = require("uslug");

/**
 * @name getSlug
 * @summary Return a slugified string using "slugify" from transliteration
 * @see https://www.npmjs.com/package/transliteration
 * @memberof Utils
 * @param {String} slugString - string to slugify
 * @returns {String} slugified string
 */
export default function getSlug(slugString) {
  return (typeof slugString === "string" && uslug(slugString)) || "";
}
