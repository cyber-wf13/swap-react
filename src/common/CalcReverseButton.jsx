import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";

const CalcReverseButton = (props) => {
  return (
    <button className="calc-reverse-button" type="button" {...props}>
      <FontAwesomeIcon icon={faRotate} className="calc-reverse-button__icon" />
    </button>
  );
};

export default CalcReverseButton;
