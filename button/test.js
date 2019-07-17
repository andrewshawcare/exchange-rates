import { describe, it } from "mocha";
import { assert } from "chai";
import { JSDOM } from "jsdom";
import Button from "./index.js";

const jsDom = new JSDOM();
global.window = jsDom.window;
global.document = window.document;

describe("Button", () => {
  it("Renders the label correctly", () => {
    assert.equal(Button({ label: "Lorem ipsum" }).innerText, "Lorem ipsum");
  });
});
