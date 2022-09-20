import ConvertAPI from "../API/ConvertAPI";

export default class ConvertService {
  constructor() {
    this.currencyList = [
      "BTC",
      "DLC",
      "CAR",
      "TAG",
      "RIN",
      "CASH",
      "NXS",
      "HCC",
      "GB",
      "DDC",
    ];
    this._api = new ConvertAPI();
  }

  setRate(currencyFrom, currencyTo) {
    return this._api
      .getSpecificRate(currencyFrom, currencyTo)
      .then((currencyParam) => {
        return currencyParam[currencyTo];
      });
  }

  convertTo(currencyCount, rate) {
    if (rate === undefined || isNaN(rate)) {
      return;
    }
    return currencyCount * rate;
  }
}
