import { useId, useState } from "react";
import InputText from "./InputText";
import Select from "./Select";

const CalcInput = ({ className }) => {
  const inputId = useId();
  const labelClassNames = [className, "calc-input"].join(" ");
  const selectOptions = [
    { value: "trx", content: "trx" },
    { value: "nxm", content: "nxm" },
  ];
  const [selectedValue, setSelectedValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  return (
    <label htmlFor={inputId} className={labelClassNames}>
      <div className="calc-input__head">
        <span className="calc-input__head-text">You pay</span>
        <button className="calc-input__head-button">Max</button>
      </div>
      <div className="calc-input__body">
        <InputText
          id={inputId}
          placeholder="0"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <Select
          listOptions={selectOptions}
          title="trx"
          onChange={(value) => {
            setSelectedValue(value);
          }}
        />
      </div>
      <div className="calc-input__footer">
        <span className="calc-input__footer-text">~$</span>
      </div>
    </label>
  );
};

export default CalcInput;
