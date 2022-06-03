import React, { Fragment, useEffect, useState } from "react";
import { Board } from "../models/Board";
import { Cell } from "../models/Cell";
import CellComponent from "./Cell";

export interface IBoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

export default function BoardComponent({ board, setBoard }: IBoardProps) {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  function click(cell: Cell) {
    if (selectedCell && cell.available) {
      selectedCell.moveFigure(cell);
      setSelectedCell(null);
    } else {
      if (cell.figure) setSelectedCell(cell);
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
