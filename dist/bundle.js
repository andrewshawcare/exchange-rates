(function () {
  'use strict';

  var DialogElement = ({ text = "", open = false } = {}) => {
    const dialogElement = document.createElement("dialog");

    dialogElement.classList.add("dialog");
    dialogElement.open = open;
    dialogElement.innerText = text;

    return dialogElement;
  };

  var ButtonElement = ({ text = "", onclick = () => {} } = {}) => {
    const buttonElement = document.createElement("button");

    buttonElement.classList.add("button");
    buttonElement.innerText = text;
    buttonElement.onclick = onclick;

    return buttonElement;
  };

  var TableElement = ({ caption, header, body } = {}) => {
    const tableElement = document.createElement("table");

    tableElement.classList.add("table");

    if (caption) {
      const { text } = caption;
      const captionElement = document.createElement("caption");
      captionElement.innerText = text;
      tableElement.appendChild(captionElement);
    }

    if (header) {
      const { headings = [] } = header;
      const headerElement = document.createElement("thead");
      const rowElement = document.createElement("tr");
      rowElement.append(
        ...headings.map(heading => {
          const { text = "", classList = [] } = heading;
          const headingElement = document.createElement("th");

          headingElement.classList.add(...classList);
          headingElement.innerText = text;

          return headingElement;
        })
      );
      headerElement.appendChild(rowElement);
      tableElement.appendChild(headerElement);
    }

    if (body) {
      const { rows = [] } = body;
      const bodyElement = document.createElement("tbody");
      bodyElement.append(
        ...rows.map(row => {
          const rowElement = document.createElement("tr");

          rowElement.append(
            ...row.map(datum => {
              const { text = "", classList = [] } = datum;
              const datumElement = document.createElement("td");

              datumElement.classList.add(...classList);
              datumElement.innerText = text;

              return datumElement;
            })
          );

          return rowElement;
        })
      );
      tableElement.appendChild(bodyElement);
    }

    return tableElement;
  };

  var ApplicationElement = ({
    dialog,
    fetchExchangeRatesButton,
    exchangeRatesTable
  } = {}) => {
    const applicationElement = document.createElement("section");

    const dialogElement = DialogElement(dialog);
    applicationElement.appendChild(dialogElement);

    const buttonElement = ButtonElement(fetchExchangeRatesButton);
    buttonElement.classList.add("fetch", "exchange", "rates");
    applicationElement.appendChild(buttonElement);

    const tableElement = TableElement(exchangeRatesTable);
    tableElement.classList.add("exchange", "rates");
    applicationElement.appendChild(tableElement);

    return applicationElement;
  };

  var Application = ({ exchangeRatesService } = {}) => {
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

  var ExchangeRatesService = () => {
    return {
      getLatestExchangeRates: () =>
        fetch("https://api.exchangeratesapi.io/latest").then(response =>
          response.json()
        )
    };
  };

  document.body.appendChild(
    Application({
      exchangeRatesService: ExchangeRatesService()
    })
  );

}());
