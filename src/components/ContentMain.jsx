import { useState, useEffect } from "react";
import CalcReverseButton from "../common/CalcReverseButton";
import CalcInput from "./CalcInput";
import CalcRow from "./CalcRow";
import Select from "../common/Select";
import { useConvert } from "../hooks/useConvert";
import ConvertService from "../service/ConvertService";

const ContentMain = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [coinsList, setCoinsList] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("btc");
  const [convertedCurrency, setConvertedCurrency] = useState("btc");
  const [convertedValue, setConvertedValue] = useState("");
  const [hasError, setHasError] = useState(false);
  const [result, setRate, currencyRate] = useConvert(inputValue);
  const [inverseResult, setInverseRate, inverseRate] = useConvert(1);
  const [usdResult, setUsdRate] = useConvert(inputValue);
  const [usdInverseResult, setUsdInverseResult] = useConvert(result);

  useEffect(() => {
    async function getCoinsList() {
      const convert = new ConvertService();
      const list = await convert.getCurrencyList();
      setCoinsList(list);
      setSelectedCurrency(list[0].content);
      setConvertedCurrency(list[1].content);
    }

    getCoinsList();
  }, []);

  useEffect(() => {
    setRate(selectedCurrency, convertedCurrency);
    setInverseRate(convertedCurrency, selectedCurrency);
    setUsdRate(selectedCurrency, "USD");
    setUsdInverseResult(convertedCurrency, "USD");
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
          footerText={usdResult}
          onInput={onInput}
          value={inputValue}
        >
          <Select
            listOptions={coinsList}
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
          footerText={usdInverseResult}
          value={convertedValue}
        >
          <Select
            listOptions={coinsList}
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
          1 {convertedCurrency} ≈ {inverseRate} {selectedCurrency}
        </CalcRow>
      </div>
    </div>
  );
};

export default ContentMain;
