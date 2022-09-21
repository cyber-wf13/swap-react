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

  async setRate(currencyFrom, currencyTo) {
    const currencyParam = await this._api.getSpecificRate(
      currencyFrom,
      currencyTo
    );

    return currencyParam[currencyTo];
  }

  convertTo(currencyCount, rate) {
    if (rate === undefined || isNaN(rate)) {
      return;
    }
    return currencyCount * rate;
  }

  /* 
  Endpoint "Toplist by 24H Volume Full Data" - отримання даних для таблиці
  RAW 
  -- CHANGE24HOUR (зміни за 24 години) 
    -- CHANGEPCT24HOUR (зміни за 24 години в %) 
  -- CHANGEHOUR (зміни за 1 годину)
  -- CHANGEPCTHOUR (зміни за 1 годину в %)
  */

  async getTableData() {
    const topListData = await this._api.getToplistData();
    const tableData = [];
    for (const data of await topListData.Data) {
      tableData.push({
        name: data.CoinInfo.Name,
        fullName: data.CoinInfo.FullName,
        logo: this._api.mainUrl + data.CoinInfo.ImageUrl,
        changeHour: data.RAW.USD.CHANGEPCTHOUR,
        change24Hour: data.RAW.USD.CHANGEPCT24HOUR,
        usdPrice: data.DISPLAY.USD.PRICE,
      });
    }

    return tableData;
  }
}
