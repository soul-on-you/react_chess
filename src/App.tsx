import React, { useEffect, useState } from "react";
import "./App.css";
import BoardComponent from "./components/Board";
import { Board } from "./models/Board";

function App() {
  const [board, setBoard] = useState(new Board());

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.initFigures();
    setBoard(newBoard);
  };

  useEffect(() => {
    restart();
  }, []);

  return (
    <div className="app">
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  );
}

export default App;
