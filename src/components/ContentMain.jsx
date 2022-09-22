import { useState, useEffect } from "react";
import CalcReverseButton from "../common/CalcReverseButton";
import CalcInput from "./CalcInput";
import CalcRow from "./CalcRow";
import Select from "../common/Select";
import { useConvert } from "../hooks/useConvert";
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
  const [hasError, setHasError] = useState(false);
  const [result, setRate, currencyRate] = useConvert(inputValue);

  useEffect(() => {
    setRate(selectedCurrency, convertedCurrency);
  }, [selectedCurrency, convertedCurrency]);

  useEffect(() => {
    if (hasError) {
      return;
    }

    setConvertedValue(result);
  }, [inputValue, currencyRate]);

  const onInput = function (value) {
    setInputValue(value);
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
