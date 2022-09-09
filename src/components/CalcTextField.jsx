const CalcTextField = ({ className, ...props }) => {
  const inputClassName = className
    ? ["calc-textfield__input", className].join(" ")
    : "calc-textfield__input";
  return (
    <label className="calc-textfield">
      <input type="text" className={inputClassName} {...props} />
    </label>
  );
};

export default CalcTextField;
