import ApplicationElement from "../application-element/index.js";

export default ({ exchangeRatesService } = {}) => {
  let latestExchangeRates;
  let dialog = {};

  const rootElement = document.createElement("article");
  const fetchExchangeRates = async () => {
    dialog = {
      text: "Fetching latest exchange rates…",
      open: true
    };
    render();
    try {
      latestExchangeRates = await exchangeRatesService.getLatestExchangeRates();
      dialog = {};
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
        onclick: fetchExchangeRates,
        text: "Fetch exchange rates"
      },
      exchangeRatesTable: latestExchangeRates
        ? {
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

    rootElement.innerHTML = "";
    rootElement.appendChild(applicationElement);
  };

  render();

  return rootElement;
};
