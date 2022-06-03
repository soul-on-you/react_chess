import React, { Fragment, useEffect, useState } from "react";
import { Board } from "../models/Board";
import { Cell } from "../models/Cell";
import { Player } from "../models/Player";
import CellComponent from "./Cell";

export interface IBoardProps {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  swapPlayers: () => void;
}

export default function BoardComponent({
  board,
  setBoard,
  currentPlayer,
  swapPlayers,
}: IBoardProps) {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  function click(cell: Cell) {
    if (selectedCell && cell.available) {
      selectedCell.moveFigure(cell);
      setSelectedCell(null);
      swapPlayers();
    } else {
      if (cell.figure?.color === currentPlayer?.color) setSelectedCell(cell);
      else setSelectedCell(null);
    }
  }

  function highlightCells() {
    board.highlightCells(selectedCell);
    updateBoard();
  }

  function updateBoard() {
    setBoard(board.getCopy());
  }

  useEffect(() => {
    highlightCells();
  }, [selectedCell]);

  return (
    <div className="board">
      {board.cells.map((row: Cell[], index: number) => (
        <Fragment key={index}>
          {row.map((cell: Cell) => (
            <CellComponent
              key={cell.id}
              cell={cell}
              selected={cell.id === selectedCell?.id}
              click={click}
            />
          ))}
        </Fragment>
      ))}
    </div>
  );
}
