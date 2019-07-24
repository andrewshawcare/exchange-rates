import { DateTime } from "luxon";
import Application from "./index.js";
import waitForElements from "../wait-for-elements/index.js";

describe("Application", () => {
  let containerElement;

  beforeEach(() => {
    containerElement = document.createElement("div");
    document.body.appendChild(containerElement);
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("displays exchange rates when the fetch exchange rates button is clicked", async () => {
    const application = Application({
      exchangeRatesService: {
        getLatestExchangeRates: () => {
          return {
            date: DateTime.local().toISODate(),
            base: "EUR",
            rates: { CAD: 2, USD: 0.5 }
          };
        }
      }
    });
    containerElement.appendChild(application);
    const buttonElement = application.querySelector(
      "button.fetch.exchange.rates"
    );

    buttonElement.click();

    const rowElements = await waitForElements({
      parentElement: application,
      selector: "table.exchange.rates tbody tr"
    });

    expect(rowElements.length).toBeGreaterThan(0);
  });

  it("displays a loading dialog while fetching exchange rates", async () => {
    const application = Application({
      exchangeRatesService: {
        getLatestExchangeRates: () =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve({
                date: DateTime.local().toISODate(),
                base: "EUR",
                rates: { CAD: 2, USD: 0.5 }
              });
            }, 100);
          })
      }
    });
    containerElement.appendChild(application);
    const buttonElement = application.querySelector(
      "button.fetch.exchange.rates"
    );

    buttonElement.click();

    const dialogElements = await waitForElements({
      parentElement: application,
      selector: "dialog"
    });

    expect(dialogElements.length).toBe(1);
    expect(dialogElements[0].textContent).toBe(
      "Fetching latest exchange rates…"
    );
  });

  it("displays an error dialog when fetching exchange rates fails", async () => {
    const application = Application({
      exchangeRatesService: {
        getLatestExchangeRates: () => {
          throw "Error retrieving exchange rates";
        }
      }
    });
    containerElement.appendChild(application);
    const buttonElement = application.querySelector(
      "button.fetch.exchange.rates"
    );

    buttonElement.click();

    const dialogElements = await waitForElements({
      parentElement: application,
      selector: "dialog"
    });

    expect(dialogElements.length).toBe(1);

    expect(dialogElements[0].textContent).toBe(
      "Error fetching exchange rates. Please try again later."
    );
  });
});
