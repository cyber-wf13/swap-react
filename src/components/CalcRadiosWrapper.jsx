import { useId, useState } from "react";
import { validatorNumber } from "../utils/validator";
import CalcRadio from "./CalcRadio";
import CalcTextField from "./CalcTextField";

const CalcRadiosWrapper = ({ changeRadios }) => {
  const radiosName = useId();
  const [selectedValue, setSelectedValue] = useState("0.1");
  const [isValid, setIsValid] = useState(true);
  const [textFieldClass, setTextFieldClass] = useState("");

  const onChange = function (e) {
    const value = e.target.value;
    setIsValid(validatorNumber(value));
    if (!isValid) {
      setTextFieldClass("calc-textfield__input--invalid");
      return;
    }
    setTextFieldClass("");
    setSelectedValue(value);
    changeRadios(value);
  };

  return (
    <div className="calc-radios">
      <CalcRadio
        text={"0.1%"}
        checked={true}
        value="0.1"
        onChange={onChange}
        name={radiosName}
      />
      <CalcRadio
        text={"0.5%"}
        value="0.5"
        onChange={onChange}
        name={radiosName}
      />
      <CalcRadio
        text={"1.0%"}
        value="1"
        onChange={onChange}
        name={radiosName}
      />
      <CalcTextField
        placeholder={selectedValue}
        onChange={onChange}
        className={textFieldClass}
      />
    </div>
  );
};

export default CalcRadiosWrapper;
