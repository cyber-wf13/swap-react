import { useState, useEffect } from "react";
import CalcReverseButton from "../common/CalcReverseButton";
import CalcInput from "./CalcInput";
import CalcRow from "./CalcRow";
import Select from "../common/Select";
import { validatorNumber } from "../utils/validator";
import ConvertService from "../service/ConvertService";

const ContentMain = (props) => {
  const convert = new ConvertService();
  const selectOptions = convert.currencyList.map((curr) => {
    return { value: curr, content: curr };
  });

  const [inputValue, setInputValue] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState(
    selectOptions[0].content
  );
  const [convertedCurrency, setConvertedCurrency] = useState(
    selectOptions[1].content
  );
  const [convertedValue, setConvertedValue] = useState("");
  const [validError, setValidError] = useState("");
  const [currencyRate, setCurrencyRate] = useState(0);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const convertCurrency = async function () {
      try {
        const rate = await convert.setRate(selectedCurrency, convertedCurrency);
        setCurrencyRate(rate);
      } catch (e) {
        console.log("error", e);
      }
    };

    convertCurrency();
  }, [selectedCurrency, convertedCurrency]);

  useEffect(() => {
    if (hasError) {
      return;
    }
    const result = convert.convertTo(inputValue, currencyRate);
    setConvertedValue(result);
  }, [inputValue, currencyRate]);

  const onInput = function (value) {
    const isValid = validatorNumber(value);

    if (!isValid) {
      setValidError("Please, enter only numbers and .");
      return;
    }
    setInputValue(value);
    setValidError("");
  };

  const onClickReverseButton = function () {
    setSelectedCurrency(convertedCurrency);
    setConvertedCurrency(selectedCurrency);
  };

  return (
    <div className="calc">
      {hasError && <div className="error">error</div>}
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
          1 {selectedCurrency} ≈ {currencyRate} {convertedCurrency}
        </CalcRow>
        <CalcRow text={"Inverse rate"}>
          1 {convertedCurrency} ≈ 0.06494 {selectedCurrency}
        </CalcRow>
      </div>
    </div>
  );
};

export default ContentMain;
