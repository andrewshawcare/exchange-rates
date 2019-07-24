import React from "react";
import DialogElement from "../dialog-element/index.js";
import ButtonElement from "../button-element/index.js";
import TableElement from "../table-element/index.js";

export default ({
  dialog,
  fetchExchangeRatesButton,
  exchangeRatesTable
} = {}) => {
  return React.createElement(
    "section",
    null,
    React.createElement(DialogElement, dialog),
    React.createElement(ButtonElement, fetchExchangeRatesButton),
    React.createElement(TableElement, exchangeRatesTable)
  );
};
