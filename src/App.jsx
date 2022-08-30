import { useState } from "react";

import Header from "./components/Header";
import Game from "./components/Game";
import Modal from "./components/Modal";

import "./App.css";

function App() {
  const [gameScore, setGameScore] = useState(0);

  return (
    <div className="App">
      <Header gameScore={gameScore} setGameScore={setGameScore} />
      <Game setGameScore={setGameScore} />
      <Modal />
    </div>
  );
}

export default App;
