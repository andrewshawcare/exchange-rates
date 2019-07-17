import { JSDOM } from "jsdom";

// eslint-disable-next-line no-global-assign
global.window = new JSDOM().window;

// eslint-disable-next-line no-global-assign
global.document = global.window.document;
