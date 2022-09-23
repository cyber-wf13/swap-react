import { useId, useState } from "react";
import InputText from "../common/InputText";
import { validatorNumber } from "../utils/validator";

const CalcInput = ({
  className,
  headTitle,
  footerText,
  onInput,
  value,
  children,
  ...props
}) => {
  const inputId = useId();
  const [validError, setValidError] = useState("");

  let labelClassNames = [className, "calc-input"];
  if (props.disabled) {
    labelClassNames.push("calc-input--disabled");
  }
  labelClassNames = labelClassNames.join(" ");

  const inputChangeHandle = function (value) {
    const isValid = validatorNumber(value);

    if (!isValid) {
      setValidError("Please, enter only numbers and .");
      return;
    }
    onInput(value);
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
              onInput("");
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
          value={value}
          onInput={(e) => {
            const value = e.target.value;
            inputChangeHandle(value);
          }}
        />
        {children}
      </div>
      <div className="calc-input__footer">
        <span className="calc-input__footer-text">~${footerText}</span>
      </div>
    </label>
  );
};

export default CalcInput;
