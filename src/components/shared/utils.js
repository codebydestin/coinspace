import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

function calcValue(value) {
  if (value > 0)
    return (
      <span className='positive-text'>
        {value} % <FontAwesomeIcon icon={faCaretUp} />
      </span>
    );
  return (
    <span className='negative-text'>
      {value} % <FontAwesomeIcon icon={faCaretDown} />
    </span>
  );
}

export default calcValue;
