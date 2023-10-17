import * as _Plot from "npm:@observablehq/plot@0.6.11";

import { DOMParser } from "npm:linkedom";
const document = new DOMParser().parseFromString(
  `<!DOCTYPE html><html lang="en"></html>`,
  "text/html",
);

export const Plot = new Proxy(_Plot, {
  get: function (target, prop, receiver) {
    if (typeof target[prop] === "function") {
      return function (...args) {
        const result = target[prop].apply(this, args);
        if (typeof result.plot === "function") {
          const originalPlot = result.plot;
          result.plot = function (...plotArgs) {
            return originalPlot.call(this, { document, ...plotArgs[0] });
          };
        }
        return result;
      };
    } else {
      return target[prop];
    }
  },
});

export default Plot;
