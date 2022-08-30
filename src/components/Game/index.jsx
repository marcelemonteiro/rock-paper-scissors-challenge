import { useEffect, useState } from "react";
import Symbol from "../Symbol";

import "./style.css";

const gameSymbols = ["paper", "scissors", "rock"];

const userWinningPlays = [
  {
    user: "rock",
    computer: "scissors",
  },
  {
    user: "paper",
    computer: "rock",
  },
  {
    user: "scissors",
    computer: "paper",
  },
];

const playInitialState = { user: "", computer: "" };

function Game({ setGameScore }) {
  const [play, setPlay] = useState(playInitialState);

  const [isUserWin, setIsUserWin] = useState(false);

  useEffect(() => {
    if (play.user) {
      // random number betwen 0 and 1 -- para não empatar
      const randomIndex = Math.floor(Math.random() * 2);
      const gameSymbolsFiltered = gameSymbols.filter(
        (symbol) => symbol !== play.user
      );
      console.log(gameSymbolsFiltered);
      const computer = gameSymbolsFiltered[randomIndex];

      setPlay((play) => ({ ...play, computer }));
    }
  }, [play.user]);

  useEffect(() => {
    if (play.user && play.computer) {
      const result = calculatePoints(play);

      if (result) {
        setGameScore((score) => score + 1);
      }

      setIsUserWin(result);
    }
  }, [play, setGameScore]);

  const calculatePoints = (currentPlay) => {
    // currentPlay = { user: "", computer: "" }
    const result = userWinningPlays.some(
      (winningPlay) =>
        winningPlay.user === currentPlay.user &&
        winningPlay.computer === currentPlay.computer
    );
    return result;
  };

  // select user choosen symbol
  const selectSymbol = (symbol) => {
    setPlay((play) => ({ ...play, user: symbol }));
  };

  return (
    <>
      {!play.user && (
        <div className="game animeLeft">
          {gameSymbols.map((symbol) => (
            <Symbol option={symbol} selectSymbol={selectSymbol} key={symbol} />
          ))}
        </div>
      )}
      {play.user && (
        <div className="game-result animeLeft">
          <div className="user">
            <Symbol option={play.user} />
            <p>Your picked</p>
          </div>
          <div className="computer animeZoom">
            {play.computer ? <Symbol option={play.computer} /> : <Symbol />}
            <p>The house picked</p>
          </div>
          <div className="result animeLeft">
            <h3>{isUserWin ? "You win" : "You lose"}</h3>
            <button
              onClick={() => {
                setPlay(playInitialState);
              }}
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Game;
