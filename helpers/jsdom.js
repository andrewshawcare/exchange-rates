import { JSDOM } from "jsdom";

const jsdom = new JSDOM(
  `
  <!doctype html>
  <html lang="en">
    <head>
      <title></title>
    </head>
    <body></body>
  </html>
  `,
  { pretendToBeVisual: true, url: "http://localhost" }
);

global.document = jsdom.window.document;
const filteredProperties = ["setTimeout"];
Object.getOwnPropertyNames(jsdom.window)
  .filter(ownPropertyName => !filteredProperties.includes(ownPropertyName))
  .forEach(ownPropertyName => {
    global[ownPropertyName] = jsdom.window[ownPropertyName];
  });
