import { useId, useState } from "react";
import { validatorNumber } from "../utils/validator";
import InputText from "./InputText";
import Select from "./Select";

const CalcInput = ({
  className,
  selectTitle,
  selectOptions,
  headTitle,
  footerText,
  onInput,
  ...props
}) => {
  const inputId = useId();
  const [validError, setValidError] = useState("");
  let labelClassNames = [className, "calc-input"];
  if (props.disabled) {
    labelClassNames.push("calc-input--disabled");
  }
  labelClassNames = labelClassNames.join(" ");

  const [selectedValue, setSelectedValue] = useState(selectTitle);
  const [inputValue, setInputValue] = useState("");

  const onChange = function (e) {
    const value = e.target.value;
    const isValid = validatorNumber(value);
    if (!isValid) {
      setValidError("Please, enter only numbers and .");
      return;
    }
    setInputValue(value);
    onInput(value, selectedValue);
    setValidError("");
  };

  return (
    <label htmlFor={inputId} className={labelClassNames}>
      <div className="calc-input__head">
        <span className="calc-input__head-text">{headTitle}</span>
        {!props.disabled && (
          <button
            className="calc-input__head-button"
            onClick={() => {
              setInputValue("");
              onInput(inputValue, selectedValue);
            }}
          >
            Reset
          </button>
        )}
      </div>
      <div className="calc-input__body">
        {validError && (
          <span className="calc-input__body-error">{validError}</span>
        )}
        <InputText
          id={inputId}
          {...props}
          value={inputValue}
          onChange={onChange}
        />
        {!props.disabled ? (
          <Select
            listOptions={selectOptions}
            title={selectTitle}
            onChange={(value) => {
              setSelectedValue(value);
              onInput(inputValue, value);
            }}
          />
        ) : (
          <span className="calc-input__body-text">{selectTitle}</span>
        )}
      </div>
      <div className="calc-input__footer">
        <span className="calc-input__footer-text">~${footerText}</span>
      </div>
    </label>
  );
};

export default CalcInput;
