// API key: C4506520-B7AD-4357-8D19-BAB3698F53A4

/* 
Запрос на отримання курсу по обміну А => В
/v1/exchangerate/{asset_id_base}/{asset_id_quote}

Запрос на отримання курсу А до ВСІХ валют
/v1/exchangerate/{asset_id_base}

*/

export default class ConvertAPI {
  constructor() {
    this._restPath = "https://min-api.cryptocompare.com/data/";
    this._KEY =
      "0973dc2c4563c621d5383d495328924caca026495cc60b8d576805ba994d8fac";
    this._headers = {
      authorization: this._KEY,
    };
  }

  async getSpecificRate(from, to) {
    const path = this._restPath + `price?fsym=${from}&tsyms=${to}`;
    const response = await fetch(path, {
      headers: this._headers,
    });
    return response.json();
  }
}
