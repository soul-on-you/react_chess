import * as React from "react";
import { Cell } from "../models/Cell";

export interface ICellProps {
  cell: Cell;
}

export default function CellComponent({ cell }: ICellProps) {
  return (
    <div className={["cell", cell.color].join(" ")}>
      {/* {cell.figure && <Figure figure={cell.figure}>} */}
    </div>
  );
}
