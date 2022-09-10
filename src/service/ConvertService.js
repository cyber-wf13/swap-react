export default class ConvertReverse {
  static convertTo(currencyCount, currencyFrom, currencyTo) {
    let result = 0;

    const currency = {
      trx: {
        nxm: 0.064,
      },
      nxm: {
        trx: 1084.1,
      },
    };

    result = currencyCount * currency[currencyFrom][currencyTo];
    return result;
  }
}
