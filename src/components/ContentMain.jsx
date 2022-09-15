import { useState, useEffect } from "react";
import CalcReverseButton from "../common/CalcReverseButton";
import CalcInput from "./CalcInput";
import CalcRadiosWrapper from "./CalcRadiosWrapper";
import CalcRow from "./CalcRow";
import Select from "../common/Select";
import { validatorNumber } from "../utils/validator";
import ConvertService from "../service/ConvertService";
import CoinAPI from "../API/CoinAPI";

const ContentMain = (props) => {
  const convert = new ConvertService();
  const selectOptions = convert.currencyList.map((curr) => {
    return { value: curr, content: curr };
  });

  const [radioValue, setRadioValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState(
    selectOptions[0].content
  );
  const [convertedCurrency, setConvertedCurrency] = useState(
    selectOptions[1].content
  );
  const [convertedValue, setConvertedValue] = useState("");
  const [validError, setValidError] = useState("");

  useEffect(() => {}, []);

  async function convertCurrency() {
    const result = await convert.convertTo(
      inputValue,
      selectedCurrency,
      convertedCurrency
    );
    setConvertedValue(result);
  }

  useEffect(() => {
    convertCurrency();
  }, [inputValue, selectedCurrency, convertedCurrency]);

  const onInput = function (value) {
    const isValid = validatorNumber(value);

    if (!isValid) {
      setValidError("Please, enter only numbers and .");
      return;
    }

    setInputValue(value);
    setValidError("");
  };

  const changeRadios = function (value) {
    setRadioValue(value);
  };

  const onClickReverseButton = function () {
    setSelectedCurrency(convertedCurrency);
    setConvertedCurrency(selectedCurrency);
  };

  return (
    <div className="calc">
      <div className="calc__inputs">
        <CalcInput
          className="calc__inputs-item"
          placeholder="0"
          headTitle="You pay"
          footerText="123"
          onInput={onInput}
          value={inputValue}
          validError={validError}
        >
          <Select
            listOptions={selectOptions}
            title={selectedCurrency}
            onChange={(value) => {
              setSelectedCurrency(value);
            }}
          />
        </CalcInput>
        <CalcReverseButton onClick={onClickReverseButton} />
        <CalcInput
          className="calc__inputs-item"
          placeholder="0"
          headTitle="You receive"
          disabled={true}
          footerText="456"
          value={convertedValue}
        >
          <Select
            listOptions={selectOptions}
            title={convertedCurrency}
            onChange={(value) => {
              setConvertedCurrency(value);
            }}
          />
        </CalcInput>
      </div>
      <div className="calc__body">
        <CalcRow text={"Rate"}>
          1 {selectedCurrency} ≈ 1084,1 {convertedCurrency}
        </CalcRow>
        <CalcRow text={"Inverse rate"}>
          1 {convertedCurrency} ≈ 0.06494 {selectedCurrency}
        </CalcRow>
        <CalcRow text={"Slippage tolerance:"}>
          <CalcRadiosWrapper changeRadios={changeRadios} />
        </CalcRow>
        <CalcRow text={"Minimum received:"}>0.00000 NXM</CalcRow>
      </div>
    </div>
  );
};

export default ContentMain;
