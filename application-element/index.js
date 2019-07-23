import DialogElement from "../dialog-element/index.js";
import ButtonElement from "../button-element/index.js";
import TableElement from "../table-element/index.js";

export default ({
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
