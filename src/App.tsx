import React, { useEffect, useState } from "react";
import "./App.css";
import BoardComponent from "./components/Board";
import { Board } from "./models/Board";
import { Colors } from "./models/Colors";
import { Player } from "./models/Player";

function App() {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.initFigures();
    setBoard(newBoard);
  };

  useEffect(() => {
    restart();
    setCurrentPlayer(blackPlayer);
  }, []);

  function swapPlayers() {
    setCurrentPlayer(
      currentPlayer?.color === Colors.BLACK ? whitePlayer : blackPlayer
    );
  }

  return (
    <div className="app">
      <BoardComponent board={board} setBoard={setBoard} swapPlayers={swapPlayers} currentPlayer={currentPlayer}/>
    </div>
  );
}

export default App;
