export default () => {
  return {
    getLatestExchangeRates: () =>
      fetch("https://api.apilayer.com/exchangerates_data/latest", {
        headers: {
          apikey: "BIIfJFq2D1ItJvkCYFee65zYlWiGv82c"
        }
      }).then(response => response.json())
  };
};
