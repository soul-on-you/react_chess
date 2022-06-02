import React, { Fragment } from "react";
import { Board } from "../models/Board";
import { Cell } from "../models/Cell";
import CellComponent from "./Cell";

export interface IBoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

export default function BoardComponent({ board, setBoard }: IBoardProps) {
  return (
    <div className="board">
      {board.cells.map((row: Cell[], index: number) => (
        <Fragment key={index}>
          {row.map((cell: Cell) => (
            <CellComponent cell={cell}/>
          ))}
        </Fragment>
      ))}
    </div>
  );
}