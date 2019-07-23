import { DateTime } from "luxon";
import Application from "./index.js";
import waitForElements from "../wait-for-elements/index.js";

describe("Application", () => {
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
    const buttonElement = application.querySelector(
      ".fetch.exchange.rates.button"
    );

    buttonElement.click();

    const rowElements = await waitForElements({
      parentElement: application,
      selector: ".exchange.rates.table tbody tr"
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
    const buttonElement = application.querySelector(
      ".fetch.exchange.rates.button"
    );

    buttonElement.click();

    const dialogElements = await waitForElements({
      parentElement: application,
      selector: ".dialog"
    });

    expect(dialogElements.length).toBe(1);
    expect(dialogElements[0].innerText).toBe("Fetching latest exchange rates…");
  });

  it("displays an error dialog when fetching exchange rates fails", async () => {
    const application = Application({
      exchangeRatesService: {
        getLatestExchangeRates: () => {
          throw "Error retrieving exchange rates";
        }
      }
    });
    const buttonElement = application.querySelector(
      ".fetch.exchange.rates.button"
    );

    buttonElement.click();

    const dialogElements = await waitForElements({
      parentElement: application,
      selector: ".dialog"
    });

    expect(dialogElements.length).toBe(1);
    expect(dialogElements[0].innerText).toBe(
      "Error fetching exchange rates. Please try again later."
    );
  });
});
