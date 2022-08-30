import paperIcon from "../../assets/images/icon-paper.svg";
import scissorsIcon from "../../assets/images/icon-scissors.svg";
import rockIcon from "../../assets/images/icon-rock.svg";

import "./style.css";

function Symbol({ option, selectSymbol }) {
  const optionsIcons = {
    paper: paperIcon,
    scissors: scissorsIcon,
    rock: rockIcon,
  };

  return (
    <button
      className={`${option ? "symbol" : "no-symbol"} ${option}`}
      onClick={() => selectSymbol && selectSymbol(option)}
    >
      {option && <img src={optionsIcons[option]} alt="Paper" />}
    </button>
  );
}

export default Symbol;
