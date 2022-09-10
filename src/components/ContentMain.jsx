import { useState } from "react";
import CalcReverseButton from "../common/CalcReverseButton";
import CalcInput from "./CalcInput";
import CalcRadiosWrapper from "./CalcRadiosWrapper";
import CalcRow from "./CalcRow";
import ConvertService from "../service/ConvertService";

const ContentMain = (props) => {
  const selectOptions = [
    { value: "trx", content: "trx" },
    { value: "nxm", content: "nxm" },
  ];

  const [radioValue, setRadioValue] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("trx");
  const [convertedCurrency, setConvertedCurrency] = useState("nxm");

  const onInput = function (inputValue, selectedValue) {
    setSelectedCurrency(selectedValue);
    const result = ConvertService.convertTo(
      inputValue,
      selectedCurrency,
      convertedCurrency
    );
    console.log(
      inputValue,
      `${selectedCurrency} => ${convertedCurrency}`,
      result
    );
  };

  const onCurrencyConvered = function (inputValue, selectedValue) {
    setConvertedCurrency(selectedValue);
    console.log("converted is", convertedCurrency);
  };

  const changeRadios = function (value) {
    setRadioValue(value);
  };

  return (
    <div className="calc">
      <div className="calc__inputs">
        <CalcInput
          className="calc__inputs-item"
          placeholder="0"
          headTitle="You pay"
          selectTitle={selectedCurrency}
          selectOptions={selectOptions}
          footerText="123"
          onInput={onInput}
        />
        <CalcReverseButton />
        <CalcInput
          className="calc__inputs-item"
          placeholder="0"
          headTitle="You receive"
          disabled={true}
          selectTitle={convertedCurrency}
          selectOptions={selectOptions}
          onInput={onCurrencyConvered}
          footerText="456"
        />
      </div>
      <div className="calc__body">
        <CalcRow text={"Rate"}>1 NXM ≈ 1084,1 TRX</CalcRow>
        <CalcRow text={"Inverse rate"}>1 TRX ≈ 0.06494 NXM</CalcRow>
        <CalcRow text={"Slippage tolerance:"}>
          <CalcRadiosWrapper changeRadios={changeRadios} />
        </CalcRow>
        <CalcRow text={"Minimum received:"}>0.00000 NXM</CalcRow>
      </div>
    </div>
  );
};

export default ContentMain;
