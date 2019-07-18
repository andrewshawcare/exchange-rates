import ApplicationElement from "./index.js";

describe("ApplicationElement", () => {
  const buttonSelector = ".fetch.exchange.rates.button";
  const tableSelector = ".exchange.rates.table";

  it("Displays a fetch exchange rates button", () => {
    const applicationElement = ApplicationElement();
    const buttonElement = applicationElement.querySelector(buttonSelector);

    expect(buttonElement.nodeName).toBe("BUTTON");
  });

  it("Displays an exchange rates table", () => {
    const applicationElement = ApplicationElement();
    const tableElement = applicationElement.querySelector(tableSelector);

    expect(tableElement.nodeName).toBe("TABLE");
  });

  it("Displays exchange rate rows", () => {});
});
