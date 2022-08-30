import logo from "../../assets/images/logo.svg";

import "./style.css";

function Header({ gameScore, setGameScore }) {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Rock Paper Scissors" />
      </div>
      {gameScore !== 0 && (
        <button className="resetScore-btn" onClick={() => setGameScore(0)}>
          Zerar score
        </button>
      )}
      <div className="header-score">
        <span>Score</span>
        <h2>{gameScore}</h2>
      </div>
    </header>
  );
}

export default Header;
