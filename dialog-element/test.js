import ReactDOM from "react-dom";
import DialogElement from "./index.js";

describe("Dialog element", () => {
  let containerElement;

  beforeEach(() => {
    containerElement = document.createElement("div");
    document.body.appendChild(containerElement);
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("is a dialog", () => {
    ReactDOM.render(DialogElement(), containerElement);
    const dialogElement = containerElement.querySelector("dialog");

    expect(dialogElement.nodeName).toBe("DIALOG");
  });

  it("renders the text correctly", () => {
    const text = "Lorem ipsum";
    ReactDOM.render(DialogElement({ text }), containerElement);
    const dialogElement = containerElement.querySelector("dialog");

    expect(dialogElement.textContent).toBe(text);
  });

  it("renders closed by default", () => {
    ReactDOM.render(DialogElement(), containerElement);
    const dialogElement = containerElement.querySelector("dialog");

    expect(dialogElement.open).toBe(false);
  });
});
