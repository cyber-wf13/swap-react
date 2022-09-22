import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNfcDirectional } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import ConvertPortableBody from "./ConvertPortableBody";

const LightConvert = () => {
  const [isVissible, setIsVissible] = useState(false);
  const toggleConvertVissible = function () {
    setIsVissible(!isVissible);
  };
  return (
    <div className="convert-portable">
      <button className="convert-portable__btn" onClick={toggleConvertVissible}>
        <FontAwesomeIcon
          icon={faNfcDirectional}
          className="convert-portable__btn-icon"
        />
      </button>
      {isVissible && <ConvertPortableBody />}
    </div>
  );
};

export default LightConvert;
