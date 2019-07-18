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
  { url: "http://localhost" }
);

const filteredProperties = ["setTimeout"];
Object.getOwnPropertyNames(jsdom.window)
  .filter(ownPropertyName => !filteredProperties.includes(ownPropertyName))
  .forEach(ownPropertyName => {
    global[ownPropertyName] = jsdom.window[ownPropertyName];
  });
