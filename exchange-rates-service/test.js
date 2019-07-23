import { validate } from "jsonschema";
import ExchangeRatesService from "./index.js";

describe("Exchange rates service", () => {
  it("gets the latest exchange rates", async () => {
    const latestExchangeRates = await ExchangeRatesService().getLatestExchangeRates();

    expect(
      validate(latestExchangeRates, {
        type: "object",
        properties: {
          base: {
            type: "string"
          },
          date: {
            type: "string",
            format: "date"
          },
          rates: {
            type: "object"
          }
        },
        required: ["base", "date", "rates"]
      }).valid
    ).toBe(true);
  });
});
