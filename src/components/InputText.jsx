const InputText = ({ value, onChange, ...props }) => {
  return (
    <input
      className="input-text"
      type="text"
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default InputText;
