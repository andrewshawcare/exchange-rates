import ApplicationElement from "./index.js";
import ReactDOM from "react-dom";

describe("Application element", () => {
  let containerElement;

  beforeEach(() => {
    containerElement = document.createElement("div");
    document.body.appendChild(containerElement);
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("displays a dialog", () => {
    ReactDOM.render(ApplicationElement(), containerElement);
    const applicationElement = containerElement.querySelector("section");
    const buttonElement = applicationElement.querySelector("dialog");

    expect(buttonElement.nodeName).toBe("DIALOG");
  });

  it("displays a fetch exchange rates button", () => {
    ReactDOM.render(
      ApplicationElement({
        fetchExchangeRatesButton: { className: "fetch exchange rates" }
      }),
      containerElement
    );
    const applicationElement = containerElement.querySelector("section");
    const buttonElement = applicationElement.querySelector(
      "button.fetch.exchange.rates"
    );

    expect(buttonElement.nodeName).toBe("BUTTON");
  });

  it("displays an exchange rates table", () => {
    ReactDOM.render(
      ApplicationElement({
        exchangeRatesTable: { className: "exchange rates" }
      }),
      containerElement
    );
    const applicationElement = containerElement.querySelector("section");
    const tableElement = applicationElement.querySelector(
      "table.exchange.rates"
    );

    expect(tableElement.nodeName).toBe("TABLE");
  });
});
