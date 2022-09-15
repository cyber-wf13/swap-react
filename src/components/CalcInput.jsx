import { useId, useState } from "react";
import InputText from "../common/InputText";

const CalcInput = ({
  className,
  headTitle,
  footerText,
  onInput,
  value,
  validError,
  children,
  ...props
}) => {
  const inputId = useId();
  let labelClassNames = [className, "calc-input"];
  if (props.disabled) {
    labelClassNames.push("calc-input--disabled");
  }
  labelClassNames = labelClassNames.join(" ");

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
          onChange={({ target }) => {
            const value = target.value;
            onInput(value);
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
