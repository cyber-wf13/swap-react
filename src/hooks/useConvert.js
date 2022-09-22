import { useState } from "react";
import ConvertService from "../service/ConvertService";

export function useConvert(value) {
  const convert = new ConvertService();
  const [currencyRate, setCurrencyRate] = useState(0);

  const setRate = async function (selectedCurrency, convertedCurrency) {
    try {
      const rate = await convert.setRate(selectedCurrency, convertedCurrency);
      setCurrencyRate(rate);
    } catch (e) {
      console.log("error", e);
    }
  };

  const result = convert.convertTo(value, currencyRate);

  return [result, setRate, currencyRate];
}
