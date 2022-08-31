import CalcInput from "./CalcInput";

const ContentMain = (props) => {
  return (
    <div className="calc">
      <div className="calc__inputs">
        <CalcInput className="calc__inputs-item" />
        <CalcInput className="calc__inputs-item" />
      </div>
      <div className="calc__body"></div>
    </div>
  );
};

export default ContentMain;
