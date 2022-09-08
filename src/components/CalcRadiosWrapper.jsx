import { useId } from "react";
import CalcRadio from "./CalcRadio";

const CalcRadiosWrapper = () => {
  const radiosName = useId();

  const onChange = function (e) {
    const value = e.target.value;
    // console.log(value);
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
    </div>
  );
};

export default CalcRadiosWrapper;
