import { createStore } from "redux";
import ReactDOM from "react-dom";
import ApplicationElement from "../application-element/index.js";

export default ({ exchangeRatesService } = {}) => {
  const store = createStore(
    (state = { latestExchangeRates: undefined, dialog: {} }, action) => {
      switch (action.type) {
        case "SHOW_DIALOG":
          state.dialog.open = true;
          state.dialog.text = action.text;
          break;
        case "HIDE_DIALOG":
          state.dialog.open = false;
          break;
        case "UPDATE_LATEST_EXCHANGE_RATES":
          state.latestExchangeRates = action.latestExchangeRates;
          break;
      }
      return state;
    }
  );

  const containerElement = document.createElement("article");
  const fetchExchangeRates = async () => {
    store.dispatch({
      type: "SHOW_DIALOG",
      text: "Fetching latest exchange rates…"
    });
    try {
      store.dispatch({
        type: "UPDATE_LATEST_EXCHANGE_RATES",
        latestExchangeRates: await exchangeRatesService.getLatestExchangeRates()
      });
      store.dispatch({ type: "HIDE_DIALOG" });
    } catch (error) {
      store.dispatch({
        type: "SHOW_DIALOG",
        text: "Error fetching exchange rates. Please try again later."
      });
    }
  };

  const render = () => {
    const { dialog, latestExchangeRates } = store.getState();

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

  store.subscribe(render);

  render();

  return containerElement;
};
