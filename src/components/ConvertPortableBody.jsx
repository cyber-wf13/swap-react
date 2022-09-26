import { useEffect, useState } from "react";
import CalcReverseButton from "../common/CalcReverseButton";
import { useConvert } from "../hooks/useConvert";
import CalcInput from "./CalcInput";

const ConvertPortableBody = () => {
  const [inputCurrency, setInputCurrency] = useState("");
  const [inputConvertedCurrency, setInputConvertedCurrency] = useState("");
  const [currencyFrom, setCurrencyFrom] = useState("btc");
  const [currencyTo, setCurrencyTo] = useState("eth");
  const [result, setRate, currencyRate] = useConvert(inputCurrency);
  const [usdResult, setUsdRate] = useConvert(inputCurrency);
  const [usdInverseResult, setUsdInverseResult] = useConvert(result);

  const onInput = function (value) {
    setInputCurrency(value);
  };

  const onClickReverseButton = function () {
    setCurrencyFrom(currencyTo);
    setCurrencyTo(currencyFrom);
  };

  const onClickClearButton = function () {
    localStorage.removeItem("convertFrom");
    localStorage.removeItem("convertTo");
  };

  useEffect(() => {
    const convertFrom = localStorage.getItem("convertFrom");
    const convertTo = localStorage.getItem("convertTo");

    if (convertFrom && convertTo) {
      setCurrencyFrom(convertFrom);
      setCurrencyTo(convertTo);
    }
  }, []);

  useEffect(() => {
    setRate(currencyFrom, currencyTo);
    setUsdRate(currencyFrom, "USD");
    setUsdInverseResult(currencyTo, "USD");
  }, [currencyFrom, currencyTo]);

  useEffect(() => {
    // if (hasError) {
    //   return;
    // }
    setInputConvertedCurrency(result);
  }, [inputCurrency, currencyRate]);

  return (
    <div className="convert-body">
      <CalcInput
        className="convert-body__input"
        placeholder="0"
        headTitle="You pay"
        footerText={usdResult}
        onInput={onInput}
        value={inputCurrency}
      >
        <span className="convert-body__input-text">{currencyFrom}</span>
      </CalcInput>
      <CalcReverseButton
        className="convert-body__icon"
        onClick={onClickReverseButton}
      />
      <CalcInput
        className="convert-body__input"
        headTitle="You receive"
        placeholder="0"
        disabled={true}
        footerText={usdInverseResult}
        value={inputConvertedCurrency}
      >
        <span className="convert-body__input-text">{currencyTo}</span>
      </CalcInput>
      <button className="convert-body__reset" onClick={onClickClearButton}>
        Clear
      </button>
    </div>
  );
};

export default ConvertPortableBody;
