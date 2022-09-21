import { useEffect, useState } from "react";
import CalcReverseButton from "../common/CalcReverseButton";
import ConvertService from "../service/ConvertService";
import { validatorNumber } from "../utils/validator";
import CalcInput from "./CalcInput";

const ConvertPortableBody = () => {
  const [inputCurrency, setInputCurrency] = useState("");
  const [inputConvertedCurrency, setInputConvertedCurrency] = useState("");
  const [validError, setValidError] = useState("");
  const [currencyFrom, setCurrencyFrom] = useState("btc");
  const [currencyTo, setCurrencyTo] = useState("eth");
  const [currencyRate, setCurrencyRate] = useState(0);

  const convert = new ConvertService();

  const onInput = function (value) {
    const isValid = validatorNumber(value);

    if (!isValid) {
      setValidError("Please, enter only numbers and .");
      return;
    }

    setInputCurrency(value);
    setValidError("");
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
    const convertCurrency = async function () {
      try {
        const rate = await convert.setRate(currencyFrom, currencyTo);
        setCurrencyRate(rate);
      } catch (e) {
        console.log("error", e);
      }
    };

    convertCurrency();
  }, [currencyFrom, currencyTo]);

  useEffect(() => {
    // if (hasError) {
    //   return;
    // }
    const result = convert.convertTo(inputCurrency, currencyRate);
    setInputConvertedCurrency(result);
  }, [inputCurrency, currencyRate]);

  return (
    <div className="convert-body">
      <CalcInput
        className="convert-body__input"
        placeholder="0"
        headTitle="You pay"
        footerText="123"
        onInput={onInput}
        value={inputCurrency}
        validError={validError}
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
        footerText="456"
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
