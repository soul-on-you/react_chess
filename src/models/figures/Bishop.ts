import { Cell } from "../Cell";
import { Figure, FigureTypes } from "./IFigure";
import logoBlack from "../../assets/black-bishop.svg";
import logoWhite from "../../assets/white-bishop.svg";
import { Colors } from "../Colors";

export class Bishop extends Figure {
  readonly logo: string;
  readonly type: FigureTypes = FigureTypes.BISHOP;

  constructor(cell: Cell, color: Colors) {
    super(cell, color);
    this.logo = color === Colors.BLACK ? logoBlack : logoWhite;
  }

  public override canMove(target: Cell): boolean {
    if (super.canMove(target))
      if (this.cell.isEmptyDiagonal(target)) return true;
    return false;
  }
  moveFigure(target: Cell): void {}
}
