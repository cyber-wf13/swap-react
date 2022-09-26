export default class ConvertAPI {
  constructor() {
    this.mainUrl = "https://www.cryptocompare.com";
    this._restPath = "https://min-api.cryptocompare.com/data/";
    this._KEY =
      "0973dc2c4563c621d5383d495328924caca026495cc60b8d576805ba994d8fac";
    this._headers = {
      authorization: this._KEY,
    };
  }

  async getCoinList() {
    const uri = this._restPath + `blockchain/list?api_key=${this._KEY}`;
    const response = await fetch(uri);
    return response.json();
  }

  async getSpecificRate(from, to) {
    const url = this._restPath + `price?fsym=${from}&tsyms=${to}`;
    const response = await fetch(url, {
      headers: this._headers,
    });
    return response.json();
  }

  async getToplistData(limit = 20) {
    const url = this._restPath + `top/totalvolfull?limit=${limit}&tsym=USD`;
    const response = await fetch(url, {
      headers: this._headers,
    });

    return response.json();
  }
}
