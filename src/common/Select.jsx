import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";

const Select = ({ listOptions, title, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(title);

  const clickOptionHandle = function (value) {
    setIsOpen(false);
    setSelectedValue(value);
    onChange(value);
  };

  useEffect(() => {
    setSelectedValue(title);
  }, [title]);

  return (
    <div className="select">
      <div
        className="select__head"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span className="select__head-text">{selectedValue}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className="select__head-icon"
          rotation={isOpen ? 180 : 0}
        />
      </div>
      {isOpen && (
        <ul className="select__list">
          {listOptions.map((option) => {
            return (
              <li
                className="select__option"
                data-value={option.value}
                key={option.value}
                onClick={() => {
                  clickOptionHandle(option.value);
                }}
              >
                {option.content}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;
