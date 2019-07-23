import ApplicationElement from "./index.js";

describe("Application element", () => {
  it("displays a dialog", () => {
    const applicationElement = ApplicationElement();
    const buttonElement = applicationElement.querySelector(".dialog");

    expect(buttonElement.nodeName).toBe("DIALOG");
  });

  it("displays a fetch exchange rates button", () => {
    const applicationElement = ApplicationElement();
    const buttonElement = applicationElement.querySelector(
      ".fetch.exchange.rates.button"
    );

    expect(buttonElement.nodeName).toBe("BUTTON");
  });

  it("displays an exchange rates table", () => {
    const applicationElement = ApplicationElement();
    const tableElement = applicationElement.querySelector(
      ".exchange.rates.table"
    );

    expect(tableElement.nodeName).toBe("TABLE");
  });
});
