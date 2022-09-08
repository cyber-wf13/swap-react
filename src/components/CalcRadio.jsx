const CalcRadio = ({ text, checked = false, ...props }) => {
  return (
    <label className="calc-radio">
      <input
        type="radio"
        className="calc-radio__input _visually-hidden"
        // checked={checked}
        {...props}
      />
      <span className="calc-radio__body">{text}</span>
    </label>
  );
};

export default CalcRadio;
