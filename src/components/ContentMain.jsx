import CalcInput from "./CalcInput";
import CalcRadiosWrapper from "./CalcRadiosWrapper";
import CalcRow from "./CalcRow";

const ContentMain = (props) => {
  const selectOptions = [
    { value: "trx", content: "trx" },
    { value: "nxm", content: "nxm" },
  ];

  const onInput = function (inputValue, selectedValue) {
    // console.log(inputValue, selectedValue);
  };

  return (
    <div className="calc">
      <div className="calc__inputs">
        <CalcInput
          className="calc__inputs-item"
          placeholder="0"
          headTitle="You pay"
          selectTitle="trx"
          selectOptions={selectOptions}
          footerText="123"
          onInput={onInput}
        />
        <CalcInput
          className="calc__inputs-item"
          placeholder="0"
          headTitle="You receive"
          disabled={true}
          selectTitle="nxm"
          footerText="456"
        />
      </div>
      <div className="calc__body">
        <CalcRow text={"Rate"}>1 NXM ≈ 1084,1 TRX</CalcRow>
        <CalcRow text={"Inverse rate"}>1 TRX ≈ 0.06494 NXM</CalcRow>
        <CalcRow text={"Slippage tolerance:"}>
          <CalcRadiosWrapper />
        </CalcRow>
        <CalcRow text={"Minimum received:"}>0.00000 NXM</CalcRow>
      </div>
    </div>
  );
};

export default ContentMain;
