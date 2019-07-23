export default () => {
  return {
    getLatestExchangeRates: () =>
      fetch("https://api.exchangeratesapi.io/latest").then(response =>
        response.json()
      )
  };
};
