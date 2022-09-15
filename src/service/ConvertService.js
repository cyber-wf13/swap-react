import CoinAPI from "../API/CoinAPI";

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
  }

  async convertTo(currencyCount, currencyFrom, currencyTo) {
    const api = new CoinAPI();
    const { rate } = await api.getSpecificRate(currencyFrom, currencyTo);

    return currencyCount * rate;
  }
}
