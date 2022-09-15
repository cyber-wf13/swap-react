// API key: C4506520-B7AD-4357-8D19-BAB3698F53A4

/* 
Запрос на отримання курсу по обміну А => В
/v1/exchangerate/{asset_id_base}/{asset_id_quote}

Запрос на отримання курсу А до ВСІХ валют
/v1/exchangerate/{asset_id_base}

*/

export default class CoinAPI {
  constructor() {
    this._restPath = "https://rest.coinapi.io";
    this._KEY = "C4506520-B7AD-4357-8D19-BAB3698F53A4";
    this._headers = {
      "X-CoinAPI-Key": this._KEY,
      Accept: "application/json",
    };
  }

  async getSpecificRate(from, to) {
    const path = this._restPath + `/v1/exchangerate/${from}/${to}`;
    const response = await fetch(path, {
      headers: this._headers,
    });
    return response.json();
  }
}
