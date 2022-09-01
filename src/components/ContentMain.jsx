import CalcInput from "./CalcInput";

const ContentMain = (props) => {
  const selectOptions = [
    { value: "trx", content: "trx" },
    { value: "nxm", content: "nxm" },
  ];

  const onInput = function (inputValue, selectedValue) {
    console.log(inputValue, selectedValue);
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
      <div className="calc__body"></div>
    </div>
  );
};

export default ContentMain;
