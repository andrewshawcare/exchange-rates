import ApplicationElement from "../application-element/index.js";

document.body.appendChild(
  ApplicationElement({
    fetchExchangeRatesButton: {
      textLabel: "Fetch exchange rates"
    }
  })
);
