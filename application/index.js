import ReactDOM from "react-dom";
import ApplicationElement from "../application-element/index.js";

export default ({ exchangeRatesService } = {}) => {
  let latestExchangeRates;
  let dialog = {};

  const containerElement = document.createElement("article");
  const fetchExchangeRates = async () => {
    dialog = {
      text: "Fetching latest exchange rates…",
      open: true
    };
    render();
    try {
      latestExchangeRates = await exchangeRatesService.getLatestExchangeRates();
      dialog = { open: false };
      render();
    } catch (error) {
      dialog = {
        text: "Error fetching exchange rates. Please try again later.",
        open: true
      };
      render();
    }
  };

  const render = () => {
    const applicationElement = ApplicationElement({
      dialog: dialog,
      fetchExchangeRatesButton: {
        className: "fetch exchange rates",
        onClick: fetchExchangeRates,
        text: "Fetch exchange rates"
      },
      exchangeRatesTable: latestExchangeRates
        ? {
            className: "exchange rates",
            caption: {
              text: `Last updated on ${latestExchangeRates.date}`
            },
            header: {
              headings: [
                {
                  classList: ["currency", "code"],
                  text: "Currency code"
                },
                {
                  classList: ["base", "currency"],
                  text: latestExchangeRates.base
                }
              ]
            },
            body: {
              rows: Object.keys(latestExchangeRates.rates).map(currencyCode => {
                return [
                  {
                    classList: ["currency", "code"],
                    text: currencyCode
                  },
                  {
                    classList: ["base", "currency"],
                    text: latestExchangeRates.rates[currencyCode]
                  }
                ];
              })
            }
          }
        : {}
    });

    ReactDOM.render(applicationElement, containerElement);
  };

  render();

  return containerElement;
};
