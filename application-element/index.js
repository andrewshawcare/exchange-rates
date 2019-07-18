import ButtonElement from "../button-element/index.js";

export default ({ fetchExchangeRatesButton = {} } = {}) => {
  const applicationElement = document.createElement("section");

  const buttonElement = ButtonElement(fetchExchangeRatesButton);
  buttonElement.classList.add("fetch", "exchange", "rates", "button");
  applicationElement.appendChild(buttonElement);

  const tableElement = document.createElement("table");
  tableElement.classList.add("exchange", "rates", "table");
  applicationElement.appendChild(tableElement);

  return applicationElement;
};
