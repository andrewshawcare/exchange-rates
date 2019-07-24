import ReactDOM from "react-dom";
import ButtonElement from "./index.js";

describe("Button", () => {
  let containerElement;

  beforeEach(() => {
    containerElement = document.createElement("div");
    document.body.appendChild(containerElement);
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("is a button", () => {
    ReactDOM.render(ButtonElement(), containerElement);
    const buttonElement = containerElement.querySelector("button");

    expect(buttonElement.nodeName).toBe("BUTTON");
  });

  it("renders the text correctly", () => {
    const text = "Lorem ipsum";
    ReactDOM.render(ButtonElement({ text }), containerElement);
    const buttonElement = containerElement.querySelector("button");

    expect(buttonElement.textContent).toBe(text);
  });

  it("responds to a click", async done => {
    ReactDOM.render(ButtonElement({ onClick: done }), containerElement);
    const buttonElement = containerElement.querySelector("button");
    buttonElement.click();
  });
});
