import Application from "./application/index.js";
import ExchangeRatesService from "./exchange-rates-service/index.js";

document.body.appendChild(
  Application({
    exchangeRatesService: ExchangeRatesService()
  })
);
