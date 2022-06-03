import React from "react";
import { Cell } from "../models/Cell";
import FigureComponent from "./Figure";

export interface ICellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

export default function CellComponent({ cell, selected, click }: ICellProps) {
  return (
    <div
      className={[
        "cell",
        cell.color,
        cell.available && cell.figure ? "canKill" : "",
      ].join(" ")}
      onClick={() => click(cell)}
    >
      <div
        className={selected ? "selected" : ""}
        style={{ position: "relative" }}
      >
        {cell.figure ? (
          <FigureComponent figure={cell.figure} />
        ) : (
          <div className={cell.available ? "avaliable" : ""} />
        )}
      </div>
    </div>
  );
}
