var ButtonElement = ({ textLabel = "" } = {}) => {
  const buttonElement = document.createElement("button");
  buttonElement.innerText = textLabel;
  return buttonElement;
};

var ApplicationElement = ({ fetchExchangeRatesButton = {} } = {}) => {
  const applicationElement = document.createElement("section");

  const buttonElement = ButtonElement(fetchExchangeRatesButton);
  buttonElement.classList.add("fetch", "exchange", "rates", "button");
  applicationElement.appendChild(buttonElement);

  const tableElement = document.createElement("table");
  tableElement.classList.add("exchange", "rates", "table");
  applicationElement.appendChild(tableElement);

  return applicationElement;
};

document.body.appendChild(
  ApplicationElement({
    fetchExchangeRatesButton: {
      textLabel: "Fetch exchange rates"
    }
  })
);
