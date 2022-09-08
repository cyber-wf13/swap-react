const CalcRow = ({ text, children }) => {
  return (
    <div className="calc-row">
      <span className="calc-row__text">{text}</span>
      <div className="calc-row__body">{children}</div>
    </div>
  );
};

export default CalcRow;
